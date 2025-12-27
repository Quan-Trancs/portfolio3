import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { cn } from '@/lib/utils';

import { SkillSet } from '@/types/skillSet';

interface SkillSetCardProps extends SkillSet {
  className?: string;
}

function SkillSetCard({
  name, experience,
  className
}: SkillSetCardProps) {
  // Check if skill was used in internships
  const internshipCompanies = ['MightyID', 'RoboMain', 'FPT corporation', 'FPT Corporation'];
  const usedInInternship = experience && internshipCompanies.some(company => 
    experience.toLowerCase().includes(company.toLowerCase())
  );

  return (
    <Card className={cn(
      'h-full w-full rounded-md border transition-all duration-300',
      usedInInternship 
        ? 'bg-primary/10 border-primary/40 hover:bg-primary/15 hover:border-primary/60 hover:shadow-lg' 
        : 'bg-muted/40 hover:bg-muted/60 hover:border-primary/20 hover:shadow-md',
      'hover:scale-[1.01]',
      className
    )}>
      <CardContent className="p-2">
        <div className="flex flex-col gap-0.5">
          <div className="flex items-center gap-1">
            <p className={cn(
              "font-semibold transition-colors duration-300 hover:text-primary leading-tight",
              name?.includes("Query Optimization") ? "text-[10px]" : "text-xs",
              usedInInternship && "text-primary"
            )}>
              {name || 'Anonymous'}
            </p>
            {usedInInternship && (
              <span className="text-[8px] font-bold text-primary bg-primary/20 px-1 py-0.5 rounded">
                INTERN
              </span>
            )}
          </div>
          <p className="text-[10px] leading-tight text-muted-foreground line-clamp-2">
            {experience || 'No skill provided.'}
          </p>
        </div>
      </CardContent>
    </Card>
  );
}

export default SkillSetCard;

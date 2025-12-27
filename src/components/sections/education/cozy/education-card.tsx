'use client';
import React, { useState } from 'react';
import { CardContent, Card } from '@/components/ui/card';
import { GraduationCap, ChevronDown, ChevronUp } from 'lucide-react';
import { Button } from '@/components/ui/button';

import { Education } from '@/types/education';

import { cn } from '@/lib/utils';
import TextReveal from '@/components/text-reveal';
import { Badge } from '@/components/ui/badge';

interface EducationCardProps extends Education {
  className?: string;
}

function EducationCard({
  degree,
  institution,
  duration,
  location,
  description,
  gpa,
  coursework,
  className
}: EducationCardProps) {
  const [isExpanded, setIsExpanded] = useState(false);
  
  // Determine if we have expandable content
  const hasExpandableContent = !!(description || gpa || (coursework && coursework.length > 0));
  
  return (
    <Card className={cn('border-none bg-transparent', className)}>
      <CardContent className="p-1">
        <div className="flex items-start gap-4">
          <div className="mt-1">
            <GraduationCap className="h-6 w-6 text-primary" />
          </div>
          <div className="flex-1">
            <div className="flex items-baseline justify-between flex-wrap gap-2">
              <h3 className="text-2xl font-semibold">
                <TextReveal>{degree}</TextReveal>
              </h3>
              <span className="text-sm font-medium text-muted-foreground">
                <TextReveal>{duration}</TextReveal>
              </span>
            </div>
            <h4 className="mt-2 text-lg font-medium text-primary">
              <TextReveal>{institution}</TextReveal>
            </h4>
            {location && (
              <p className="mt-1 text-sm text-muted-foreground">
                <TextReveal>{location}</TextReveal>
              </p>
            )}
            
            {/* Expandable content */}
            {isExpanded && hasExpandableContent && (
              <div className="mt-4 space-y-3">
                {gpa && (
                  <div>
                    <Badge variant="secondary" className="text-sm">
                      GPA: {gpa}
                    </Badge>
                  </div>
                )}
                {description && (
                  <p className="text-sm text-muted-foreground">
                    <TextReveal>{description}</TextReveal>
                  </p>
                )}
                {coursework && coursework.length > 0 && (
                  <div>
                    <p className="text-sm font-semibold mb-2">Relevant Coursework:</p>
                    <div className="flex flex-wrap gap-2">
                      {coursework.map((course, index) => (
                        <Badge key={index} variant="outline" className="text-xs">
                          {course}
                        </Badge>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            )}
            
            {hasExpandableContent && (
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setIsExpanded(!isExpanded)}
                className="mt-3 text-primary hover:text-primary/80"
              >
                {isExpanded ? (
                  <>
                    Show Less <ChevronUp className="ml-1 h-4 w-4" />
                  </>
                ) : (
                  <>
                    Show More <ChevronDown className="ml-1 h-4 w-4" />
                  </>
                )}
              </Button>
            )}
            
            <hr className="my-6 border-t border-border" />
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

export default EducationCard;


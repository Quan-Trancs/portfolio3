import React from 'react';
import { CardContent, CardFooter, Card } from '@/components/ui/card';
import { buttonVariants } from '@/components/ui/button';

import Link from 'next/link';
import Image from 'next/image';
import { CodeIcon } from 'lucide-react';

import { Skill } from '@/types/skill';

import { cn } from '@/lib/utils';

interface SkillCardProps extends Skill {
  className?: string;
}

function SkillCard({ name, description, Icon, className }: SkillCardProps) {
  return (
    <Card className={cn(
      'bg-muted/40 border-2 transition-all duration-300',
      'hover:bg-muted/60 hover:border-primary/20 hover:shadow-lg',
      'hover:scale-[1.02] hover:-translate-y-1',
      className
    )}>
      <CardContent className="p-4 md:p-6">
        <div className="flex items-center gap-4">
          <div className="flex-shrink-0 transition-all duration-300 hover:scale-110 hover:text-primary">
            {Icon ? <Icon className="min-h-8 min-w-8" /> : <CodeIcon className="min-h-8 min-w-8" />}
          </div>
          <div className="grid gap-1 flex-1">
            <h3 className="text-xl font-semibold transition-colors duration-300 hover:text-primary">
              {name}
            </h3>
            <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed">
              {description || ''}
            </p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

export default SkillCard;

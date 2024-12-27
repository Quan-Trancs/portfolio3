import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import Image from 'next/image';
import { cn } from '@/lib/utils';

import { SkillSet } from '@/types/skillSet';

interface SkillSetCardProps extends SkillSet {
  className?: string;
}

function SkillSetCard({
  image,
  name, experience,
  className
}: SkillSetCardProps) {
  return (
    <Card className={cn('h-full w-full rounded-xl', 'bg-muted/40', className)}>
      <div className="flex items-center p-4">
        <div className="h-12 w-12 overflow-hidden rounded-full border-2 border-white">
          <Image
            src={image || '/placeholder.svg'}
            alt={name || 'Anonymous'}
            className="aspect-square h-auto w-full rounded-full object-cover"
            height={40}
            width={40}
          />
        </div>
        <div className="ml-4">
          <p className="font-semibold">{name || 'Anonymous'}</p>
          {name && <p className="text-sm text-gray-500">{name}</p>}
        </div>
      </div>
      <CardContent className="p-4">
        <p className="text-sm leading-loose">
          {experience || 'No skill provided.'}
        </p>
      </CardContent>
    </Card>
  );
}

export default SkillSetCard;

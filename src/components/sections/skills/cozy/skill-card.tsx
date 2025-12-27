import React from 'react';
import { CardContent, CardFooter, Card } from '@/components/ui/card';
import { buttonVariants } from '@/components/ui/button';

import Link from 'next/link';
import Image from 'next/image';
import { CodeIcon } from 'lucide-react';

import { Skill } from '@/types/skill';

import { cn, trimString } from '@/lib/utils';

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger
} from '@/components/ui/accordion';
import { Separator } from '@/components/ui/separator';

import { MemoizedReactMarkdown } from '@/components/markdown';

import remarkGfm from 'remark-gfm';
import remarkMath from 'remark-math';

import { trimLen } from '@/components/sections/skills/config';
import TextReveal from '@/components/text-reveal';
import SkillSetCard from '@/components/sections/skillSets/modern/skill-set-card';
import { SkillCategory } from '@/components/sections/skillSets/config';
import Reveal from '@/components/reveal';

interface SkillCardProps extends Skill {
  index: number;
  className?: string;
  skillCategories?: SkillCategory[];
}

function SkillCard({
  name,
  description,
  Icon,
  index,
  className,
  skillCategories
}: SkillCardProps) {
  return (
    <div className="space-y-4">
      <Card className={cn(
        'bg-muted/40 border-2 transition-all duration-300',
        'hover:bg-muted/60 hover:border-primary/20 hover:shadow-lg',
        'hover:scale-[1.02] hover:-translate-y-1',
        className
      )}>
      <CardContent className="flex flex-col items-start p-6">
        <AccordionItem value={`acc-${index}`} className="w-full border-none">
          <div className="flex w-full items-center justify-between">
              <span className="text-lg font-semibold text-primary/70 transition-colors duration-300">
                ({index})
              </span>

            {trimLen != -1 && (description || '').length > trimLen ? (
                <AccordionTrigger className="transition-transform duration-300 hover:scale-110" />
            ) : (
                <div className="transition-all duration-300 hover:scale-110 hover:text-primary">
                  {Icon ? <Icon className="h-8 w-8" /> : <CodeIcon className="h-8 w-8" />}
                </div>
            )}
          </div>
          <div className="grid gap-0.5">
              <h3 className="mt-2 text-2xl font-bold leading-8 tracking-tight transition-colors duration-300 hover:text-primary">
              <TextReveal>{name}</TextReveal>
            </h3>
            {trimLen != 0 && (
                <p className="mt-2 text-base text-muted-foreground leading-relaxed">
                <TextReveal>
                  {trimLen != -1
                    ? trimString(trimLen, description || '')
                    : description}
                </TextReveal>
              </p>
            )}
          </div>

          {trimLen != -1 && (description || '').length > trimLen && (
              <AccordionContent className="text-md animate-in fade-in-50 duration-300">
              <Separator className="my-2" />
              <MemoizedReactMarkdown
                className="prose min-w-full break-words text-muted-foreground dark:prose-invert prose-p:leading-relaxed prose-pre:p-0"
                remarkPlugins={[remarkGfm, remarkMath]}
                components={{
                  p({ children }) {
                    return <p className="mb-2 last:mb-0">{children}</p>;
                  }
                }}
              >
                {(trimLen != 0 ? '...' : '') + description!.substring(trimLen)}
              </MemoizedReactMarkdown>
            </AccordionContent>
          )}
        </AccordionItem>
      </CardContent>
    </Card>

      {/* Skill Sets below each skill category */}
      {skillCategories && skillCategories.length > 0 && (
        <div className="space-y-4 pl-4">
          {skillCategories
            .filter(category => 
              // Exclude Programming Languages and Development Tools from Web Development
              !(name === 'Web Development' && 
                (category.name === 'Programming Languages' || category.name === 'Development Tools'))
            )
            .sort((a, b) => {
              // Define desired order for Web Development
              const order = ['Frontend', 'Backend', 'Security'];
              const aIndex = order.indexOf(a.name);
              const bIndex = order.indexOf(b.name);
              // If both are in the order array, sort by their position
              if (aIndex !== -1 && bIndex !== -1) return aIndex - bIndex;
              // If only one is in the order array, prioritize it
              if (aIndex !== -1) return -1;
              if (bIndex !== -1) return 1;
              // If neither is in the order array, maintain original order
              return 0;
            })
            .map((category, categoryIndex) => (
              <div key={`${name}_${categoryIndex}`} className="space-y-2">
                <Reveal>
                  <h4 className="text-lg font-bold tracking-tighter sm:text-xl">
                    {category.name}
                  </h4>
                </Reveal>
                <div className="grid grid-cols-3 gap-1.5 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 xl:grid-cols-7">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={`${category.name}_${skillIndex}`} className="h-full">
                      <SkillSetCard
                        name={skill.name}
                        experience={skill.experience}
                      />
                    </div>
                  ))}
                </div>
              </div>
            ))}
        </div>
      )}
    </div>
  );
}

export default SkillCard;

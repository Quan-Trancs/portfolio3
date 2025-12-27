'use client';
import React, { useState } from 'react';

import MotionWrap from '@/components/motion-wrap';
import ExperienceCard from './experience-card';

import { experiences } from '@/components/sections/experience/config';
import TextReveal from '@/components/text-reveal';
import { Button } from '@/components/ui/button';
import { LayoutGrid, List } from 'lucide-react';
import { cn } from '@/lib/utils';

type ViewMode = 'full' | 'compact';

function Experiences() {
  const [viewMode, setViewMode] = useState<ViewMode>('full');

  return (
    <MotionWrap className="w-full py-24 lg:py-32" id="experiences">
      <div className="px-4 md:px-6">
        {viewMode === 'full' ? (
          // Full mode: Top layout, all points visible
          <div className="space-y-10">
            <div className="flex flex-col gap-4 lg:flex-row lg:items-start lg:justify-between">
              <div className="space-y-4 flex-1">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl/none">
                  <TextReveal>My Experience</TextReveal>
                </h2>
                <p className="text-gray-500 dark:text-gray-400">
                  <TextReveal>
                    Here are some of my work experiences where I&apos;ve turned
                    challenges into accomplishments, making things happen.
                  </TextReveal>
                </p>
              </div>
              <Button
                variant="outline"
                size="sm"
                onClick={() => setViewMode(viewMode === 'full' ? 'compact' : 'full')}
                className="gap-2"
              >
                {viewMode === 'full' ? (
                  <>
                    <List className="h-4 w-4" />
                    Compact
                  </>
                ) : (
                  <>
                    <LayoutGrid className="h-4 w-4" />
                    Full
                  </>
                )}
              </Button>
            </div>
            <div className="space-y-8">
              {experiences.map((experience, index) => (
                <ExperienceCard
                  key={`experience_${index}`}
                  name={experience.name}
                  description={experience.description}
                  points={experience.points}
                  company={experience.company}
                  duration={experience.duration}
                  viewMode="full"
                />
              ))}
            </div>
          </div>
        ) : (
          // Compact mode: Left layout, first point with show more
          <div className="grid gap-10 lg:grid-cols-2">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="space-y-4">
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl/none">
                    <TextReveal>My Experience</TextReveal>
                  </h2>
                  <p className="text-gray-500 dark:text-gray-400">
                    <TextReveal>
                      Here are some of my work experiences where I&apos;ve turned
                      challenges into accomplishments, making things happen.
                    </TextReveal>
                  </p>
                </div>
              </div>
              <Button
                variant="outline"
                size="sm"
                onClick={() => setViewMode('full')}
                className="gap-2"
              >
                <LayoutGrid className="h-4 w-4" />
                Full
              </Button>
            </div>
            <div className="grid gap-4">
              {experiences.map((experience, index) => (
                <ExperienceCard
                  key={`experience_${index}`}
                  name={experience.name}
                  description={experience.description}
                  points={experience.points}
                  company={experience.company}
                  duration={experience.duration}
                  viewMode="compact"
                />
              ))}
            </div>
          </div>
        )}
      </div>
    </MotionWrap>
  );
}

export default Experiences;

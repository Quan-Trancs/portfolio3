import React from 'react';

import MotionWrap from '@/components/motion-wrap';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious
} from '@/components/ui/carousel';
import SkillSetCard from './skill-set-card';

import Reveal from '@/components/reveal';

import { skillSets } from '@/components/sections/skillSets/config';

function SkillSets() {
  return (
    <MotionWrap className="w-full py-24 lg:py-32" id="skillSets">
      {/* TODO: Redesign for horizontal */}
      <div className="px-4 md:px-6">
        <div className="grid gap-10">
          <div className="flex items-center justify-center overflow-hidden lg:px-12">
            <Carousel
              opts={{
                align: 'start'
              }}
              className="w-full"
            >
              <CarouselContent>
                {skillSets.map((skill, index) => (
                  <CarouselItem
                    key={`skill_${index}`}
                    className="md:basis-1/2 lg:basis-1/3"
                  >
                    <div className="h-full p-1">
                      <SkillSetCard
                        name={skill.name}
                        image={skill.image}
                        experience={skill.experience}
                      />
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious />
              <CarouselNext />
            </Carousel>
          </div>
        </div>
      </div>
    </MotionWrap>
  );
}

export default SkillSets;

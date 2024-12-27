'use client';
import React from 'react';

import MotionWrap from '@/components/motion-wrap';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from '@/components/ui/carousel';
import SkillSetCard from './skill-set-card';

import { frameworkSets, skillSets } from '@/components/sections/skillSets/config';

import Autoplay from 'embla-carousel-auto-scroll';

function SkillSets() {
  return (
    <MotionWrap className="w-full py-24 lg:py-32" id="skillSets">
      <div className="px-4 md:px-6">
        <div className="grid gap-10">
          <div className="flex flex-col items-center justify-center gap-4 overflow-hidden">
            <Carousel
              opts={{
                align: 'start',
                dragFree: true,
                loop: true
              }}
              plugins={[
                Autoplay({
                  speed: 1,
                  stopOnMouseEnter: false,
                  stopOnFocusIn:false,
                  stopOnInteraction: false
                })
              ]}
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
            </Carousel>
            <Carousel
              opts={{
                align: 'start',
                dragFree: true,
                loop: true
              }}
              plugins={[
                Autoplay({
                  speed: 1,
                  direction: 'backward',
                  stopOnMouseEnter: false,
                  stopOnFocusIn:false,
                  stopOnInteraction: false
                })
              ]}
              className="w-full"
            >
              <CarouselContent>
                {[...frameworkSets].reverse().map((skill, index) => (
                  <CarouselItem
                    key={`skill-reverse_${index}`}
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
            </Carousel>
          </div>
        </div>
      </div>
    </MotionWrap>
  );
}

export default SkillSets;

import React from 'react';

import MotionWrap from '@/components/motion-wrap';
import SkillSetCard from './skill-set-card';

import { skillCategories } from '@/components/sections/skillSets/config';
import Reveal from '@/components/reveal';

function SkillSets() {
  return (
    <MotionWrap className="w-full py-12 lg:py-16" id="skillSets">
      <div className="px-4 md:px-6">
        <div className="space-y-6">
          {skillCategories.map((category, categoryIndex) => (
            <div key={`category_${categoryIndex}`} className="space-y-2">
              <Reveal>
                <h2 className="text-xl font-bold tracking-tighter sm:text-2xl">
                  {category.name}
                </h2>
              </Reveal>
              <div className="grid grid-cols-3 gap-1.5 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 xl:grid-cols-7">
                {category.skills.map((skill, index) => (
                  <div key={`${category.name}_${index}`} className="h-full">
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
      </div>
    </MotionWrap>
  );
}

export default SkillSets;

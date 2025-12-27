import React from 'react';
import SkillCard from './skill-card';

import Reveal from '@/components/reveal';

import { skills } from '@/components/sections/skills/config';
import MotionWrap from '@/components/motion-wrap';
import { Accordion } from '@/components/ui/accordion';
import SkillSetCard from '@/components/sections/skillSets/modern/skill-set-card';
import { skillCategories } from '@/components/sections/skillSets/config';

function Skills() {
  // Extract Programming Languages and Development Tools to display above Web Development
  const programmingLanguages = skillCategories.find(cat => cat.name === 'Programming Languages');
  const developmentTools = skillCategories.find(cat => cat.name === 'Development Tools');

  return (
    <MotionWrap className="w-full pt-24 lg:pt-32" id="skills">
      <div className="space-y-4 px-4 md:px-6 lg:space-y-10">
        <div className="flex w-full flex-col items-center justify-center text-center lg:flex-row lg:justify-between lg:text-left">
          <div className="flex flex-col items-center lg:items-start">
            <Reveal>
              <h2 className="text-4xl font-bold leading-tight tracking-tighter sm:text-5xl md:text-5xl md:leading-tight lg:text-6xl lg:leading-tight">
                My
              </h2>
            </Reveal>
            <Reveal>
              <h2 className="-mt-2 text-4xl font-bold leading-tight tracking-tighter sm:text-5xl md:text-5xl md:leading-tight lg:text-6xl lg:leading-tight">
                Skills
              </h2>
            </Reveal>
          </div>
          <p className="mt-4 hidden text-gray-500 dark:text-gray-400 lg:mt-0 lg:block lg:w-[35%]">
            Here are some of my skills where I&apos;ve turned knowledge into
            expertise, making things happen.
          </p>
        </div>
        
        {/* Programming Languages and Development Tools above Web Development */}
        {(programmingLanguages || developmentTools) && (
          <div id="skills-general" className="scroll-mt-24 space-y-6 mb-8">
            {programmingLanguages && (
              <div className="space-y-2">
                <Reveal>
                  <h4 className="text-lg font-bold tracking-tighter sm:text-xl">
                    {programmingLanguages.name}
                  </h4>
                </Reveal>
                <div className="grid grid-cols-3 gap-1.5 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 xl:grid-cols-7">
                  {programmingLanguages.skills.map((skill, skillIndex) => (
                    <div key={`programming_${skillIndex}`} className="h-full">
                      <SkillSetCard
                        name={skill.name}
                        experience={skill.experience}
                      />
                    </div>
                  ))}
                </div>
              </div>
            )}
            {developmentTools && (
              <div className="space-y-2">
                <Reveal>
                  <h4 className="text-lg font-bold tracking-tighter sm:text-xl">
                    {developmentTools.name}
                  </h4>
                </Reveal>
                <div className="grid grid-cols-3 gap-1.5 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 xl:grid-cols-7">
                  {developmentTools.skills.map((skill, skillIndex) => (
                    <div key={`tools_${skillIndex}`} className="h-full">
                      <SkillSetCard
                        name={skill.name}
                        experience={skill.experience}
                      />
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        )}

        <div className="mt-6">
          <Accordion type="single" collapsible className="w-full space-y-8">
            {skills.map((skill, index) => {
              let sectionId = '';
              if (skill.name === 'Web Development') {
                sectionId = 'skills-webdev';
              } else if (skill.name === 'Database Management') {
                sectionId = 'skills-data';
              } else if (skill.name === 'Machine Learning') {
                sectionId = 'skills-ml';
              }
              
              return (
                <div key={`skill_${index}`} id={sectionId} className={`transition-all duration-300 ${sectionId ? 'scroll-mt-32' : ''}`}>
              <SkillCard
                index={index + 1}
                name={skill.name}
                description={skill.description}
                Icon={skill.Icon}
                    skillCategories={(skill as any).skillCategories}
              />
                </div>
              );
            })}
          </Accordion>
        </div>
      </div>
    </MotionWrap>
  );
}

export default Skills;

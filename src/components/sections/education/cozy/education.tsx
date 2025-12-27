'use client';
import React from 'react';

import MotionWrap from '@/components/motion-wrap';
import EducationCard from './education-card';

import { educations } from '@/components/sections/education/config';
import TextReveal from '@/components/text-reveal';

function Education() {
  return (
    <MotionWrap className="w-full py-24 lg:py-32" id="education">
      <div className="px-4 md:px-6">
        <div className="space-y-10">
          <div className="space-y-4">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl/none">
              <TextReveal>Education</TextReveal>
            </h2>
            <p className="text-gray-500 dark:text-gray-400">
              <TextReveal>
                My academic journey and educational achievements that have shaped my career.
              </TextReveal>
            </p>
          </div>
          <div className="space-y-8">
            {educations.map((education, index) => (
              <EducationCard
                key={`education_${index}`}
                degree={education.degree}
                institution={education.institution}
                duration={education.duration}
                location={education.location}
                description={education.description}
                gpa={education.gpa}
                coursework={education.coursework}
              />
            ))}
          </div>
        </div>
      </div>
    </MotionWrap>
  );
}

export default Education;


import React from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { ArrowUpRightIcon } from 'lucide-react';
import MotionWrap from "@/components/motion-wrap";

function About() {
  return (
    <MotionWrap className="w-full py-24 lg:py-32" id="about">
      <div className=" px-4 md:px-6">
        <div className="grid gap-10 lg:grid-cols-2">
          <div className="space-y-4">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              About Me
            </h2>
            <div className="space-y-4">
              <p className="max-w-[700px] text-gray-500 dark:text-gray-400 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                I am a Computer Science student at Arizona State University, graduating in May 2026 with a GPA of 3.5/4.0. 
                As a Software Developer Intern, I am recognized for high productivity and efficient task completion. 
                Proficient in Java, SQL, and Python, with expertise in debugging, coding, and software design. 
                I have demonstrated ability in full stack development and agile methodologies, contributing to improved 
                system efficiency and streamlined processes in team projects.                 My experience includes internships at MightyID, 
                RoboMain, and FPT Corporation, where I&apos;ve worked on various web applications and systems.
              </p>
              <div className="flex gap-2">
                <Button asChild variant={'outline'}>
                  <a href="resume.pdf" target="_blank">
                    View Resume <ArrowUpRightIcon className="ml-2 size-5" />
                  </a>
                </Button>
                <Button asChild>
                  <Link href="/#skills">Learn More</Link>
                </Button>
              </div>
            </div>
          </div>
          <div className="grid gap-4 sm:gap-6">
            <Image
              alt="About Me - Professional Photo"
              className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center"
              height="310"
              src="/images/hero.jpg"
              sizes="100vw"
              width="550"
            />
          </div>
        </div>
      </div>
    </MotionWrap>
  );
}

export default About;

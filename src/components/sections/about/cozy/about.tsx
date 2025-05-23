import React from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { ArrowUpRightIcon } from 'lucide-react';
import MotionWrap from "@/components/motion-wrap";
import TextReveal from "@/components/text-reveal";

function About() {
  return (
    <MotionWrap className="w-full py-24 lg:py-32" id="about">
      <div className="px-4 md:px-6">
        <div className="grid grid-cols-1 items-center gap-8 md:grid-cols-2">
          <div className="space-y-4">
            <h2 className="text-4xl font-bold leading-tight tracking-tighter sm:text-5xl md:text-5xl md:leading-tight lg:text-6xl lg:leading-tight">
              <TextReveal>About Me</TextReveal>
            </h2>
            <div className="space-y-4">
              <p className="max-w-[700px] text-gray-500 dark:text-gray-400 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                <TextReveal>
                  I am a Computer Science student at the Arizona State University.
                  My passion lies between technology, and coding. With two years of
                  web developing experience, I have explored full-stack development through
                  projects, internships, and classes. I also participated in challenging
                  hackathons and competitions. My portfolio showcases my experiences and
                  skills in this exciting industry. Come along as we explore the realm of
                  Software Developing.
                </TextReveal>
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
          <div className="relative flex w-full items-center justify-end">
            <Image
              alt="Image"
              className="aspect-square h-full overflow-hidden rounded-xl object-cover object-center"
              src="/images/hero.jpg"
              width={550}
              height={550}
            />
          </div>
        </div>
      </div>
    </MotionWrap>
  );
}

export default About;

import React from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { ArrowUpRightIcon } from 'lucide-react';
import MotionWrap from "@/components/motion-wrap";
import TextReveal from "@/components/text-reveal";
import SmoothHashLink from '@/components/smooth-hash-link';

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
                  I am a Computer Science student at Arizona State University (Ira A. Fulton Schools of Engineering), graduating in December 2027 with a GPA of 3.56/4.0. Kaplan International Scholar and Dean&apos;s List (Fall 2022, Spring 2023, Fall 2023).
                  I build production web apps, cloud billing systems, and LLM agents — Java/Spring Boot APIs, Next.js/Nuxt frontends, and cloud-native billing on Oracle BRM.
                  Recently at Congero Technology Group I configured Pricing Center catalogs, mapped usage events to RUMs, and worked with BRM on OCI, plus Power BI dashboards and AWS Cloud Practitioner training. I have also interned at MightyID, RoboMain, and FPT Corporation.
                </TextReveal>
              </p>
              <div className="flex gap-2">
                <Button asChild variant={'outline'}>
                  <a href="resume.pdf" target="_blank">
                    View Resume <ArrowUpRightIcon className="ml-2 size-5" />
                  </a>
                </Button>
                <Button asChild>
                  <SmoothHashLink href="#skills">Learn More</SmoothHashLink>
                </Button>
              </div>
            </div>
          </div>
          <div className="relative flex w-full items-center justify-end">
            <Image
              alt="About Me - Professional Photo"
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

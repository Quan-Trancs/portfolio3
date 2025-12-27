import dynamic from 'next/dynamic';
import { Suspense } from 'react';
import Header from '@/components/sections/header/cozy/header';
import Hero from "@/components/sections/hero/modern/hero";
import About from "@/components/sections/about/cozy/about";
import Skills from "@/components/sections/skills/cozy/skills";
import Education from "@/components/sections/education/cozy/education";
import Experiences from "@/components/sections/experience/cozy/experience";
import { SectionSkeleton } from '@/components/skeletons/section-skeleton';

// Code split heavy components
const Cursor = dynamic(() => import('@/components/cursor/cursor'), {
  ssr: false,
});
const SmoothScroll = dynamic(() => import('@/components/smooth-scroll'), {
  ssr: false,
});
const SkillSets = dynamic(() => import("@/components/sections/skillSets/modern/skillSets"), {
  loading: () => <SectionSkeleton />,
});
const Projects = dynamic(() => import("@/components/sections/projects/modern/projects"), {
  loading: () => <SectionSkeleton />,
});
const Certificates = dynamic(() => import("@/components/sections/certificates/cozy/certificates"), {
  loading: () => <SectionSkeleton />,
});
const Contact = dynamic(() => import("@/components/sections/contact/cozy/contact"), {
  loading: () => <SectionSkeleton />,
});

export default function Home() {
    return (
        <Suspense fallback={<div>Loading...</div>}>
          <SmoothScroll>
              <div className="flex min-h-[100dvh] flex-col">
                  <Header loader={true} />
                  <main className="flex-1">
                      <Hero />
                      <About />
                      <Skills />
                      <Education />
                      <Experiences />
                      <Suspense fallback={<SectionSkeleton />}>
                        <Certificates />
                      </Suspense>
                      <Suspense fallback={<SectionSkeleton />}>
                        <Projects />
                      </Suspense>
                      <Suspense fallback={<SectionSkeleton />}>
                        <Contact />
                      </Suspense>
                  </main>
              </div>
              <Cursor />
          </SmoothScroll>
        </Suspense>
    );
}

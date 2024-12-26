import {
  Header,
  Hero,
  About,
  Skills,
  Experience,
  SkillSets,
  Projects,
  Contact,
  Footer
} from '@/components/sections';

import Cursor from '@/components/cursor/cursor';
import SmoothScroll from '@/components/smooth-scroll';

export default function Home() {
  return (
      <SmoothScroll>
        <div className="flex min-h-[100dvh] flex-col">
          <Header loader={true} />
          <main className="flex-1">
            <Hero />
            <About />
            <Skills />
            <SkillSets />
            <Projects />
            <Experience />
            <Contact />
            <Footer />
          </main>
        </div>
        <Cursor />
      </SmoothScroll>
  );
}

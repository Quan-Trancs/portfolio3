import Header from '@/components/sections/header/cozy/header';
import Hero from "@/components/sections/hero/modern/hero";

import Cursor from '@/components/cursor/cursor';
import SmoothScroll from '@/components/smooth-scroll';
import About from "@/components/sections/about/cozy/about";
import Skills from "@/components/sections/skills/cozy/skills";
import SkillSets from "@/components/sections/skillSets/modern/skillSets";
import Projects from "@/components/sections/projects/modern/projects";
import Experiences from "@/components/sections/experience/cozy/experience";
import Contact from "@/components/sections/contact/cozy/contact";

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
                    <Experiences />
                    <Contact />
                </main>
            </div>
            <Cursor />
        </SmoothScroll>
    );
}

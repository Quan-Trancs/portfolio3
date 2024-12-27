import Header from '@/components/sections/header/cozy/header';
import Hero from "@/components/sections/hero/modern/hero";

import Cursor from '@/components/cursor/cursor';
import SmoothScroll from '@/components/smooth-scroll';
import About from "@/components/sections/about/cozy/about";
import Skills from "@/components/sections/skills/cozy/skills";
import SkillSets from "@/components/sections/skillSets/modern/skillSets";

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
                </main>
            </div>
            <Cursor />
        </SmoothScroll>
    );
}

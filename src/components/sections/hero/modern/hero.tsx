'use client';
// Credit: Cuberto

import React from 'react';
import Image from 'next/image';

import { useScroll, useTransform, motion } from 'framer-motion';
import { useRef } from 'react';
import TextReveal from '@/components/text-reveal';
import Reveal from '@/components/reveal';

function Hero() {
  const container = useRef<HTMLInputElement>(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start end', 'end start']
  });

  const y = useTransform(scrollYProgress, [0, 1], ['-10%', '10%']);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.5]);

  return (
    <section
      className="relative w-full overflow-hidden bg-background/[0.96] h-screen"
      ref={container}
    >
        <div className="relative flex h-full flex-col items-center justify-center">
          {/* items-center */}
          <div className="flex w-full items-center justify-center px-4 md:px-6">
            <motion.div
              style={{ y, scale }}>
              <h1 className="text-4xl font-light sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl 2xl:text-9xl">
                <div>A software developer</div>
                {/* className="whitespace-nowrap" */}
                <div>Who like to code</div>
              </h1>
            </motion.div>
        </div>
      </div>
    </section>
  );
}

export default Hero;

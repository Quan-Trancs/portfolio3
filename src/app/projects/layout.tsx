import type { Metadata } from 'next';

import { Header } from '@/components/sections';

import Loader from '@/app/loader';
import Cursor from '@/components/cursor/cursor';
import SmoothScroll from '@/components/smooth-scroll';
import React from "react";
import { createMetadata } from '@/lib/metadata';

export const metadata: Metadata = createMetadata({
  title: 'Projects',
  description: 'Here are some projects I have worked on.',
});

export default function ProjectLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <SmoothScroll>
      <div className="flex min-h-[100dvh] flex-col">
        <Header />
        {children}
      </div>
      <Cursor />
    </SmoothScroll>
  );
}

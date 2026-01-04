'use client';
import { useState, Suspense } from 'react';

import MotionWrap from '@/components/motion-wrap';
import ProjectCard from './project-card';
import { ProjectCardSkeleton, ProjectListSkeleton } from '@/components/skeletons/project-card-skeleton';

import { project } from '@/app/source';
import { Button } from '@/components/ui/button';
import { LayoutGrid, List } from 'lucide-react';
import Link from 'next/link';
import { cn } from '@/lib/utils';
import TextReveal from '@/components/text-reveal';

type ViewMode = 'grid' | 'list';

function Projects() {
  const [viewMode, setViewMode] = useState<ViewMode>('grid');
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  
  const allProjects = [...project.getPages()].sort(
    (a, b) =>
      new Date(b.data.date ?? b.data.endDate ?? b.file.name).getTime() -
      new Date(a.data.date ?? a.data.endDate ?? a.file.name).getTime()
  );

  // Get unique categories
  const categories = ['All', ...Array.from(new Set(
    allProjects
      .map(p => p.data.category)
      .filter((cat): cat is string => !!cat)
  ))];

  // Filter projects by category
  const projects = selectedCategory === 'All' 
    ? allProjects 
    : allProjects.filter(p => p.data.category === selectedCategory);

  // Show all projects when "All" is selected, otherwise limit for category views
  const displayedProjects = selectedCategory === 'All' 
    ? projects 
    : viewMode === 'grid' 
      ? projects.slice(0, Math.min(6, projects.length))
      : projects.slice(0, 3);

  return (
    <MotionWrap className="w-full py-24 lg:py-32" id="projects">
      <div className="px-4 md:px-6">
        <div className="grid gap-10">
          <div className="flex flex-col gap-4 lg:flex-row lg:items-start lg:justify-between">
            <div className="space-y-4 flex-1">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl/none">
                <TextReveal>My Projects</TextReveal>
              </h2>
              <p className="text-gray-500 dark:text-gray-400">
                <TextReveal>
                  Here are some of my projects where I&apos;ve turned code into
                  cool, functional stuff.
                </TextReveal>
              </p>
            </div>
            <div className="flex flex-col gap-2 lg:items-end">
              <div className="flex gap-2 flex-wrap">
                {categories.map((cat) => (
                  <Button
                    key={cat}
                    variant={selectedCategory === cat ? 'default' : 'outline'}
                    size="sm"
                    onClick={() => setSelectedCategory(cat)}
                    className="text-xs"
                  >
                    {cat}
                  </Button>
                ))}
              </div>
              <div className="flex gap-2">
                <Button
                  variant={viewMode === 'grid' ? 'default' : 'outline'}
                  size="sm"
                  onClick={() => setViewMode('grid')}
                  className="gap-2"
                >
                  <LayoutGrid className="h-4 w-4" />
                  Grid
                </Button>
                <Button
                  variant={viewMode === 'list' ? 'default' : 'outline'}
                  size="sm"
                  onClick={() => setViewMode('list')}
                  className="gap-2"
                >
                  <List className="h-4 w-4" />
                  List
                </Button>
              </div>
            </div>
          </div>

          {viewMode === 'grid' ? (
            <Suspense fallback={
              <div className="grid w-full grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                {Array.from({ length: 8 }).map((_, i) => (
                  <ProjectCardSkeleton key={i} />
                ))}
              </div>
            }>
              <div className="grid w-full grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                {displayedProjects.map((project, index) => (
                  <div key={`project_${index}`} className="h-full">
                    <ProjectCard
                      title={project.data.title}
                      href={project.url}
                      description={project.data.description}
                      tags={project.data.tags}
                      date={project.data.date}
                      startDate={project.data.startDate}
                      endDate={project.data.endDate}
                      category={project.data.category}
                      viewMode={viewMode}
                      thumbnail={project.slugs[0] === 'collaboard' 
                        ? `/images/projects/${project.slugs[0]}/cover.png`
                        : `/images/projects/${project.slugs[0]}/cover.jpg`}
                    />
                  </div>
                ))}
              </div>
            </Suspense>
          ) : (
            <Suspense fallback={
              <div className="space-y-4">
                {Array.from({ length: 3 }).map((_, i) => (
                  <ProjectListSkeleton key={i} />
                ))}
              </div>
            }>
              <div className="space-y-4">
                <div className="flex flex-col w-full gap-4">
                  {displayedProjects.map((project, index) => (
                    <div key={`project_${index}`} className="h-full w-full">
                      <ProjectCard
                        title={project.data.title}
                        href={project.url}
                        description={project.data.description}
                        tags={project.data.tags}
                        date={project.data.date}
                        startDate={project.data.startDate}
                        endDate={project.data.endDate}
                        category={project.data.category}
                        viewMode={viewMode}
                        thumbnail={project.slugs[0] === 'collaboard' 
                          ? `/images/projects/${project.slugs[0]}/cover.png`
                          : `/images/projects/${project.slugs[0]}/cover.jpg`}
                      />
                    </div>
                  ))}
                </div>
                {selectedCategory !== 'All' && projects.length > 3 && displayedProjects.length < projects.length && (
                  <div className="flex justify-center mt-6">
                    <Button asChild variant="outline" size="lg" className="gap-2">
                      <Link href="/projects">
                        Show More Projects
                        <List className="h-4 w-4" />
                      </Link>
                    </Button>
                  </div>
                )}
              </div>
            </Suspense>
          )}
        </div>
      </div>
    </MotionWrap>
  );
}

export default Projects;

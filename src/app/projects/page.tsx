'use client'

import { project } from '@/app/source'
import TextReveal from '@/components/text-reveal'
import Line from '@/components/line'
import { motion } from 'framer-motion'
import { useState, useMemo } from 'react'

import ProjectCard from '@/app/projects/_components/project-card'
import { Input } from '@/components/ui/input'
import { SearchIcon } from 'lucide-react'
import { Badge } from '@/components/ui/badge'
import { cn } from '@/lib/utils'

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
    },
  },
}

export default function ProjectsPage() {
  const allProjects = [...project.getPages()].sort(
    (a, b) =>
      new Date(b.data.date ?? b.file.name).getTime() -
      new Date(a.data.date ?? a.file.name).getTime()
  )

  const [searchQuery, setSearchQuery] = useState('')
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null)

  // Extract unique categories from projects
  const categories = useMemo(() => {
    const cats = new Set<string>()
    allProjects.forEach((p) => {
      if (p.data.category) {
        cats.add(p.data.category)
      }
    })
    return Array.from(cats).sort()
  }, [allProjects])

  // Filter projects based on search and category
  const filteredProjects = useMemo(() => {
    return allProjects.filter((p) => {
      const matchesSearch =
        searchQuery === '' ||
        p.data.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        p.data.description?.toLowerCase().includes(searchQuery.toLowerCase()) ||
        p.data.tags?.some((tag) =>
          tag.label.toLowerCase().includes(searchQuery.toLowerCase())
        )

      const matchesCategory =
        selectedCategory === null || p.data.category === selectedCategory

      return matchesSearch && matchesCategory
    })
  }, [allProjects, searchQuery, selectedCategory])

  return (
    <main className='my-14 flex-1'>
      <section
        className='relative flex min-h-[calc(50dvh)] items-center justify-center'
        id='hero'
      >
        <div className='flex flex-col items-center md:max-w-7xl px-4'>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className='leading-wide tracking-relaxed text-5xl sm:text-6xl md:text-6xl lg:text-7xl xl:text-8xl 2xl:text-9xl text-center'>
              <TextReveal delay={0.2}>My Projects</TextReveal>
            </h1>
            <p className='mt-6 text-center text-lg text-muted-foreground max-w-2xl'>
              <TextReveal delay={0.4}>
                Explore my collection of projects showcasing my skills and
                experience
              </TextReveal>
            </p>
          </motion.div>

          <Line className={'mt-16'} />
        </div>
      </section>

      {/* Search and Filter Section */}
      <section className='container mx-auto px-4 mb-8'>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className='flex flex-col gap-4'
        >
          {/* Search Bar */}
          <div className='relative max-w-md mx-auto w-full'>
            <SearchIcon className='absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4' />
            <Input
              type='text'
              placeholder='Search projects...'
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className='pl-10 pr-4 py-2 w-full'
            />
          </div>

          {/* Category Filters */}
          {categories.length > 0 && (
            <div className='flex flex-wrap gap-2 justify-center'>
              <Badge
                variant={selectedCategory === null ? 'default' : 'outline'}
                className={cn(
                  'cursor-pointer transition-all hover:scale-105',
                  selectedCategory === null && 'bg-primary text-primary-foreground'
                )}
                onClick={() => setSelectedCategory(null)}
              >
                All
              </Badge>
              {categories.map((category) => (
                <Badge
                  key={category}
                  variant={selectedCategory === category ? 'default' : 'outline'}
                  className={cn(
                    'cursor-pointer transition-all hover:scale-105',
                    selectedCategory === category &&
                      'bg-primary text-primary-foreground'
                  )}
                  onClick={() => setSelectedCategory(category)}
                >
                  {category}
                </Badge>
              ))}
            </div>
          )}

          {/* Results Count */}
          <p className='text-center text-sm text-muted-foreground'>
            Showing {filteredProjects.length} of {allProjects.length} projects
          </p>
        </motion.div>
      </section>

      {/* Projects Grid */}
      <section className='container mx-auto px-4 pb-12'>
        {filteredProjects.length > 0 ? (
          <motion.div
            variants={containerVariants}
            initial='hidden'
            animate='visible'
            className='grid w-full grid-cols-1 gap-6 md:grid-cols-2 2xl:grid-cols-3'
          >
            {filteredProjects.map((project, index) => {
              const projectSlug = project.slugs[0];
              // Use PNG for collaboard, JPG for others
              const thumbnail = projectSlug === 'collaboard' 
                ? `/images/projects/${projectSlug}/cover.png`
                : `/images/projects/${projectSlug}/cover.jpg`;
              
              return (
                <motion.div key={`project_${index}`} variants={itemVariants}>
                  <ProjectCard
                    title={project.data.title}
                    href={project.url}
                    description={project.data.description}
                    tags={project.data.tags}
                    thumbnail={thumbnail}
                    date={project.data.date}
                    startDate={project.data.startDate}
                    endDate={project.data.endDate}
                    category={project.data.category}
                  />
                </motion.div>
              );
            })}
          </motion.div>
        ) : (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className='text-center py-12'
          >
            <p className='text-muted-foreground text-lg'>
              No projects found matching your criteria.
            </p>
          </motion.div>
        )}
      </section>
    </main>
  )
}

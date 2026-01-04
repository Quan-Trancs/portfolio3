import type { Metadata } from 'next'

import { MDXContent } from '@content-collections/mdx/react'

import { notFound } from 'next/navigation'
import { project } from '@/app/source'

import Header from './header'
import Image from 'next/image'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { ArrowLeftIcon } from 'lucide-react'

import { createMetadata } from '@/lib/metadata'
import { metadata as meta } from '@/app/config'
import { Heading, headingTypes, MDXLink } from '@/lib/mdx/default-components'
import { cn } from '@/lib/utils'

import { HTMLAttributes } from 'react'

export async function generateStaticParams({
  params,
}: {
  params: { slug: string }
}) {
  const { slug } = params
  // @ts-ignore
  return project.generateParams([slug])
}

export function generateMetadata({ params }: { params: { slug: string } }) {
  const { slug } = params
  const page = project.getPage([slug])
  if (!page) notFound()

  return createMetadata({
    title: page.data.title,
    description: page.data.description,
    openGraph: {
      type: 'article',
      images: [
        {
          alt: 'banner',
          width: 1200,
          height: 630,
          url: slug === 'collaboard' 
            ? `/images/projects/${slug}/cover.png`
            : `/images/projects/${slug}/cover.jpg`,
          type: 'image/png',
        },
      ],
      authors: meta.author.name,
      // modifiedTime: page.data.date.toISOString()
    },
    twitter: {
      images: [
        {
          alt: 'banner',
          width: 1200,
          height: 630,
          url: slug === 'collaboard' 
            ? `/images/projects/${slug}/cover.png`
            : `/images/projects/${slug}/cover.jpg`,
        },
      ],
    },
  }) satisfies Metadata
}

export default async function ProjectPage({
  params,
}: {
  params: { slug: string }
}) {
  const { slug } = params
  const page = project.getPage([slug])
  if (!page) notFound()

  const {
    data: { toc, body, structuredData },
  } = page

  return (
    <main className='my-14 flex-1'>
      <div className='container mx-auto px-4 max-w-4xl'>
        {/* Back Button */}
        <div className='mb-8'>
          <Button
            variant='ghost'
            className='group -ml-4'
            asChild
          >
            <Link href='/projects'>
              <ArrowLeftIcon className='mr-2 h-4 w-4 transition-transform group-hover:-translate-x-1' />
              Back to Projects
            </Link>
          </Button>
        </div>

        <Header metadata={page.data} />
        
        <div className='my-12 overflow-hidden rounded-xl border shadow-lg'>
          <Image
            src={slug === 'collaboard' 
              ? `/images/projects/${slug}/cover.png`
              : `/images/projects/${slug}/cover.jpg`}
            width={1280}
            height={832}
            alt={`${page.data.title} project showcase`}
            className='aspect-video h-auto w-full object-cover'
          />
        </div>
        
        <div className='prose prose-lg max-w-none dark:prose-invert prose-headings:font-bold prose-headings:tracking-tight prose-h1:text-4xl prose-h2:text-3xl prose-h3:text-2xl prose-a:text-primary prose-a:no-underline hover:prose-a:underline prose-code:text-primary prose-pre:bg-neutral-900 prose-pre:border prose-pre:border-neutral-800'>
          <MDXContent
            code={body}
            components={{
              a: MDXLink,
              img: (props) => {
                // eslint-disable-next-line @next/next/no-img-element
                return (
                  <img 
                    className='rounded-xl shadow-lg my-8' 
                    {...props} 
                    alt={props.alt || `${page.data.title} project image`} 
                  />
                );
              },
              ...Object.fromEntries(
                headingTypes.map((type) => [
                  type,
                  (props: HTMLAttributes<HTMLHeadingElement>) => (
                    <Heading as={type} {...props} />
                  ),
                ])
              ),
              pre: ({ className, style: _style, ...props }) => (
                <pre
                  className={cn(
                    'max-h-[500px] overflow-auto rounded-lg border border-neutral-800 bg-neutral-900 p-4 text-sm shadow-lg',
                    className
                  )}
                  {...props}
                >
                  {props.children}
                </pre>
              ),
              code: ({ className, ...props }) => (
                <code
                  className={cn(
                    'relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm',
                    className
                  )}
                  {...props}
                />
              ),
            }}
          />
        </div>
      </div>
    </main>
  )
}

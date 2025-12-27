'use client';
import { useState, useRef, useEffect } from 'react';
import { CardContent, CardFooter, Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

import Link from 'next/link';
import Image from 'next/image';

import { Project } from '@/types/project';
import { InfoIcon } from 'lucide-react';

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger
} from '@/components/ui/tooltip';

import { cn } from '@/lib/utils';
import { Badge } from '@/components/ui/badge';
import TextReveal from '@/components/text-reveal';

interface ProjectCardProps extends Project {
  href: string;
  thumbnail: string;
  className?: string;
}

function ProjectCard({
  title,
  description,
  thumbnail,
  tags,
  href,
  className
}: ProjectCardProps) {
  const [isExpanded, setIsExpanded] = useState(false);
  const [showButton, setShowButton] = useState(false);
  const descriptionRef = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    const checkOverflow = () => {
      if (descriptionRef.current) {
        // Check if content overflows when line-clamp-3 is applied
        const element = descriptionRef.current;
        const lineHeight = parseFloat(window.getComputedStyle(element).lineHeight);
        const maxHeight = lineHeight * 3;
        setShowButton(element.scrollHeight > maxHeight + 1); // Add 1px tolerance
      }
    };
    
    // Use requestAnimationFrame to ensure DOM is fully rendered
    requestAnimationFrame(checkOverflow);
    // Also check on window resize
    window.addEventListener('resize', checkOverflow);
    return () => window.removeEventListener('resize', checkOverflow);
  }, [description]);

  return (
    <Card
      className={cn(
        'group relative flex flex-col justify-between overflow-hidden rounded-md bg-muted/40 min-w-0',
        className
      )}
    >
      <CardContent className="z-[2] inline-block w-full overflow-hidden p-0">
        <Image
          src={thumbnail || '/placeholder.svg'}
          alt={`${title} project showcase`}
          width={0}
          height={0}
          sizes="100vw"
          className="h-auto max-h-96 w-full object-cover transition-transform duration-300 hover:scale-105"
        />
      </CardContent>
      <CardFooter className="grid grid-cols-1 items-center gap-4 p-4 md:p-6 min-w-0">
        <div className="min-w-0 w-full">
          <div className="line-clamp-2 overflow-hidden min-w-0">
            <h3 className="text-xl font-bold break-words">
              <TextReveal>{title}</TextReveal>
            </h3>
          </div>
          <div className={cn('overflow-hidden mt-1 min-w-0', !isExpanded && 'line-clamp-3')}>
            <p ref={descriptionRef} className="text-sm text-gray-500 dark:text-gray-400 break-words">
              <TextReveal>{description || ''}</TextReveal>
            </p>
          </div>
          {showButton && (
            <button
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                setIsExpanded(!isExpanded);
              }}
              className="mt-1 text-sm text-primary hover:underline z-[3] relative"
            >
              {isExpanded ? 'Show less' : 'Show more'}
            </button>
          )}
          <div className="mt-2 flex flex-wrap gap-2 min-w-0 w-full">
            {tags?.map((tag, index) => (
              <Badge key={`project-tag_${index}`} className="text-xs break-words max-w-full">
                {tag.label}
              </Badge>
            ))}
          </div>
        </div>
        <div className="flex items-center justify-end">
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <Button
                  variant="outline"
                  className="z-[2] rounded-full border bg-muted hover:bg-foreground/10"
                  asChild
                >
                  <Link href={href}>
                    <InfoIcon />
                  </Link>
                </Button>
              </TooltipTrigger>
              <TooltipContent>
                <p>More Details</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </div>
      </CardFooter>
      <Link href={href} className="z-1 absolute inset-0 block" />
    </Card>
  );
}

export default ProjectCard;

'use client';
import { useState, useRef, useEffect } from 'react';
import { CardContent, CardFooter, Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

import Link from 'next/link';
import Image from 'next/image';
import { InfoIcon } from 'lucide-react';

import { Project } from '@/types/project';

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger
} from '@/components/ui/tooltip';

import { cn } from '@/lib/utils';
import { Badge } from '@/components/ui/badge';

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
        'flex h-full flex-col justify-between bg-muted/40 overflow-hidden min-w-0',
        className
      )}
    >
      <CardContent className="p-4 md:p-6 min-w-0">
        <div className="grid gap-2 min-w-0 w-full">
          <Image
            src={thumbnail || '/placeholder.svg'}
            alt={`${title} project showcase`}
            width={0}
            height={0}
            sizes="100vw"
            className="h-48 w-full rounded-md object-cover"
          />
          <h3 className="text-xl font-bold line-clamp-2 break-words min-w-0">{title}</h3>
          <div className={cn('overflow-hidden min-w-0', !isExpanded && 'line-clamp-3')}>
            <p ref={descriptionRef} className="text-sm text-gray-500 dark:text-gray-400 break-words">
              {description || ''}
            </p>
          </div>
          {showButton && (
            <button
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                setIsExpanded(!isExpanded);
              }}
              className="text-sm text-primary hover:underline z-[3] relative"
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
      </CardContent>
      <CardFooter className="flex items-center justify-end p-4 md:p-6">
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
      </CardFooter>
      <Link href={href} className="z-1 absolute inset-0 block" />
    </Card>
  );
}

export default ProjectCard;

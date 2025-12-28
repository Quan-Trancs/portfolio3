'use client';
import { useState, useRef, useEffect } from 'react';
import { CardContent, CardFooter, Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

import Link from 'next/link';
import Image from 'next/image';
import { InfoIcon, ArrowRightIcon } from 'lucide-react';
import { motion } from 'framer-motion';

import { Project } from '@/types/project';

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
  date?: string | Date;
  startDate?: string | Date;
  endDate?: string | Date;
  category?: string;
  className?: string;
}

function formatDate(date: string | Date | undefined): string {
  if (!date) return '';
  const dateObj = typeof date === 'string' ? new Date(date) : date;
  return new Intl.DateTimeFormat('en-US', { 
    month: 'short', 
    year: 'numeric' 
  }).format(dateObj);
}

function ProjectCard({
  title,
  description,
  href,
  thumbnail,
  tags,
  date,
  startDate,
  endDate,
  category,
  className
}: ProjectCardProps) {
  const [isExpanded, setIsExpanded] = useState(false);
  const [showButton, setShowButton] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
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

  const displayDate = date ? formatDate(date) : (startDate || endDate) 
    ? `${startDate ? formatDate(startDate) : ''}${startDate && endDate ? ' - ' : ''}${endDate ? formatDate(endDate) : ''}`
    : '';

  return (
    <motion.div
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      whileHover={{ y: -4 }}
      transition={{ duration: 0.2 }}
      className="h-full"
    >
      <Card
        className={cn(
          'relative flex h-full flex-col justify-between bg-muted/40 overflow-hidden group transition-all duration-300 hover:shadow-lg hover:shadow-primary/10 hover:border-primary/20',
          className
        )}
      >
        <CardContent className="p-0 min-w-0">
          <div className="relative overflow-hidden">
            <motion.div
              animate={{ scale: isHovered ? 1.05 : 1 }}
              transition={{ duration: 0.3 }}
            >
              <Image
                src={thumbnail || '/placeholder.svg'}
                alt={`${title} project showcase`}
                width={0}
                height={0}
                sizes="100vw"
                className="aspect-video h-auto w-full object-cover"
              />
            </motion.div>
            <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </div>
          <div className="p-4 md:p-6 space-y-3">
            <div className="flex items-start justify-between gap-2">
              <h3 className="text-xl font-bold break-words min-w-0 flex-1 leading-tight line-clamp-2 min-h-[3.5rem]">
                <TextReveal>{title}</TextReveal>
              </h3>
              <motion.div
                animate={{ x: isHovered ? 4 : 0, opacity: isHovered ? 1 : 0.7 }}
                transition={{ duration: 0.2 }}
                className="flex-shrink-0"
              >
                <ArrowRightIcon className="h-5 w-5 text-primary" />
              </motion.div>
            </div>
            
            {(category || displayDate) && (
              <div className="flex items-center gap-2 text-xs text-muted-foreground">
                {category && (
                  <Badge variant="secondary" className="text-xs">
                    {category}
                  </Badge>
                )}
                {displayDate && (
                  <span className="ml-auto">{displayDate}</span>
                )}
              </div>
            )}

            <div className={cn('overflow-hidden min-w-0', !isExpanded && 'line-clamp-3')}>
              <p ref={descriptionRef} className="text-sm text-muted-foreground break-words leading-relaxed">
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
                className="text-sm text-primary hover:underline z-[3] relative font-medium transition-colors"
              >
                {isExpanded ? 'Show less' : 'Show more'}
              </button>
            )}
            {tags && tags.length > 0 && (
              <div className="flex flex-wrap gap-2 min-w-0 w-full pt-2">
                {tags.slice(0, 5).map((tag, index) => (
                  <Badge 
                    key={`project-tag_${index}`} 
                    variant="outline"
                    className="text-xs break-words max-w-full"
                  >
                    {tag.label}
                  </Badge>
                ))}
                {tags.length > 5 && (
                  <Badge variant="outline" className="text-xs">
                    +{tags.length - 5}
                  </Badge>
                )}
              </div>
            )}
          </div>
        </CardContent>
        <CardFooter className="flex items-center justify-end p-4 md:p-6 pt-0">
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Button
                    variant="outline"
                    className="z-[2] rounded-full border bg-background/50 backdrop-blur-sm hover:bg-primary hover:text-primary-foreground transition-all duration-200"
                    asChild
                  >
                    <Link href={href}>
                      <InfoIcon className="h-4 w-4" />
                    </Link>
                  </Button>
                </motion.div>
              </TooltipTrigger>
              <TooltipContent>
                <p>View Details</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </CardFooter>
        <Link href={href} className="z-[1] absolute inset-0 block" aria-label={`View ${title} project`} />
      </Card>
    </motion.div>
  );
}

export default ProjectCard;

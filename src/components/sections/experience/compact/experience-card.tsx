'use client';
import React, { useState, useMemo } from 'react';
import { CardContent, CardFooter, Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

import Link from 'next/link';
import Image from 'next/image';
import { CodeIcon, ChevronDown, ChevronUp } from 'lucide-react';

import { Experience } from '@/types/experience';

import { cn } from '@/lib/utils';
import { skillCategories } from '@/components/sections/skillSets/config';

interface ExperienceCardProps extends Experience {
  className?: string;
  viewMode?: 'full' | 'compact';
}

// Get all skill names from skill categories
function getAllSkillNames(): string[] {
  const skillNames: string[] = [];
  skillCategories.forEach(category => {
    category.skills.forEach(skill => {
      if (skill.name) {
        skillNames.push(skill.name);
      }
    });
  });
  // Sort by length (longest first) to match longer names before shorter ones
  return skillNames.sort((a, b) => b.length - a.length);
}

// Function to highlight both achievements and skills
function highlightText(text: string): React.ReactNode {
  const skillNames = getAllSkillNames();
  
  // Pattern to match achievements: percentages, numbers with achievement words, or phrases like "by X%"
  const achievementPattern = /(\d+%\s*(?:enhanced|reduction|increase|faster|reduced|improved|accelerated)?|by\s+\d+%|\d+\s*(?:x|times|faster|reduction|increase|enhanced|accelerated|reduced|improved))/gi;
  
  // Create a pattern for all skills (case-insensitive, word boundaries)
  const skillPattern = new RegExp(
    `\\b(${skillNames.map(name => name.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')).join('|')})\\b`,
    'gi'
  );
  
  const parts: Array<{ text: string; type: 'normal' | 'achievement' | 'skill'; index: number }> = [];
  let lastIndex = 0;
  
  // Find all matches (achievements and skills)
  const matches: Array<{ index: number; length: number; text: string; type: 'achievement' | 'skill' }> = [];
  
  // Find achievement matches
  let match;
  while ((match = achievementPattern.exec(text)) !== null) {
    matches.push({
      index: match.index,
      length: match[0].length,
      text: match[0],
      type: 'achievement'
    });
  }
  
  // Find skill matches
  while ((match = skillPattern.exec(text)) !== null) {
    // Check if this skill match overlaps with an achievement match
    const overlaps = matches.some(m => 
      match.index < m.index + m.length && match.index + match[0].length > m.index
    );
    if (!overlaps) {
      matches.push({
        index: match.index,
        length: match[0].length,
        text: match[0],
        type: 'skill'
      });
    }
  }
  
  // Sort matches by index
  matches.sort((a, b) => a.index - b.index);
  
  // Remove overlapping matches (keep first one)
  const nonOverlappingMatches: typeof matches = [];
  for (const match of matches) {
    const overlaps = nonOverlappingMatches.some(m => 
      match.index < m.index + m.length && match.index + match.length > m.index
    );
    if (!overlaps) {
      nonOverlappingMatches.push(match);
    }
  }
  
  // Build parts array
  for (const match of nonOverlappingMatches) {
    // Add text before the match
    if (match.index > lastIndex) {
      parts.push({
        text: text.substring(lastIndex, match.index),
        type: 'normal',
        index: lastIndex
      });
    }
    
    // Add the match
    parts.push({
      text: match.text,
      type: match.type,
      index: match.index
    });
    
    lastIndex = match.index + match.length;
  }
  
  // Add remaining text
  if (lastIndex < text.length) {
    parts.push({
      text: text.substring(lastIndex),
      type: 'normal',
      index: lastIndex
    });
  }
  
  // If no matches, return original text
  if (parts.length === 0 || (parts.length === 1 && parts[0].type === 'normal')) {
    return text;
  }
  
  // Render parts with highlighting
  return (
    <>
      {parts.map((part, idx) => {
        if (part.type === 'normal') {
          return <span key={idx}>{part.text}</span>;
        } else if (part.type === 'achievement') {
          return (
            <span 
              key={idx}
              className="font-bold text-primary bg-primary/10 px-1.5 py-0.5 rounded"
            >
              {part.text}
            </span>
          );
        } else if (part.type === 'skill') {
          return (
            <span 
              key={idx}
              className="font-semibold text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-950/30 px-1.5 py-0.5 rounded"
            >
              {part.text}
            </span>
          );
        }
        return null;
      })}
    </>
  );
}

function ExperienceCard({
  company,
  name,
  duration,
  description,
  points,
  className,
  viewMode = 'compact'
}: ExperienceCardProps) {
  const [isExpanded, setIsExpanded] = useState(false);
  
  // Use points if available, otherwise fall back to description
  const displayPoints = points || (description ? [description] : []);
  const hasMultiplePoints = displayPoints.length > 1;
  const isFullMode = viewMode === 'full';
  const visiblePoints = isFullMode 
    ? displayPoints 
    : (isExpanded ? displayPoints : displayPoints.slice(0, 1));

  return (
    <Card className={cn('border-none bg-transparent', className)}>
      <CardContent className="p-1">
        <div className="flex items-baseline justify-between">
          <h3 className="text-2xl font-semibold">{company}</h3>
          <span className="text-sm font-medium">{duration}</span>
        </div>
        <h4 className="mt-2 text-lg font-medium uppercase">{name}</h4>
        <ul className="mt-2 space-y-2 list-none">
          {visiblePoints.map((point, index) => (
            <li key={index} className="flex items-start gap-2">
              <span className="text-primary mt-1.5">●</span>
              <span className="flex-1">
                {highlightText(point)}
              </span>
            </li>
          ))}
        </ul>
        {hasMultiplePoints && !isFullMode && (
          <Button
            variant="ghost"
            size="sm"
            onClick={() => setIsExpanded(!isExpanded)}
            className="mt-3 text-primary hover:text-primary/80"
          >
            {isExpanded ? (
              <>
                Show Less <ChevronUp className="ml-1 h-4 w-4" />
              </>
            ) : (
              <>
                Show More <ChevronDown className="ml-1 h-4 w-4" />
              </>
            )}
          </Button>
        )}
        <hr className="my-6 border-t border-border" />
      </CardContent>
    </Card>
  );
}

export default ExperienceCard;

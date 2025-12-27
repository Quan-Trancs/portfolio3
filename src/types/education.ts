import React from 'react';

export interface Education {
  degree: string;
  institution: string;
  duration: string;
  location?: string;
  description?: string;
  gpa?: string;
  coursework?: string[];
}


import { Skill } from '@/types/skill';
import {
  CodeIcon,
  DatabaseIcon,
  LayoutIcon,
  SmartphoneIcon,
  Brain
} from 'lucide-react';
import { skillCategories } from '@/components/sections/skillSets/config';

const trimLen: number = -1; // 0 is accordion only, -1 is does not restrict the length

// Map skills to their corresponding skill categories
const skillToCategoryMap: Record<string, string[]> = {
  'Web Development': ['Programming Languages', 'Development Tools', 'Frontend', 'Backend', 'Security'],
  'Database Management': ['Database Technologies', 'Database Operations'],
  'Machine Learning': ['AI Engineering', 'Machine Learning']
};

const skills: (Skill & { skillCategories?: typeof skillCategories })[] = [
  {
    name: 'Web Development',
    Icon: CodeIcon,
    description: `Web Development involves creating websites and web applications that are both visually appealing and highly functional. It encompasses a variety of technologies, frameworks, and best practices to ensure a seamless user experience and efficient performance.`,
    skillCategories: skillCategories.filter(cat => 
      skillToCategoryMap['Web Development'].includes(cat.name)
    )
  },
  {
    name: 'Database Management',
    Icon: DatabaseIcon,
    description: `Database Management involves efficiently storing and organizing data. This skill covers a range of technologies, frameworks, and best practices to ensure data integrity, security, and performance.`,
    skillCategories: skillCategories.filter(cat => 
      skillToCategoryMap['Database Management'].includes(cat.name)
    )
  },
  {
    name: 'Machine Learning',
    Icon: Brain,
    description: `Machine Learning involves developing algorithms and models that enable computers to learn from and make predictions or decisions based on data. This skill encompasses various techniques including supervised learning, unsupervised learning, deep learning, neural networks, computer vision, image classification, and model optimization, along with frameworks like TensorFlow/Keras and tools for building intelligent systems.`,
    skillCategories: skillCategories.filter(cat => 
      skillToCategoryMap['Machine Learning'].includes(cat.name)
    )
  },
];

export { trimLen, skills };

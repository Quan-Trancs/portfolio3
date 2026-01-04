import { SkillSet } from '@/types/skillSet';

export interface SkillCategory {
  name: string;
  skills: SkillSet[];
}

const programmingSkills: SkillSet[] = [
  {
    name: 'Java',
    image: 'https://cdn.simpleicons.org/java/ED8B00',
    experience: "Arizona State University, RoboMain, FPT corporation"
  },
  {
    name: 'JavaScript',
    image: 'https://cdn.simpleicons.org/javascript/F7DF1E',
    experience: "Arizona State University, RoboMain, FPT corporation"
  },
  {
    name: 'TypeScript',
    image: 'https://cdn.simpleicons.org/typescript/3178C6',
    experience: "RoboMain, FPT corporation, Projects"
  },
  {
    name: 'Python',
    image: 'https://cdn.simpleicons.org/python/3776AB',
    experience: "Arizona State University, Projects"
  },
  {
    name: 'C/C++',
    image: 'https://cdn.simpleicons.org/cplusplus/00599C',
    experience: 'Arizona State University, CodeForce'
  },
  {
    name: 'SQL',
    image: 'https://cdn.simpleicons.org/mysql/4479A1',
    experience: "Arizona State University, RoboMain, FPT corporation"
  },
  {
    name: 'HTML/CSS',
    image: 'https://cdn.simpleicons.org/html5/E34F26',
    experience: "Arizona State University, RoboMain, FPT corporation"
  },
  {
    name: 'MATLAB',
    image: 'https://cdn.simpleicons.org/mathworks/0076A8',
    experience: "Arizona State University"
  },
  {
    name: 'C#',
    image: 'https://cdn.simpleicons.org/csharp/239120',
    experience: "Projects"
  },
  {
    name: 'Prolog',
    image: 'https://cdn.simpleicons.org/prolog/000000',
    experience: "Projects"
  }
];

const backendSkills: SkillSet[] = [
  {
    name: 'Spring Boot',
    image: 'https://cdn.simpleicons.org/spring/6DB33F',
    experience: 'RoboMain, FPT corporation'
  },
  {
    name: 'Spring Data JPA',
    image: 'https://cdn.simpleicons.org/spring/6DB33F',
    experience: 'RoboMain, FPT corporation'
  },
  {
    name: 'RESTful API Design',
    image: 'https://cdn.simpleicons.org/spring/6DB33F',
    experience: 'RoboMain, FPT corporation'
  },
  {
    name: 'Microservices',
    image: 'https://cdn.simpleicons.org/docker/2496ED',
    experience: "Arizona State University"
  },
  {
    name: 'Message Queues',
    image: 'https://cdn.simpleicons.org/rabbitmq/FF6600',
    experience: "MightyID, RoboMain, FPT corporation"
  },
  {
    name: 'PostgreSQL',
    image: 'https://cdn.simpleicons.org/postgresql/4169E1',
    experience: "RoboMain, FPT corporation"
  },
  {
    name: 'Redis',
    image: 'https://cdn.simpleicons.org/redis/DC382D',
    experience: "RoboMain"
  },
  {
    name: 'Docker',
    image: 'https://cdn.simpleicons.org/docker/2496ED',
    experience: "RoboMain"
  },
  {
    name: 'AWS',
    image: 'https://cdn.simpleicons.org/amazonaws/232F3E',
    experience: "RoboMain"
  },
  {
    name: 'Caffeine',
    image: 'https://cdn.simpleicons.org/java/ED8B00',
    experience: "Arizona State University"
  },
  {
    name: 'Asynchronous Processing',
    image: 'https://cdn.simpleicons.org/java/ED8B00',
    experience: "Arizona State University, FPT corporation"
  },
  {
    name: 'Node.js',
    image: 'https://cdn.simpleicons.org/nodedotjs/339933',
    experience: "Projects"
  },
  {
    name: 'Express',
    image: 'https://cdn.simpleicons.org/express/000000',
    experience: "Projects"
  },
  {
    name: 'Socket.IO',
    image: 'https://cdn.simpleicons.org/socketdotio/010101',
    experience: "Projects"
  },
  {
    name: 'bcryptjs',
    image: 'https://cdn.simpleicons.org/javascript/F7DF1E',
    experience: "Projects"
  },
  {
    name: 'Joi',
    image: 'https://cdn.simpleicons.org/javascript/F7DF1E',
    experience: "Projects"
  },
  {
    name: 'Helmet',
    image: 'https://cdn.simpleicons.org/express/000000',
    experience: "Projects"
  },
  {
    name: 'Multer',
    image: 'https://cdn.simpleicons.org/express/000000',
    experience: "Projects"
  },
  {
    name: 'Sharp',
    image: 'https://cdn.simpleicons.org/nodedotjs/339933',
    experience: "Projects"
  },
  {
    name: 'Maven',
    image: 'https://cdn.simpleicons.org/apachemaven/C71A36',
    experience: "Projects"
  },
  {
    name: 'Windows Forms',
    image: 'https://cdn.simpleicons.org/microsoft/0078D4',
    experience: "Projects"
  },
  {
    name: 'Entity Framework',
    image: 'https://cdn.simpleicons.org/dotnet/512BD4',
    experience: "Projects"
  }
];

const databaseTechnologies: SkillSet[] = [
  {
    name: 'MongoDB',
    image: 'https://cdn.simpleicons.org/mongodb/47A248',
    experience: "Arizona State University, Projects"
  },
  {
    name: 'Mongoose',
    image: 'https://cdn.simpleicons.org/mongodb/47A248',
    experience: "Projects"
  },
  {
    name: 'DBeaver',
    image: 'https://cdn.simpleicons.org/dbeaver/4EAA25',
    experience: "RoboMain"
  },
  {
    name: 'SQL Server',
    image: 'https://cdn.simpleicons.org/microsoftsqlserver/CC2927',
    experience: "Projects"
  }
];

const databaseOperations: SkillSet[] = [
  {
    name: 'Query Optimization (EXPLAIN)',
    image: 'https://cdn.simpleicons.org/postgresql/4169E1',
    experience: "RoboMain, FPT corporation"
  },
  {
    name: 'Indexing Strategies',
    image: 'https://cdn.simpleicons.org/postgresql/4169E1',
    experience: "RoboMain, FPT corporation"
  },
  {
    name: 'Schema Design',
    image: 'https://cdn.simpleicons.org/postgresql/4169E1',
    experience: "RoboMain, FPT corporation"
  }
];

const frontendSkills: SkillSet[] = [
  {
    name: 'React',
    image: 'https://cdn.simpleicons.org/react/61DAFB',
    experience: "RoboMain, Projects"
  },
  {
    name: 'Vue.js',
    image: 'https://cdn.simpleicons.org/vuedotjs/4FC08D',
    experience: "FPT corporation, Projects"
  },
  {
    name: 'Next.js',
    image: 'https://cdn.simpleicons.org/nextdotjs/000000',
    experience: "RoboMain, Projects"
  },
  {
    name: 'Nuxt.js',
    image: 'https://cdn.simpleicons.org/nuxtdotjs/00DC82',
    experience: "MightyID, FPT corporation"
  },
  {
    name: 'JavaFX',
    image: 'https://cdn.simpleicons.org/java/ED8B00',
    experience: "Arizona State University"
  },
  {
    name: 'GrapeJS',
    image: 'https://cdn.simpleicons.org/javascript/F7DF1E',
    experience: "MightyID"
  },
  {
    name: 'Zustand',
    image: 'https://cdn.simpleicons.org/react/61DAFB',
    experience: "Arizona State University"
  },
  {
    name: 'Zod',
    image: 'https://cdn.simpleicons.org/typescript/3178C6',
    experience: "Arizona State University, Projects"
  },
  {
    name: 'Code Splitting',
    image: 'https://cdn.simpleicons.org/webpack/8DD6F9',
    experience: "RoboMain"
  },
  {
    name: 'Lazy/Eager Loading',
    image: 'https://cdn.simpleicons.org/react/61DAFB',
    experience: "RoboMain"
  },
  {
    name: 'Server-Side Rendering',
    image: 'https://cdn.simpleicons.org/nextdotjs/000000',
    experience: "RoboMain"
  },
  {
    name: 'Axios',
    image: 'https://cdn.simpleicons.org/axios/5A29E4',
    experience: "RoboMain, FPT corporation"
  },
  {
    name: 'Fetch API',
    image: 'https://cdn.simpleicons.org/javascript/F7DF1E',
    experience: "Arizona State University, RoboMain, FPT corporation"
  },
  {
    name: 'Single Page Application',
    image: 'https://cdn.simpleicons.org/react/61DAFB',
    experience: "RoboMain, FPT corporation"
  },
  {
    name: 'Shadcn UI',
    image: 'https://cdn.simpleicons.org/react/61DAFB',
    experience: "Arizona State University"
  },
  {
    name: 'MDX',
    image: 'https://cdn.simpleicons.org/mdx/1B1F24',
    experience: "Arizona State University"
  },
  {
    name: 'Tailwind CSS',
    image: 'https://cdn.simpleicons.org/tailwindcss/06B6D4',
    experience: "Projects"
  },
  {
    name: 'Vite',
    image: 'https://cdn.simpleicons.org/vite/646CFF',
    experience: "Projects"
  },
  {
    name: 'React Router',
    image: 'https://cdn.simpleicons.org/reactrouter/CA4245',
    experience: "Projects"
  },
  {
    name: 'React Hook Form',
    image: 'https://cdn.simpleicons.org/react/61DAFB',
    experience: "Projects"
  },
  {
    name: 'Framer Motion',
    image: 'https://cdn.simpleicons.org/framer/0055FF',
    experience: "Projects"
  },
  {
    name: 'Vue Router',
    image: 'https://cdn.simpleicons.org/vuedotjs/4FC08D',
    experience: "Projects"
  },
  {
    name: 'Canvas API',
    image: 'https://cdn.simpleicons.org/html5/E34F26',
    experience: "Projects"
  },
  {
    name: 'YouTube API',
    image: 'https://cdn.simpleicons.org/youtube/FF0000',
    experience: "Projects"
  }
];

const securitySkills: SkillSet[] = [
  {
    name: 'JWT',
    image: 'https://cdn.simpleicons.org/jsonwebtokens/000000',
    experience: "RoboMain, FPT corporation"
  },
  {
    name: 'Rate Limiting',
    image: 'https://cdn.simpleicons.org/nginx/009639',
    experience: "RoboMain"
  },
  {
    name: 'Authentication',
    image: 'https://cdn.simpleicons.org/auth0/EB5424',
    experience: "RoboMain, FPT corporation"
  },
  {
    name: 'Input Validation',
    image: 'https://cdn.simpleicons.org/shield/000000',
    experience: "RoboMain, FPT corporation"
  },
  {
    name: 'Password Hashing',
    image: 'https://cdn.simpleicons.org/shield/000000',
    experience: "Projects"
  }
];

const developmentTools: SkillSet[] = [
  {
    name: 'Git',
    image: 'https://cdn.simpleicons.org/git/F05032',
    experience: "Arizona State University, RoboMain, FPT corporation"
  },
  {
    name: 'Gradle',
    image: 'https://cdn.simpleicons.org/gradle/02303A',
    experience: "RoboMain, FPT corporation"
  },
  {
    name: 'GitHub',
    image: 'https://cdn.simpleicons.org/github/181717',
    experience: "Arizona State University, RoboMain, FPT corporation"
  },
  {
    name: 'IntelliJ',
    image: 'https://cdn.simpleicons.org/intellijidea/000000',
    experience: "RoboMain, FPT corporation"
  },
  {
    name: 'VS Code',
    image: 'https://cdn.simpleicons.org/visualstudiocode/007ACC',
    experience: "Arizona State University, RoboMain, FPT corporation"
  },
  {
    name: 'Prometheus',
    image: 'https://cdn.simpleicons.org/prometheus/E6522C',
    experience: "RoboMain"
  },
  {
    name: 'Hibernate ORM',
    image: 'https://cdn.simpleicons.org/hibernate/59666C',
    experience: "RoboMain, FPT corporation"
  },
  {
    name: 'Nodemon',
    image: 'https://cdn.simpleicons.org/nodedotjs/339933',
    experience: "Projects"
  }
];

const aiEngineeringSkills: SkillSet[] = [
  {
    name: 'Generative AI',
    image: 'https://cdn.simpleicons.org/openai/412991',
    experience: "Arizona State University"
  },
  {
    name: 'Large Language Models',
    image: 'https://cdn.simpleicons.org/openai/412991',
    experience: "Arizona State University"
  },
  {
    name: 'Retrieval-Augmented Generation',
    image: 'https://cdn.simpleicons.org/langchain/1C3C3C',
    experience: "Arizona State University"
  },
  {
    name: 'Fine-Tuning',
    image: 'https://cdn.simpleicons.org/openai/412991',
    experience: "Arizona State University"
  },
  {
    name: 'Prompt Engineering',
    image: 'https://cdn.simpleicons.org/openai/412991',
    experience: "Arizona State University"
  },
  {
    name: 'Multi-Agent Systems',
    image: 'https://cdn.simpleicons.org/langchain/1C3C3C',
    experience: "Arizona State University"
  },
  {
    name: 'Agentic AI',
    image: 'https://cdn.simpleicons.org/langchain/1C3C3C',
    experience: "Arizona State University"
  },
  {
    name: 'Web Scraping',
    image: 'https://cdn.simpleicons.org/python/3776AB',
    experience: "Arizona State University"
  },
  {
    name: 'LangChain',
    image: 'https://cdn.simpleicons.org/langchain/1C3C3C',
    experience: "Arizona State University, Projects"
  },
  {
    name: 'LangGraph',
    image: 'https://cdn.simpleicons.org/langchain/1C3C3C',
    experience: "Arizona State University"
  },
  {
    name: 'Flowise',
    image: 'https://cdn.simpleicons.org/flowiseai/000000',
    experience: "Arizona State University"
  },
  {
    name: 'Vector Stores',
    image: 'https://cdn.simpleicons.org/langchain/1C3C3C',
    experience: "Arizona State University"
  },
  {
    name: 'Hallucination Detection',
    image: 'https://cdn.simpleicons.org/langchain/1C3C3C',
    experience: "Arizona State University"
  },
  {
    name: 'Embeddings',
    image: 'https://cdn.simpleicons.org/openai/412991',
    experience: "Projects"
  },
  {
    name: 'OpenAI',
    image: 'https://cdn.simpleicons.org/openai/412991',
    experience: "Projects"
  }
];

const machineLearningSkills: SkillSet[] = [
  {
    name: 'TensorFlow/Keras',
    image: 'https://cdn.simpleicons.org/tensorflow/FF6F00',
    experience: "Arizona State University, Projects"
  },
  {
    name: 'Convolutional Neural Networks',
    image: 'https://cdn.simpleicons.org/tensorflow/FF6F00',
    experience: "Arizona State University"
  },
  {
    name: 'Transformer',
    image: 'https://cdn.simpleicons.org/tensorflow/FF6F00',
    experience: "Arizona State University"
  },
  {
    name: 'Hyperparameter Tuning',
    image: 'https://cdn.simpleicons.org/tensorflow/FF6F00',
    experience: "Arizona State University"
  },
  {
    name: 'Data Augmentation',
    image: 'https://cdn.simpleicons.org/tensorflow/FF6F00',
    experience: "Arizona State University"
  },
  {
    name: 'Image Classification',
    image: 'https://cdn.simpleicons.org/tensorflow/FF6F00',
    experience: "Arizona State University, Projects"
  },
  {
    name: 'Computer Vision',
    image: 'https://cdn.simpleicons.org/tensorflow/FF6F00',
    experience: "Arizona State University, Projects"
  },
  {
    name: 'Model Optimization',
    image: 'https://cdn.simpleicons.org/tensorflow/FF6F00',
    experience: "Arizona State University"
  },
  {
    name: 'Keras Tuner',
    image: 'https://cdn.simpleicons.org/tensorflow/FF6F00',
    experience: "Arizona State University"
  },
  {
    name: 'Supervised Learning',
    image: 'https://cdn.simpleicons.org/tensorflow/FF6F00',
    experience: "Arizona State University"
  },
  {
    name: 'NumPy',
    image: 'https://cdn.simpleicons.org/numpy/013243',
    experience: "Projects"
  },
  {
    name: 'Pandas',
    image: 'https://cdn.simpleicons.org/pandas/150458',
    experience: "Projects"
  },
  {
    name: 'Matplotlib',
    image: 'https://cdn.simpleicons.org/matplotlib/11557C',
    experience: "Projects"
  },
  {
    name: 'OpenCV',
    image: 'https://cdn.simpleicons.org/opencv/5C3EE8',
    experience: "Projects"
  },
  {
    name: 'Path Planning',
    image: 'https://cdn.simpleicons.org/python/3776AB',
    experience: "Projects"
  },
  {
    name: 'Control Systems',
    image: 'https://cdn.simpleicons.org/python/3776AB',
    experience: "Projects"
  }
];

const skillCategories: SkillCategory[] = [
  {
    name: 'Programming Languages',
    skills: programmingSkills
  },
  {
    name: 'Backend',
    skills: backendSkills
  },
  {
    name: 'Frontend',
    skills: frontendSkills
  },
  {
    name: 'Security',
    skills: securitySkills
  },
  {
    name: 'Development Tools',
    skills: developmentTools
  },
  {
    name: 'Database Technologies',
    skills: databaseTechnologies
  },
  {
    name: 'Database Operations',
    skills: databaseOperations
  },
  {
    name: 'AI Engineering',
    skills: aiEngineeringSkills
  },
  {
    name: 'Machine Learning',
    skills: machineLearningSkills
  }
];

// Legacy exports for backward compatibility
const skillSets = programmingSkills;
const frameworkSets = [...frontendSkills, ...backendSkills];

export { skillSets, frameworkSets, skillCategories };

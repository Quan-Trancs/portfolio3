import { Experience } from '@/types/experience';

const experiences: Experience[] = [
  {
    name: 'Software Developer Intern',
    duration: 'May 2025 - Aug 2025',
    company: 'MightyID',
    points: [
      'Engineered and maintained a scalable frontend dashboard for an online education platform using Nuxt.js and GrapeJS, enabling administrators to create and manage dynamic educational content, resulting in 25% enhanced user engagement.',
      'Architected responsive, accessible UI components, implementing drag-and-drop functionality with GrapeJS visual page builder to streamline content creation workflows.'
    ]
  },
  {
    name: 'Software Developer Intern',
    duration: 'May 2024 - Dec 2024',
    company: 'RoboMain',
    points: [
      'Architected and developed a full-stack CMMS (Computerized Maintenance Management System) using Next.js, TypeScript, Java Spring Boot, and PostgreSQL, centralizing maintenance operations and replacing fragmented software solutions.',
      'Engineered core modules (work order management, asset tracking, scheduling) with RESTful API design, implementing Spring Data JPA and Hibernate ORM for efficient database operations, accelerating feature deployment by 20%.',
      'Integrated system modules in collaboration with cross-functional teams using Agile methodologies, ensuring seamless deployment and scalability for future enhancements.',
      'Debugged and resolved critical bugs through systematic testing and code reviews, reducing reported issues from QA testers by 40% and improving system stability.'
    ]
  },
  {
    name: 'Software Developer Intern',
    duration: 'May 2023 - Aug 2023',
    company: 'FPT Corporation',
    points: [
      'Engineered a high-performance URL shortening system using Nuxt.js, HTML, and CSS, implementing client-side routing and caching strategies that reduced link generation time by 50% (from 2s to 1s average).',
      'Architected a scalable backend using Java Spring Boot with RESTful API design, implementing the Asynchronous Request-Reply pattern with Redis caching, increasing API response speed by 50% and demonstrating ability to handle 1,000+ concurrent users.',
      'Troubleshot and resolved critical frontend/backend issues through systematic debugging and performance profiling, decreasing user-reported bugs by 20% and improving system reliability.'
    ]
  },
];

export { experiences };

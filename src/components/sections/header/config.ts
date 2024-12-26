import { Link } from '@/types/link';

// This is a setting for the compact header
const linkLimit = 4;
//

const links: Link[] = [
  {
    title: 'Home',
    href: '/',
    description: 'home.jpg'
  },
  {
    title: 'About',
    href: '/about',
    description: 'about.jpg'
  },
  {
    title: 'Projects',
    href: '/projects',
    description: 'projects.jpg'
  },
  {
    title: 'Experiences',
    href: '/experiences',
    description: 'experiences.jpg'
  }
];

export { linkLimit, links };

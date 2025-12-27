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
    href: '/#about',
    description: 'about.jpg'
  },
  {
    title: 'Skills',
    href: '/#skills',
    description: 'skills.jpg'
  },
  {
    title: 'Education',
    href: '/#education',
    description: 'education.jpg'
  },
  {
    title: 'Experiences',
    href: '/#experiences',
    description: 'experiences.jpg'
  },
  {
    title: 'Certificates',
    href: '/#certificates',
    description: 'certificates.jpg'
  },
  {
    title: 'Projects',
    href: '/#projects',
    description: 'projects.jpg'
  },
  {
    title: 'Contact',
    href: '/#contact',
    description: 'contact.jpg'
  }
];

export { linkLimit, links };

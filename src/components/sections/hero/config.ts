import { Hero } from '@/types/hero';
import { metadata as meta } from '@/app/config';

const hero: Hero = {
  name: meta.author.name,
  label: meta.author.label,
  description: 'CS student at Arizona State University. Software Engineer Intern building full-stack apps, cloud billing (Oracle BRM), and applied AI.'
};

export { hero };

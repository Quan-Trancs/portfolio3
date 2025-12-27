import { Hero } from '@/types/hero';
import { metadata as meta } from '@/app/config';

const hero: Hero = {
  name: meta.author.name,
  label: meta.author.label,
  description: 'Software Developer Intern recognized for high productivity and efficient task completion. Proficient in Java, SQL, and Python, with expertise in debugging, coding, and software design.'
};

export { hero };

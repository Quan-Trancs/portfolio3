import { Contact } from '@/types/contact';
import {SiGithub, SiLinkedin} from "@icons-pack/react-simple-icons";

const contact: Contact = {
  email: 'quananhtrancs@gmail.com',
  socials: [
    {
      name: 'Github',
      href: 'https://github.com/Quan-Trancs',
      Icon: SiGithub
    },
    {
      name: 'Linkedin',
      href: 'https://www.linkedin.com/in/quan-tran-960832276/',
      Icon: SiLinkedin
    }
  ]
};

export { contact };

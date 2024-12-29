import { useState } from 'react';
import { motion } from 'framer-motion';
import styles from './style.module.scss';
import { height } from '../anim';
import Body from './body/body';
import React from 'react';
import ModeToggle from '@/components/mode-toggle';
import {
  NavigationMenu,
  NavigationMenuContent, NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from '@/components/ui/navigation-menu';

import { links } from '@/components/sections/header/config';
import { cn } from '@/lib/utils';
import Link from 'next/link';
import {projects} from "@/components/sections/projects/config";

interface IndexProps {
  setIsActive: (isActive: boolean) => void;
}

interface SelectedLinkState {
  isActive: boolean;
  index: number;
}

const Index: React.FC<IndexProps> = ({ setIsActive }) => {
  const [selectedLink, setSelectedLink] = useState<SelectedLinkState>({
    isActive: false,
    index: 0
  });

  // @ts-ignore
  return (
    <motion.div
      variants={height}
      initial="initial"
      animate="enter"
      exit="exit"
      className={styles.nav}
    >
      <div className={styles.wrapper}>
        <div className={styles.container}>
          <Body
            links={links}
            selectedLink={selectedLink}
            setSelectedLink={setSelectedLink}
            setIsActive={setIsActive}
          />
          {/* <Footer /> */}
        </div>
        <div className="absolute bottom-0 right-0 mb-auto">
          <ModeToggle />
        </div>
      </div>
    </motion.div>
  );
};

export function NavigationMenuDemo() {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Getting started</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid gap-3 p-4 md:w-[400px] lg:w-[900px] grid-cols-[1fr_1fr] lg:grid-cols-[.75fr_1fr_1fr]">
              <li className="row-span-3">
                <NavigationMenuLink asChild>
                  <Link
                    className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                    href="/"
                  >
                    <div className="mb-2 mt-4 text-lg font-medium">
                      Home
                    </div>
                    <p className="text-sm leading-tight text-muted-foreground">
                      Welcome to my portfolio! Discover my projects, skills, and experience in web development and design.
                    </p>
                  </Link>
                </NavigationMenuLink>
              </li>
              <ListItem href="/#about" title="Introduction">
                Get to know more about me and my resume.
              </ListItem>
              <ListItem href="/#skills" title="Skill">
                Explore my technical skills, including languages, frameworks, and tools I specialize in.
              </ListItem>
              <ListItem href="/#projects" title="Projects">
                Discover my personal and collaborative projects showcasing practical applications of my skills.
              </ListItem>
              <ListItem href="/#experiences" title="Experiences">
                Learn about my past projects, internships, and achievements in the field of software development.
              </ListItem>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Projects</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
              {projects.map((project) => (
                <ListItem
                  key={project.data.title}
                  title={project.data.title}
                  href={project.url}
                >
                  {project.data.description}
                </ListItem>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  )
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-3 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  )
})
ListItem.displayName = "ListItem"
export default Index;

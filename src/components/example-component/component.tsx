"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { componentData } from "./data";

interface ComponentProps {
  customTitle?: string;
}

const ExampleComponent: React.FC<ComponentProps> = ({ customTitle }) => {
  const { title, subtitle, buttonText, menuItems, isAnimated, styles } =
    componentData;

  // Use props to override data if needed
  const displayTitle = customTitle || title;

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  };

  const Container = isAnimated ? motion.div : "div";
  const Item = isAnimated ? motion.div : "div";

  return (
    <Container
      className={styles.container}
      variants={isAnimated ? containerVariants : undefined}
      initial={isAnimated ? "hidden" : undefined}
      animate={isAnimated ? "visible" : undefined}
      id="builder-1d88dd7c2ed94610a5b1ee63b3b6d36e"
    >
      <h2 className={styles.heading}>{displayTitle}</h2>
      <p className={styles.subheading}>{subtitle}</p>

      <button className={styles.button}>{buttonText}</button>

      <div className={styles.menuList}>
        {menuItems.map((item) => (
          <Item
            key={item.id}
            className={styles.menuItem}
            variants={isAnimated ? itemVariants : undefined}
          >
            <Link href={item.url}>
              <h3 className="font-medium">{item.title}</h3>
              {item.description && (
                <p className="text-sm text-muted-foreground">
                  {item.description}
                </p>
              )}
            </Link>
          </Item>
        ))}
      </div>
    </Container>
  );
};

export default ExampleComponent;

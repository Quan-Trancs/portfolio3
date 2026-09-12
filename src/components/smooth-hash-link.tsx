'use client';

import React from 'react';
import { useLenis } from '@/lib/lenis';

type SmoothHashLinkProps = React.ComponentPropsWithoutRef<'a'> & {
  href: string;
};

const SmoothHashLink = React.forwardRef<HTMLAnchorElement, SmoothHashLinkProps>(
  ({ href, onClick, ...props }, ref) => {
    const lenis = useLenis();

    const handleClick = (event: React.MouseEvent<HTMLAnchorElement>) => {
      const hashIndex = href.indexOf('#');
      if (hashIndex === -1) {
        onClick?.(event);
        return;
      }

      const hash = href.slice(hashIndex);
      const target = document.querySelector(hash);
      if (!(target instanceof HTMLElement)) {
        onClick?.(event);
        return;
      }

      event.preventDefault();
      onClick?.(event);

      const header = document.querySelector('header');
      const headerHeight = header?.getBoundingClientRect().height ?? 80;
      const paddingTop = parseFloat(getComputedStyle(target).paddingTop) || 0;
      const offset = paddingTop - headerHeight - 8;

      const easeInOutCubic = (t: number) =>
        t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;

      if (lenis) {
        lenis.scrollTo(target, {
          offset,
          duration: 0.95,
          easing: easeInOutCubic,
        });
      } else {
        window.scrollTo({
          top: target.getBoundingClientRect().top + window.scrollY + offset,
          behavior: 'smooth',
        });
      }

      window.history.pushState(null, '', hash);
    };

    return <a ref={ref} href={href} onClick={handleClick} {...props} />;
  }
);

SmoothHashLink.displayName = 'SmoothHashLink';

export default SmoothHashLink;

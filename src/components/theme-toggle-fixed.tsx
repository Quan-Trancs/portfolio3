'use client';

import * as React from 'react';
import { Moon, Sun } from 'lucide-react';
import { useTheme } from 'next-themes';
import { motion, AnimatePresence } from 'framer-motion';

import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

export default function ThemeToggleFixed() {
  const { theme, setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = React.useState(false);

  // Avoid hydration mismatch
  React.useEffect(() => {
    setMounted(true);
  }, []);

  // Toggle between light and dark
  const toggleTheme = () => {
    // If system theme, detect current preference and set explicitly
    if (theme === 'system') {
      const systemIsDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      setTheme(systemIsDark ? 'light' : 'dark');
    } else {
      // Toggle between light and dark
      setTheme(resolvedTheme === 'dark' ? 'light' : 'dark');
    }
  };

  // Don't render until mounted to avoid hydration issues
  if (!mounted) {
    return null;
  }

  const isDark = resolvedTheme === 'dark';

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8, y: 20 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ duration: 0.3, delay: 0.5 }}
      className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-50"
    >
      <Button
        onClick={toggleTheme}
        size="icon"
        variant="default"
        className={cn(
          'h-12 w-12 rounded-full shadow-lg',
          'backdrop-blur-sm',
          'transition-all duration-300',
          'hover:scale-110 active:scale-95',
          'hover:shadow-xl',
          // Dark gray when light mode, light gray when dark mode
          isDark 
            ? 'bg-gray-300 hover:bg-primary hover:text-primary-foreground' 
            : 'bg-gray-700 hover:bg-primary hover:text-primary-foreground'
        )}
        aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
      >
        <AnimatePresence mode="wait" initial={false}>
          {isDark ? (
            <motion.div
              key="moon"
              initial={{ rotate: -90, scale: 0 }}
              animate={{ rotate: 0, scale: 1 }}
              exit={{ rotate: 90, scale: 0 }}
              transition={{ duration: 0.2 }}
            >
              <Moon className="h-5 w-5 text-gray-800" />
            </motion.div>
          ) : (
            <motion.div
              key="sun"
              initial={{ rotate: 90, scale: 0 }}
              animate={{ rotate: 0, scale: 1 }}
              exit={{ rotate: -90, scale: 0 }}
              transition={{ duration: 0.2 }}
            >
              <Sun className="h-5 w-5 text-gray-100" />
            </motion.div>
          )}
        </AnimatePresence>
      </Button>
    </motion.div>
  );
}


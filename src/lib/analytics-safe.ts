"use client";

/**
 * This file creates a safe wrapper for analytics scripts like FullStory
 * that might interfere with Next.js RSC (React Server Components) fetching
 */

type AnalyticsInitFunction = () => void;

// Store initialization functions to run after a delay
const analyticsQueue: AnalyticsInitFunction[] = [];

// Safe way to initialize analytics scripts
export function safeInitAnalytics(initFn: AnalyticsInitFunction): void {
  // In development, delay analytics initialization to avoid interfering with hot reloading
  if (process.env.NODE_ENV === "development") {
    analyticsQueue.push(initFn);
    return;
  }

  // In production, initialize normally
  initFn();
}

// Execute queued analytics initializations with a delay
if (typeof window !== "undefined" && process.env.NODE_ENV === "development") {
  // Wait until the app is fully loaded and stable before initializing analytics
  window.addEventListener("load", () => {
    // Adding a significant delay to ensure hot module reloading is stable first
    setTimeout(() => {
      analyticsQueue.forEach((initFn) => initFn());
    }, 2000); // 2 second delay
  });
}

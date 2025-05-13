"use client";

import React, { useEffect } from "react";
import { ReactLenis, useLenis } from "@/lib/lenis";

interface LenisProps {
  children: React.ReactNode;
}

function SmoothScroll({ children }: LenisProps) {
  const lenis = useLenis(() => {
    // called every scroll
  });

  useEffect(() => {
    // Only run on client-side
    if (typeof document === "undefined") return;

    const handleDOMContentLoaded = () => {
      lenis?.stop();
      lenis?.start();
    };

    if (document.readyState === "loading") {
      document.addEventListener("DOMContentLoaded", handleDOMContentLoaded);
    } else {
      // DOM already loaded, call directly
      handleDOMContentLoaded();
    }

    return () => {
      document.removeEventListener("DOMContentLoaded", handleDOMContentLoaded);
    };
  }, [lenis]);

  return (
    <ReactLenis
      root
      options={{
        duration: 2,
      }}
    >
      {children}
    </ReactLenis>
  );
}

export default SmoothScroll;

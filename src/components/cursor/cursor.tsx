"use client";
import React, { useEffect, useState, useRef, useCallback } from "react";
import styles from "./style.module.scss";
import {
  motion,
  useMotionValue,
  useSpring,
  MotionValue,
  SpringOptions,
} from "framer-motion";

interface MouseMoveEvent {
  clientX: number;
  clientY: number;
}

export default function Cursor() {
  const [isPressed, setIsPressed] = useState<boolean>(false);
  const cursor = useRef<HTMLDivElement>(null);
  const cursorSize = isPressed ? 21 : 15;
  const [isVisible, setIsVisible] = useState(false);
  // Initialize with safe defaults for SSR
  const [isBrowser, setIsBrowser] = useState(false);

  const mouse: { x: MotionValue<number>; y: MotionValue<number> } = {
    x: useMotionValue(0),
    y: useMotionValue(0),
  };

  const smoothOptions: SpringOptions = {
    damping: 20,
    stiffness: 300,
    mass: 0.5,
  };
  const smoothMouse = {
    x: useSpring(mouse.x, smoothOptions),
    y: useSpring(mouse.y, smoothOptions),
  };

  // Set browser state once mounted
  useEffect(() => {
    setIsBrowser(true);
  }, []);

  const manageResize = useCallback(() => {
    if (!isBrowser) return;

    const isFinePointer = window.matchMedia("(pointer: fine)").matches;
    if (!isFinePointer) {
      setIsVisible(false);
      return;
    }
  }, [isBrowser]);

  const manageMouseMove = useCallback((e: MouseMoveEvent) => {
    if (!isBrowser) return;

    const isFinePointer = window.matchMedia("(pointer: fine)").matches;
    if (!isFinePointer) {
      setIsVisible(false);
      return;
    }
    setIsVisible((prev) => {
      if (!prev) return true;
      return prev;
    });

    const { clientX, clientY } = e;
    mouse.x.set(clientX - cursorSize / 2);
    mouse.y.set(clientY - cursorSize / 2);
  }, [isBrowser, cursorSize]);

  const manageMouseLeave = useCallback(() => {
    setIsVisible(false);
  }, []);

  const handleMouseEnter = useCallback(() => {
    if (!isBrowser) return;
    
    const isFinePointer = window.matchMedia("(pointer: fine)").matches;
    if (isFinePointer) {
      setIsVisible(true);
    }
  }, [isBrowser]);

  const handleWindowBlur = useCallback(() => {
    setIsVisible(false);
  }, []);

  const handleWindowFocus = useCallback(() => {
    if (!isBrowser) return;
    
    const isFinePointer = window.matchMedia("(pointer: fine)").matches;
    if (isFinePointer) {
      // Show cursor when window regains focus
      // It will update position on next mouse move
      setIsVisible(true);
    }
  }, [isBrowser]);

  const handleMouseDown = useCallback((e: MouseEvent) => {
    // prevent right click to trigger pressed
    if (e.button === 2) return;

    setIsPressed(true);
  }, []);

  const handleMouseUp = useCallback(() => {
    setIsPressed(false);
  }, []);

  useEffect(() => {
    if (!isBrowser) return;

    const isFinePointer = window.matchMedia("(pointer: fine)").matches;
    
    // Hide default cursor only on fine pointer devices
    if (isFinePointer) {
      document.body.style.cursor = 'none';
    }

    window.addEventListener("resize", manageResize);

    document.body.addEventListener("mouseleave", manageMouseLeave, {
      passive: true,
    });
    document.body.addEventListener("mouseenter", handleMouseEnter, {
      passive: true,
    });
    window.addEventListener("mousemove", manageMouseMove, {
      passive: true,
    });
    window.addEventListener("mousedown", handleMouseDown, {
      passive: true,
    });
    window.addEventListener("mouseup", handleMouseUp, {
      passive: true,
    });
    window.addEventListener("blur", handleWindowBlur, {
      passive: true,
    });
    window.addEventListener("focus", handleWindowFocus, {
      passive: true,
    });

    return () => {
      // Restore default cursor on cleanup
      document.body.style.cursor = 'auto';
      
      window.removeEventListener("resize", manageResize);
      document.body.removeEventListener("mouseleave", manageMouseLeave);
      document.body.removeEventListener("mouseenter", handleMouseEnter);
      window.removeEventListener("mousemove", manageMouseMove);
      window.removeEventListener("mousedown", handleMouseDown);
      window.removeEventListener("mouseup", handleMouseUp);
      window.removeEventListener("blur", handleWindowBlur);
      window.removeEventListener("focus", handleWindowFocus);
    };
  }, [isBrowser, cursorSize, manageResize, manageMouseMove, manageMouseLeave, handleMouseEnter, handleWindowBlur, handleWindowFocus, handleMouseDown, handleMouseUp]);

  const template = ({
    rotate,
    scaleX,
    scaleY,
  }: {
    rotate: number;
    scaleX: number;
    scaleY: number;
  }) => {
    return `rotate(${rotate}deg) scaleX(${scaleX}) scaleY(${scaleY})`;
  };

  return (
    <div className={styles.cursorContainer}>
      <motion.div
        transformTemplate={template}
        style={{
          left: smoothMouse.x,
          top: smoothMouse.y,
          scaleX: mouse.x,
          scaleY: mouse.y,
        }}
        animate={{
          width: cursorSize,
          height: cursorSize,
        }}
        className={`${styles.cursor} ${isVisible ? styles.visible : styles.hidden}`}
        ref={cursor}
      ></motion.div>
    </div>
  );
}

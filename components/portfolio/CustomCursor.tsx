"use client";

import { useEffect, useState, useCallback } from "react";
import { Box } from "@mui/material";

export default function CustomCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [trailPosition, setTrailPosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [isClicking, setIsClicking] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  const handleMouseMove = useCallback((e: MouseEvent) => {
    setPosition({ x: e.clientX, y: e.clientY });
    setIsVisible(true);
  }, []);

  const handleMouseEnter = useCallback(() => {
    setIsVisible(true);
  }, []);

  const handleMouseLeave = useCallback(() => {
    setIsVisible(false);
  }, []);

  const handleMouseDown = useCallback(() => {
    setIsClicking(true);
  }, []);

  const handleMouseUp = useCallback(() => {
    setIsClicking(false);
  }, []);

  useEffect(() => {
    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseenter", handleMouseEnter);
    document.addEventListener("mouseleave", handleMouseLeave);
    document.addEventListener("mousedown", handleMouseDown);
    document.addEventListener("mouseup", handleMouseUp);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseenter", handleMouseEnter);
      document.removeEventListener("mouseleave", handleMouseLeave);
      document.removeEventListener("mousedown", handleMouseDown);
      document.removeEventListener("mouseup", handleMouseUp);
    };
  }, [handleMouseMove, handleMouseEnter, handleMouseLeave, handleMouseDown, handleMouseUp]);

  useEffect(() => {
    const animateTrail = () => {
      setTrailPosition((prev) => ({
        x: prev.x + (position.x - prev.x) * 0.15,
        y: prev.y + (position.y - prev.y) * 0.15,
      }));
    };

    const animationId = requestAnimationFrame(animateTrail);
    return () => cancelAnimationFrame(animationId);
  }, [position]);

  useEffect(() => {
    const handleHoverElements = () => {
      const hoverElements = document.querySelectorAll(
        'a, button, [role="button"], input, textarea, select, .MuiButton-root, .MuiIconButton-root'
      );

      hoverElements.forEach((el) => {
        el.addEventListener("mouseenter", () => setIsHovering(true));
        el.addEventListener("mouseleave", () => setIsHovering(false));
      });
    };

    handleHoverElements();
    const observer = new MutationObserver(handleHoverElements);
    observer.observe(document.body, { childList: true, subtree: true });

    return () => observer.disconnect();
  }, []);

  // Hide on touch devices
  if (typeof window !== "undefined" && "ontouchstart" in window) {
    return null;
  }

  return (
    <>
      {/* Main cursor dot */}
      <Box
        sx={{
          position: "fixed",
          left: position.x,
          top: position.y,
          width: isHovering ? 50 : isClicking ? 8 : 12,
          height: isHovering ? 50 : isClicking ? 8 : 12,
          backgroundColor: isHovering ? "transparent" : "#E95000",
          border: isHovering ? "2px solid #E95000" : "none",
          borderRadius: "50%",
          pointerEvents: "none",
          zIndex: 99999,
          transform: "translate(-50%, -50%)",
          transition: "width 0.2s ease, height 0.2s ease, background-color 0.2s ease, border 0.2s ease",
          opacity: isVisible ? 1 : 0,
          mixBlendMode: isHovering ? "difference" : "normal",
        }}
      />

      {/* Trail cursor */}
      <Box
        sx={{
          position: "fixed",
          left: trailPosition.x,
          top: trailPosition.y,
          width: isHovering ? 60 : 40,
          height: isHovering ? 60 : 40,
          border: "1px solid rgba(233, 80, 0, 0.5)",
          borderRadius: "50%",
          pointerEvents: "none",
          zIndex: 99998,
          transform: "translate(-50%, -50%)",
          transition: "width 0.3s ease, height 0.3s ease",
          opacity: isVisible ? 0.6 : 0,
        }}
      />

      {/* Global style to hide default cursor */}
      <style jsx global>{`
        * {
          cursor: none !important;
        }
      `}</style>
    </>
  );
}

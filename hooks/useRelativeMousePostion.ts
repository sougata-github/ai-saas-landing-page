import { RefObject, useEffect } from "react";
import { useMotionValue } from "framer-motion";

export const useRelativeMousePosition = (to: RefObject<HTMLElement>) => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!to.current) return;
      const rect = to?.current.getBoundingClientRect();

      mouseX.set(e.clientX - rect.x);
      mouseY.set(e.clientY - rect.y);
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => window.removeEventListener("mousemove", handleMouseMove);
  });

  return [mouseX, mouseY];
};

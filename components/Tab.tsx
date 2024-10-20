"use client";

import { useEffect, useRef } from "react";
import {
  DotLottieCommonPlayer,
  DotLottiePlayer,
} from "@dotlottie/react-player";
import {
  animate,
  motion,
  useMotionTemplate,
  useMotionValue,
} from "framer-motion";

interface Props {
  title: string;
  icon: string;
  isNew: boolean;
  selected: boolean;
  onClick: () => void;
}

const Tab = ({ title, icon, isNew, onClick, selected }: Props) => {
  const offsetX = useMotionValue(0);
  const offsetY = useMotionValue(0);

  const maskImage = useMotionTemplate`
    radial-gradient(80px 80px at ${offsetX}% ${offsetY}%, black, transparent)
  `;

  const tabRef = useRef<HTMLDivElement>(null);
  const lottiePlayerRef = useRef<DotLottieCommonPlayer>(null);

  const handleTabHover = () => {
    if (!lottiePlayerRef.current) return;
    lottiePlayerRef.current.seek(0);
    lottiePlayerRef.current.play();
  };

  useEffect(() => {
    if (!tabRef.current || !selected) return;

    offsetX.set(0);
    offsetY.set(0);

    const { height, width } = tabRef.current?.getBoundingClientRect();

    const circumference = height * 2 + width * 2;

    //% of total duration in which each keyframe occurs
    const times = [
      0,
      width / circumference,
      (width + height) / circumference,
      (width * 2 + height) / circumference,
      1,
    ];

    animate(offsetX, [0, 100, 100, 0, 0], {
      times,
      duration: 4,
      repeat: Infinity,
      ease: "linear",
      repeatType: "loop",
    });

    animate(offsetY, [0, 0, 100, 100, 0], {
      times,
      duration: 4,
      repeat: Infinity,
      ease: "linear",
      repeatType: "loop",
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selected]);

  return (
    <div
      ref={tabRef}
      className="cursor-pointer border border-white/15 flex p-2.5 rounded-xl gap-2.5 items-center md:flex-1 relative"
      onMouseEnter={handleTabHover}
      onClick={onClick}
    >
      {selected && (
        <motion.div
          className="absolute inset-0 -m-px rounded-xl border border-[#A369FF]"
          style={{
            maskImage,
          }}
        />
      )}

      <div className="size-12 border border-white/15 rounded-lg inline-flex items-center justify-center">
        <DotLottiePlayer
          src={icon}
          className="size-5"
          autoplay
          ref={lottiePlayerRef}
        />
      </div>

      <div className="font-medium">{title}</div>
      {isNew && (
        <div className="text-xs rounded-full px-2 py-0.5 bg-[#8C44FF] text-black font-semibold">
          new
        </div>
      )}
    </div>
  );
};

export default Tab;

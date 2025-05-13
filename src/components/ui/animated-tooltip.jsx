import React, { useState } from "react";
import {
  motion,
  useTransform,
  AnimatePresence,
  useMotionValue,
  useSpring,
} from "motion/react";
import { twMerge } from "tailwind-merge";

export const AnimatedTooltip = ({ items, setTechSelected, techSelected }) => {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const springConfig = { stiffness: 100, damping: 5 };
  const x = useMotionValue(0);
  const rotate = useSpring(useTransform(x, [-50, 50], [-20, 20]), springConfig);
  const translateX = useSpring(
    useTransform(x, [-50, 50], [-25, 25]),
    springConfig
  );
  const handleMouseMove = (event) => {
    const halfWidth = event.currentTarget.offsetWidth / 2;
    const xPos = event.nativeEvent.offsetX - halfWidth;
    x.set(xPos);
  };

  return (
    <>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 max-w-3xl mx-auto gap-5 place-items-center">
        {items.map((item, idx) => (
          <div
            className="group relative"
            key={item.name}
            onMouseEnter={() => setHoveredIndex(idx)}
            onMouseLeave={() => setHoveredIndex(null)}
            onMouseMove={handleMouseMove}
          >
            <AnimatePresence mode="popLayout">
              {hoveredIndex === idx && (
                <motion.div
                  initial={{ opacity: 0, y: 20, scale: 0.6 }}
                  animate={{
                    opacity: 1,
                    y: 0,
                    scale: 1,
                    transition: {
                      type: "spring",
                      stiffness: 260,
                      damping: 10,
                    },
                  }}
                  exit={{ opacity: 0, y: 20, scale: 0.6 }}
                  style={{
                    translateX: translateX,
                    rotate: rotate,
                    whiteSpace: "nowrap",
                  }}
                  className="absolute break-words whitespace-normal text-center -top-8 left-1/2 z-50 flex -translate-x-1/2 flex-col items-center justify-center px-4 py-2 text-xs shadow-xl border border-slate-900 rounded-xl dark:border-slate-50 bg-slate-50 dark:bg-slate-900"
                >
                  <div className="absolute inset-x-10 -bottom-px z-30 h-px w-[20%] bg-gradient-to-r from-transparent via-emerald-500 to-transparent" />
                  <div className="absolute -bottom-px left-10 z-30 h-px w-[40%] bg-gradient-to-r from-transparent via-sky-500 to-transparent" />
                  <a
                    href={item.url}
                    target="_blank"
                    className="relative z-30 text-base font-bold hover:underline transition-all duration-300"
                  >
                    {item.name}
                  </a>
                </motion.div>
              )}
            </AnimatePresence>
            <div
              alt={item.name}
              className={twMerge(
                "relative size-24 md:size-28 lg:size-32 p-2 overflow-hidden cursor-pointer border border-slate-900 rounded-full dark:border-slate-50 dark:bg-slate-60/70 bg-slate-900/60 object-cover object-top transition duration-500 group-hover:z-30 group-hover:scale-105",
                item.name === techSelected
                  ? "dark:bg-slate-50/70 bg-slate-900"
                  : ""
              )}
              onClick={() =>
                techSelected === item.name
                  ? setTechSelected("")
                  : setTechSelected(item.name)
              }
            >
              <img
                src={item.icon}
                alt={item.name}
                className="w-full h-full rounded-full"
              />
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const words = ["Serendipia", "Simplicidad", "Resiliencia", "Éter", "Plenitud"];

const opacity = {
  initial: {
    opacity: 0,
  },

  enter: {
    opacity: 0.75,

    transition: { duration: 3, delay: 0.2 },
  },
};

const slideUp = {
  initial: {
    top: 0,
  },

  exit: {
    top: "-100vh",

    transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1], delay: 0.2 },
  },
};

export default function Intro() {
  const [index, setIndex] = useState(0);
  const [dimension, setDimension] = useState({ width: 0, height: 0 });

  useEffect(() => {
    setDimension({ width: window.innerWidth, height: window.innerHeight });
  }, []);

  useEffect(() => {
    if (index === words.length - 1) return;
    const timer = setTimeout(
      () => {
        setIndex(index + 1);
      },
      index === 0 ? 1000 : 400
    );

    return () => clearTimeout(timer);
  }, [index]);

  const initialPath = `M0 0 L${dimension.width} 0 L${dimension.width} ${
    dimension.height
  } Q${dimension.width / 2} ${dimension.height + 300} 0 ${
    dimension.height
  } L0 0`;
  const targetPath = `M0 0 L${dimension.width} 0 L${dimension.width} ${
    dimension.height
  } Q${dimension.width / 2} ${dimension.height} 0 ${dimension.height} L0 0`;

  const curve = {
    initial: {
      d: initialPath,
      transition: { duration: 0.7, ease: [0.76, 0, 0.24, 1] },
    },
    exit: {
      d: targetPath,
      transition: { duration: 0.7, ease: [0.76, 0, 0.24, 1], delay: 0.3 },
    },
  };

  return (
    <motion.div
      variants={slideUp}
      initial="initial"
      exit="exit"
      className="fixed inset-0 flex items-center justify-center h-screen w-screen bg-[#020618] z-[999]"
    >
      {dimension.width > 0 && (
        <>
          <motion.p
            variants={opacity}
            initial="initial"
            animate="enter"
            className="flex items-center font-jetbrainsmono text-white text-8xl italic absolute z-10"
          >
            <span className="block w-2.5 h-2.5 bg-white rounded-full mr-2"></span>
            {words[index]}
          </motion.p>

          <svg className="absolute top-0 w-full h-[calc(100%+300px)]">
            <motion.path
              variants={curve}
              initial="initial"
              exit="exit"
              className="fill-[#020618]"
            />
          </svg>
        </>
      )}
    </motion.div>
  );
}

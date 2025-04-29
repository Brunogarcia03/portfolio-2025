import { AnimatePresence, motion } from "framer-motion";
import { useState, useEffect, Fragment } from "react";
import { useLocation } from "react-router-dom";
import Header from "./Header";

const curve = (initialPath, targetPath) => ({
  initial: { d: initialPath },
  enter: {
    d: targetPath,
    transition: { duration: 0.75, delay: 0.35, ease: [0.76, 0, 0.24, 1] },
  },
  exit: {
    d: initialPath,
    transition: { duration: 0.75, ease: [0.76, 0, 0.24, 1] },
  },
});

const translate = {
  initial: { top: "-300px" },
  enter: {
    top: "-100vh",
    transition: { duration: 0.75, delay: 0.35, ease: [0.76, 0, 0.24, 1] },
    transitionEnd: { top: "100vh" },
  },
  exit: {
    top: "-300px",
    transition: { duration: 0.75, ease: [0.76, 0, 0.24, 1] },
  },
};

const anim = (variants) => ({
  variants,
  initial: "initial",
  animate: "enter",
  exit: "exit",
});

function Transition({ children }) {
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });

  const location = useLocation();

  useEffect(() => {
    const resize = () => {
      setDimensions({ width: window.innerWidth, height: window.innerHeight });
    };
    resize();
    window.addEventListener("resize", resize);
    return () => window.removeEventListener("resize", resize);
  }, []);

  return (
    <AnimatePresence mode="wait">
      {dimensions.width > 0 ? (
        <Fragment key={location.pathname}>
          {children}
          <SVG width={dimensions.width} height={dimensions.height} />
        </Fragment>
      ) : (
        <section className="fixed h-[calc(100vh+600px)] w-full left-0 top-0 z-[1000] pointer-events-none bg-slate-900 dark:bg-slate-400"></section>
      )}
    </AnimatePresence>
  );
}

const SVG = ({ width, height }) => {
  const initialPath = `
    M0 300 
    Q${width / 2} 0 ${width} 300
    L${width} ${height + 300}
    Q${width / 2} ${height + 600} 0 ${height + 300}
    L0 0
  `;

  const targetPath = `
    M0 300
    Q${width / 2} 0 ${width} 300
    L${width} ${height}
    Q${width / 2} ${height} 0 ${height}
    L0 0
  `;

  return (
    <motion.svg
      className="fixed h-[calc(100vh+600px)] w-full left-0 top-0 z-[10000] pointer-events-none"
      viewBox={`0 0 ${width} ${height + 600}`}
      preserveAspectRatio="none"
      {...anim(translate)}
    >
      <motion.path fill={"#020618"} {...anim(curve(initialPath, targetPath))} />
    </motion.svg>
  );
};

export default Transition;

import { motion } from "framer-motion";
import { useState, useRef, Fragment } from "react";
import { FlipWords } from "../../components/ui/FlipWords";
import LinkPreview from "../../components/ui/LinkPreview";
import {
  cursorColors,
  projectEmojis,
  projectsList,
} from "../../constants/projectsArray";
import { div } from "framer-motion/client";

const words = ["pasión", "refugio", "amor", "dedicación", "curiosidad"];

const anim = {
  initial: { width: 0 },
  open: {
    width: "auto",
    transition: { duration: 0.4, ease: [0.23, 1, 0.32, 1] },
  },
  closed: { width: 0 },
};

export default function Index() {
  const [activeIndex, setActiveIndex] = useState(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [showCursor, setShowCursor] = useState(false);
  const containerRef = useRef();

  const handleMouseMove = (e) => {
    const rect = containerRef.current.getBoundingClientRect();
    setMousePos({
      x: e.clientX,
      y: e.clientY,
    });
  };

  const handleClick = () => {
    if (activeIndex !== null) {
      const link = projectsList[activeIndex].url;
      window.open(link, "_blank");
    }
  };

  return (
    <section
      className="w-full overflow-hidden py-24 relative"
      ref={containerRef}
      onMouseMove={handleMouseMove}
    >
      <h3 className="text-3xl md:text-5xl text-center font-medium leading-3 md:leading-10 pb-32 dark:text-[#ece7dd] text-slate-900">
        Proyectos nacidos de mí
        <FlipWords
          className="text-3xl md:text-5xl font-bold italic"
          words={words}
        />
        <br />
        por la programación.
      </h3>

      {/* Cursor personalizado */}
      <motion.div
        className="pointer-events-none fixed z-50"
        animate={{
          top: mousePos.y,
          left: mousePos.x,
          opacity: showCursor ? 1 : 0,
          scale: showCursor ? 1 : 0,
        }}
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
        style={{ translateX: "-50%", translateY: "-50%" }}
      >
        <div
          onClick={handleClick}
          className={`w-24 h-24 rounded-full flex items-center justify-center font-semibold text-sm uppercase opacity-60 cursor-pointer ${
            cursorColors[activeIndex ?? 0]
          }`}
        >
          <p className="text-3xl opacity-100">
            {projectEmojis[activeIndex ?? 0]}
          </p>
        </div>
      </motion.div>

      <div
        ref={containerRef}
        onMouseEnter={() => setShowCursor(true)}
        onMouseLeave={() => setShowCursor(false)}
      >
        {projectsList.map((project, i) => {
          return (
            <article
              className="flex flex-col items-center justify-center"
              key={i}
              onMouseEnter={() => setActiveIndex(i)}
              onMouseLeave={() => setActiveIndex(null)}
            >
              <div
                href={project.url}
                className={`w-full flex justify-center items-center cursor-pointer 
                          border-t border-slate-950 pt-[0.8vw]`}
              >
                <p className="text-[5vw] mr-[0.75vw] m-0">
                  {project.dictionary.title1}
                </p>

                <motion.div
                  variants={anim}
                  animate={activeIndex === i ? "open" : "closed"}
                  className="overflow-hidden flex justify-center w-0"
                >
                  <LinkPreview url={project.url} width={220} height={110} />
                </motion.div>

                <p className="text-[5vw] ml-[0.75vw] m-0">
                  {project.dictionary.title2}
                </p>
              </div>
              <p className="text-center text-2xl max-w-2xl pb-3">
                {project.description}
              </p>
              <div className="flex gap-3 items-center justify-center pb-[1vw]">
                {project.icons.map((icon, i) => (
                  <div
                    key={i}
                    className="flex flex-col items-center justify-center dark:bg-slate-60/70 bg-slate-900/60 text-white p-2 rounded-lg"
                  >
                    <icon.icon className="w-8 h-8" />
                    <p className="text-xs mt-1">{icon.name}</p>
                  </div>
                ))}
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}

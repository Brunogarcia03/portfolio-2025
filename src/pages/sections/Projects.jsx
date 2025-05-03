import { motion, useScroll, useTransform } from "framer-motion";
import { useState, useRef } from "react";
import { FlipWords } from "../../components/ui/FlipWords";
import LinkPreview from "../../components/ui/LinkPreview";
import { WobbleCard } from "../../components/ui/WobbleCard";
import {
  cursorColors,
  projectEmojis,
  projectsList,
} from "../../constants/projectsArray";

const words = ["pasión", "refugio", "amor", "dedicación", "curiosidad"];

export default function Index() {
  const [activeIndex, setActiveIndex] = useState(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [showCursor, setShowCursor] = useState(false);
  const containerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });
  const height = useTransform(scrollYProgress, [0, 0.9], [50, 0]);

  const handleMouseMove = (e) => {
    setMousePos({ x: e.clientX, y: e.clientY });
  };

  const handleClick = () => {
    if (activeIndex !== null) {
      window.open(projectsList[activeIndex].url, "_blank");
    }
  };

  return (
    <section
      className="w-full overflow-hidden py-24 relative z-10 bg-[linear-gradient(90deg,_rgba(236,231,221,1)_0%,_rgba(144,161,185,1)_40%,_rgba(226,232,240,1)_70%)] dark:bg-[linear-gradient(90deg,_rgba(15,23,43,1)_0%,_rgba(69,85,108,1)_40%,_rgba(49,65,88,1)_68%)]"
      ref={containerRef}
      onMouseMove={handleMouseMove}
    >
      <h3 className="text-3xl md:text-5xl text-center font-medium transition-all duration-300 leading-3 md:leading-10 pb-24 dark:text-[#ece7dd] text-slate-900">
        Proyectos nacidos de mí{" "}
        <FlipWords
          className="text-3xl md:text-5xl font-bold italic"
          words={words}
          duration={3}
        />{" "}
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

      {/* Grid de tarjetas Wobble */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 max-w-2xl lg:max-w-7xl px-[5vh] mx-auto w-full">
        {projectsList.map((project, i) => (
          <WobbleCard
            key={i}
            containerClassName={`relative col-span-1 ${cursorColors[i]} ${
              i === 0 || i === projectsList.length - 1
                ? "col-span-1 lg:col-span-2 h-full bg-pink-800 lg:min-h-[300px]"
                : "col-span-1 min-h-[300px]"
            } bg-slate-800 text-white`}
            setActiveIndex={setActiveIndex}
            setShowCursor={setShowCursor}
            index={i}
          >
            {i === 0 || i === projectsList.length - 1 ? (
              <div className="lg:max-w-md">
                <h2 className="text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
                  {project.title}
                </h2>
                <p className="mt-4 text-left text-base/6 text-neutral-200">
                  {project.description}
                </p>
                <div className="flex items-center justify-center lg:justify-start w-full mt-4">
                  <LinkPreview
                    url={project.url}
                    width={300}
                    height={200}
                    alt="linear demo image"
                    className=""
                  />
                </div>
              </div>
            ) : (
              <div>
                <h2 className="max-w-80  text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
                  {project.title}
                </h2>
                <p className="mt-4 max-w-[26rem] text-left  text-base/6 text-neutral-200">
                  {project.description}
                </p>
                <div className="flex items-center justify-center w-full mt-4">
                  <LinkPreview
                    url={project.url}
                    width={300}
                    height={200}
                    alt="linear demo image"
                    className="mx-auto h-[200px]"
                  />
                </div>
              </div>
            )}
          </WobbleCard>
        ))}
      </div>
    </section>
  );
}

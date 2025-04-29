import { motion } from "framer-motion";
import { useState, useRef } from "react";
import { FlipWords } from "../../ui/FlipWords";

const words = ["pasión", "refugio", "amor", "dedicación", "curiosidad"];
const projects = [
  {
    title1: "Jomor",
    title2: "Design",
    src: "jomor_design.jpeg",

    link: "https://jomor.design",
  },
  {
    title1: "La",
    title2: "Grange",
    src: "la_grange.jpeg",
    link: "https://lagrange.com",
  },
  {
    title1: "Deux Huit",
    title2: "Huit",
    src: "deux_huit_huit.jpeg",
    link: "https://deuxhuithuit.com",
  },
  {
    title1: "Nothing",
    title2: "Design Studio",
    src: "nothing_design_studio.png",
    link: "https://nothing.design",
  },
  {
    title1: "Mambo",
    title2: "Mambo",
    src: "mambo_mambo.jpeg",
    link: "https://mambomambo.com",
  },
];

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
  return (
    <section
      className="w-full overflow-hidden py-24 relative"
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setShowCursor(true)}
      onMouseLeave={() => setShowCursor(false)}
    >
      <h3 className="text-3xl md:text-5xl text-center font-medium leading-3 md:leading-10 pb-20 dark:text-[#ece7dd] text-slate-900">
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
        }}
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
        style={{ translateX: "0", translateY: "0" }}
      >
        <div className="bg-black dark:bg-white text-white dark:text-black w-24 h-24 rounded-full flex items-center justify-center font-semibold text-sm uppercase cursor-pointer">
          Visitar
        </div>
      </motion.div>

      <div ref={containerRef}>
        {projects.map((project, i) => {
          const { title1, title2, src } = project;

          return (
            <div
              key={i}
              onMouseEnter={() => setActiveIndex(i)}
              onMouseLeave={() => setActiveIndex(null)}
              className={`w-full flex justify-center items-center cursor-pointer 
                          border-t border-slate-950 py-[0.8vw]
                          ${i === projects.length - 1 ? "border-b-2" : ""}`}
            >
              <p className="text-[4vw] mr-[0.75vw] m-0">{title1}</p>

              <motion.div
                variants={anim}
                animate={activeIndex === i ? "open" : "closed"}
                className="overflow-hidden flex justify-center w-0"
              >
                <img
                  src={`/medias/${src}`}
                  alt={`${title1} ${title2}`}
                  className="w-[10vw]"
                />
              </motion.div>

              <p className="text-[4vw] ml-[0.75vw] m-0">{title2}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
}

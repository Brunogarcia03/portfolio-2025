import { motion } from "framer-motion";
import { useState, useRef } from "react";
import { FlipWords } from "../../ui/FlipWords";
import LinkPreview from "../../ui/LinkPreview";

const words = ["pasión", "refugio", "amor", "dedicación", "curiosidad"];

// Colores aleatorios para el cursor
const cursorColors = [
  "bg-[#f87171]",
  "bg-[#34d399]",
  "bg-[#60a5fa]",
  "bg-[#fbbf24]",
  "bg-[#c084fc]",
  "bg-[#f472b6]",
  "bg-[#4ade80]",
  "bg-[#38bdf8]",
  "bg-[#a78bfa]",
];

// projectsList simulado (reemplazá esto con el real)
const projectsList = [
  {
    dictionary: { title1: "Stoic", title2: "Project" },
    url: "https://estoicismo-web.vercel.app/",
  },
  {
    dictionary: { title1: "Viandas", title2: "Kaizen" },
    url: "https://viandas-kaizen-a13p.vercel.app/",
  },
  {
    dictionary: { title1: "Buscador", title2: "Regiones" },
    url: "https://www.buscadorderegionessanitarias.com.ar/",
  },
  {
    dictionary: { title1: "Sidefolio", title2: "Logo" },
    url: "https://sidefolio-logo.vercel.app/",
  },
  {
    dictionary: { title1: "Academia", title2: "Elektron" },
    url: "https://nodo-academy.vercel.app/",
  },
  {
    dictionary: { title1: "Starter", title2: "Template" },
    url: "https://starter-template-topaz.vercel.app/",
  },
  {
    dictionary: { title1: "Progressus", title2: "Web" },
    url: "https://progressus-web.vercel.app/",
  },
  {
    dictionary: { title1: "Framer", title2: "Motion" },
    url: "https://framer-motion-animations-nine.vercel.app/",
  },
  {
    dictionary: { title1: "Tiny", title2: "Trees" },
    url: "https://tiny-trees.vercel.app/",
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
          scale: showCursor ? 1 : 0,
        }}
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
        style={{ translateX: "-50%", translateY: "-50%" }}
      >
        <div
          onClick={handleClick}
          className={`w-24 h-24 rounded-full flex items-center justify-center font-semibold text-sm uppercase text-white cursor-pointer ${
            cursorColors[activeIndex ?? 0]
          }`}
        >
          Visitar
        </div>
      </motion.div>

      <div
        ref={containerRef}
        onMouseEnter={() => setShowCursor(true)}
        onMouseLeave={() => setShowCursor(false)}
      >
        {projectsList.map((project, i) => {
          return (
            <div
              key={i}
              href={project.url}
              onMouseEnter={() => setActiveIndex(i)}
              onMouseLeave={() => setActiveIndex(null)}
              className={`w-full flex justify-center items-center cursor-pointer 
                          border-t border-slate-950 py-[0.8vw]
                          ${i === projectsList.length - 1 ? "border-b-2" : ""}`}
            >
              <p className="text-[4vw] mr-[0.75vw] m-0">
                {project.dictionary.title1}
              </p>

              <motion.div
                variants={anim}
                animate={activeIndex === i ? "open" : "closed"}
                className="overflow-hidden flex justify-center w-0"
              >
                <LinkPreview url={project.url} width={150} height={75} />
              </motion.div>

              <p className="text-[4vw] ml-[0.75vw] m-0">
                {project.dictionary.title2}
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
}

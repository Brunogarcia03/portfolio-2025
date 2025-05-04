import { AnimatePresence, motion, useScroll } from "framer-motion";
import { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import PolaroidCard from "../components/ui/PolaroidCard";

import Intro from "../components/Intro";
import Projects from "../pages/sections/Projects";
import Skills from "./sections/Skills";
import Footer from "../components/Footer";

const photoCards = [
  {
    layoutId: "photo-1",
    url: "/photos/miniYo.jpg",
    label: "Mini yo",
    className: "hidden lg:block w-[240px] absolute -right-48 -top-20 rotate-6",
  },
  {
    layoutId: "photo-2",
    url: "/photos/Tango_Tina.jpg",
    label: "Mi amores",
    className:
      "hidden lg:block w-[240px] absolute -left-52 -bottom-24 -rotate-6",
  },
];

const Work = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [techSelected, setTechSelected] = useState("");

  const navigate = useNavigate();

  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsLoading(false);
      document.body.style.cursor = "default";
      window.scrollTo(0, 0);
    }, 2000);

    return () => clearTimeout(timeout);
  }, []);

  return (
    <>
      <AnimatePresence mode="wait">
        {isLoading ? (
          <Intro key="intro" />
        ) : (
          <main
            key="work"
            className="w-full h-full flex flex-col items-center overflow-hidden"
          >
            <section
              ref={sectionRef}
              className="max-w-8xl h-[calc(100vh-117,6px)] flex flex-col items-center py-24"
            >
              <div className="flex items-center justify-center relative mb-16">
                <motion.h1
                  layoutId="bruno"
                  className="text-5xl sm:text-6xl lg:text-8xl text-center font-jetbrainsmono font-semibold z-10 px-[2vh]"
                  initial={{ opacity: 0, y: -20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.75, ease: "easeInOut" }}
                >
                  Hola! Soy{" "}
                  <span className="font-zentokyo font-thin">Bruno</span>
                  <br />
                  Programador Web.
                </motion.h1>

                {photoCards.map(({ layoutId, url, label, className }) => (
                  <motion.div
                    key={layoutId}
                    layoutId={layoutId}
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.75, ease: "easeInOut" }}
                    className={className}
                  >
                    <PolaroidCard
                      scrollYProgress={scrollYProgress}
                      url={url}
                      label={label}
                    />
                  </motion.div>
                ))}
              </div>

              <p className="max-w-3xl text-center px-3 md:p-0 text-lg sm:text-2xl lg:text-3xl z-0 font-inter leading-6 md:leading-8 mr-1 text-slate-800 dark:text-slate-200">
                {"Me apasiona la programación y el desarrollo web, comprometido con la creación de soluciones tecnológicas innovadoras y eficientes."
                  .split(" ")
                  .map((word, index) => {
                    return (
                      <motion.span
                        initial={{ opacity: 0, filter: "blur(4px)", y: 10 }}
                        whileInView={{ opacity: 1, filter: "blur(0px)", y: 0 }}
                        viewport={{ once: true }}
                        transition={{
                          duration: 0.3,
                          delay: index * 0.1,
                          ease: "easeInOut",
                        }}
                        className="inline-block mr-2"
                        key={index}
                      >
                        {word}
                      </motion.span>
                    );
                  })}
              </p>
              <motion.button
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{
                  delay: 0.3,
                  duration: 0.75,
                  ease: "easeInOut",
                }}
                onClick={() => navigate("/sobre-mi")}
                className="text-slate-950 text-lg rounded-2xl bg-gradient-to-b from-white to-gray-100 dark:from-gray-200 dark:to-gray-200 border border-slate-900 dark:border-slate-50  text-theme-4 hover:bg-theme-accent font-semibold px-24 py-3 mt-8 delay-0 hover:px-28 active:brightness-80 hover:tracking-widest transition-all duration-500 hover:shadow-2xl shadow-black"
              >
                ¡Visita mi CV!
              </motion.button>
            </section>
            <Skills
              techSelected={techSelected}
              setTechSelected={setTechSelected}
            />
            <Projects
              techSelected={techSelected}
              setTechSelected={setTechSelected}
            />
            <Footer />
          </main>
        )}
      </AnimatePresence>
    </>
  );
};

export default Work;

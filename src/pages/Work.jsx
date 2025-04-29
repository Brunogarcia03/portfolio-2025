import { AnimatePresence, motion, useScroll } from "framer-motion";
import { useState, useEffect, useRef } from "react";
import PolaroidCard from "../ui/PolaroidCard";

import Intro from "../components/Intro";
import Projects from "../pages/sections/Projects";

const Work = () => {
  const [isLoading, setIsLoading] = useState(true);
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
          <motion.main
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
                  className="text-8xl text-center font-jetbrainsmono font-semibold z-10"
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.75, ease: "easeInOut" }}
                >
                  Hola! Soy{" "}
                  <motion.span className="font-zentokyo font-thin">
                    Bruno
                  </motion.span>
                  <br />
                  Programador Web.
                </motion.h1>

                <motion.div
                  layoutId="photo-1"
                  initial={{ scale: 1, y: 0 }}
                  animate={{ y: [-15, 15] }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    repeatType: "mirror",
                    ease: "easeInOut",
                  }}
                  className="w-[240px] absolute -right-48 -top-20 rotate-6"
                >
                  <PolaroidCard
                    scrollYProgress={scrollYProgress}
                    url="https://d8nrpaglj2m0a.cloudfront.net/9d437da6-ac13-4a2a-a587-61bb0f5ee8d8/images/twins2.jpg"
                    label="Hola"
                  />
                </motion.div>

                <motion.div
                  layoutId="photo-2"
                  initial={{ scale: 1, y: 0 }}
                  animate={{ y: [15, -15] }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    repeatType: "mirror",
                    ease: "easeInOut",
                  }}
                  className="w-[240px] absolute -left-52 -bottom-24 -rotate-6"
                >
                  <PolaroidCard
                    scrollYProgress={scrollYProgress}
                    url="https://d8nrpaglj2m0a.cloudfront.net/9d437da6-ac13-4a2a-a587-61bb0f5ee8d8/images/github-universe.jpg"
                    label="Hola"
                  />
                </motion.div>
              </div>

              <p className="max-w-3xl text-center px-3 md:p-0 text-xl md:text-3xl z-0 font-inter mr-1">
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
              <button
                onClick={() => alert("Euu Bataaaa eu")}
                className="text-slate-950 text-lg rounded-2xl bg-gradient-to-b from-white to-gray-100 dark:from-gray-200 dark:to-gray-200 text-theme-4 hover:bg-theme-accent font-semibold px-24 py-3 mt-8 delay-0 hover:px-28 active:brightness-80 hover:tracking-widest transition-all duration-500 hover:shadow-2xl shadow-black"
              >
                ¡Frase importante!
              </button>
            </section>
            <Projects />
          </motion.main>
        )}
      </AnimatePresence>
    </>
  );
};

export default Work;

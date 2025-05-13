import { motion } from "motion/react";
import { useState } from "react";

import Projects from "../pages/sections/Projects";
import Skills from "./sections/Skills";
import Footer from "../components/Footer";
import Title from "../components/Title";

const Work = () => {
  const [techSelected, setTechSelected] = useState("");

  return (
    <>
      <main
        key="work"
        className="w-full h-full flex flex-col items-center overflow-hidden"
      >
        <section className="max-w-8xl h-[calc(100vh-117,6px)] flex flex-col items-center py-24">
          <Title />
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
                      delay: 0.75 + index * 0.1,
                      ease: "easeInOut",
                    }}
                    className="inline-block mr-2"
                    key={index}
                  >
                    {word}
                  </motion.span>
                );
              })}
          </p>{" "}
          <a
            href="https://www.canva.com/design/DAFbJcYWOvU/RJbDj3-kw0e7yKH8G5js8A/view?utm_content=DAFbJcYWOvU&utm_campaign=designshare&utm_medium=link&utm_source=editor#2"
            target="_blank"
          >
            <motion.button
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{
                delay: 0.75,
                duration: 0.75,
                ease: "easeInOut",
              }}
              className="text-slate-950 text-lg rounded-2xl bg-gradient-to-b from-white to-gray-100 dark:from-gray-200 dark:to-gray-200 border border-slate-900 dark:border-slate-50  text-theme-4 hover:bg-theme-accent font-semibold px-24 py-3 mt-8 delay-0 hover:px-28 active:brightness-80 hover:tracking-widest transition-all duration-500 hover:shadow-2xl shadow-black"
            >
              ¡Visita mi CV!
            </motion.button>
          </a>
        </section>
        <Skills techSelected={techSelected} setTechSelected={setTechSelected} />
        <Projects
          techSelected={techSelected}
          setTechSelected={setTechSelected}
        />
        <Footer />
      </main>
    </>
  );
};

export default Work;

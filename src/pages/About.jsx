import { motion } from "motion/react";

import Compare from "../components/ui/compare";
import Timeline from "./sections/Timeline";
import Footer from "../components/Footer";

const About = () => {
  return (
    <>
      <section className="max-w-5xl mx-auto pb-24 pt-8 h-[calc(100vh-117,6px)]">
        <motion.h1
          className="text-4xl sm:text-5xl lg:text-7xl text-center font-jetbrainsmono font-semibold z-10 px-[2vh] mb-8 xl:mb-12"
          initial={{ y: -15, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{
            delay: 0.75,
            type: "spring",
            damping: 10,
            bounce: 0.2,
            duration: 0.6,
          }}
        >
          Hola. Soy <span className="font-zentokyo font-thin">Bruno</span>
        </motion.h1>
        <div className="flex flex-col lg:flex-row items-center justify-center gap-8">
          <div className="lg:w-1/2">
            <motion.div
              initial={{ y: -15, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{
                delay: 0.75,
                type: "spring",
                damping: 10,
                bounce: 0.2,
                duration: 0.6,
              }}
              className="w-full lg:max-w-sm mx-auto border border-slate-900 px-5 pt-5 rounded-t-3xl rounded-b-3xl dark:border-slate-50 bg-slate-900/60"
            >
              <Compare
                firstImage={"/photos/yo.jpg"}
                secondImage={"/photos/miniYo.jpg"}
                firstImageClassName="object-cover object-left-top rounded-t-2xl w-full"
                secondImageClassname="object-cover object-left-top rounded-t-2xl w-full"
                className="h-[375px] w-full"
                slideMode="hover"
                initialSliderPercentage={90}
              />
              <a
                href="https://music.youtube.com/watch?v=yxF0rrK7ZeQ&list=OLAK5uy_kGFNmapKWYAOY4sRIUIiiCIRUx4gJX2H8"
                target="_blank"
                className="flex items-center justify-center gap-3 font-inter text-sm mb-5 py-3 w-full rounded-b-2xl bg-slate-100 dark:bg-slate-900"
              >
                <img
                  src="/svgs/youtube_music.svg"
                  alt="Logo Youtube Music"
                  className="w-8 md:w-10 h-8 md:h-10"
                />
                <p className="">Plegarias para un niño dormido</p>
              </a>
            </motion.div>
          </div>

          <div className="max-w-2xl lg:max-w-lg mx-auto font-jetbrainsmono lg:w-1/2">
            <h2 className="text-center lg:text-left text-balance text-xl lg:text-2xl font-semibold tracking-[-0.005em]">
              {"Soy un programador apasionado e instructor de programación de Alberti, Buenos Aires, Argentina."
                .split(" ")
                .map((word, i) => (
                  <motion.span
                    initial={{ opacity: 0, filter: "blur(4px)", y: 10 }}
                    animate={{ opacity: 1, filter: "blur(0px)", y: 0 }}
                    transition={{
                      delay: 0.75 + i * 0.05, // empieza primero
                      ease: "easeInOut",
                    }}
                    className="inline-block mr-1"
                    key={`title-${i}`}
                  >
                    {word}
                  </motion.span>
                ))}
            </h2>
            {[
              "Comencé en el mundo de la programación cuando tenía 13 años, y desde entonces encontré en la programación un refugio y una fuente inagotable de creatividad y satisfacción. He dedicado los últimos 5 años a formarme intensivamente en diversas tecnologías y metodologías de desarrollo.",
              "Además de mi desarrollo profesional, también soy profesor de programación, enseñando a niños, adolescentes y adultos en mi ciudad natal. Creo firmemente en el poder transformador de la educación y disfruto compartiendo mi conocimiento y ayudando a otros a descubrir las maravillas del mundo de la programación.",
            ].map((text, index) => {
              const baseDelay = 1.75 + index * 2.2;
              return (
                <p
                  key={index}
                  className="mt-4 text-center lg:text-left text-base/6 text-slate-800 dark:text-slate-200 px-[5vh] md:px-0"
                >
                  {text.split(" ").map((word, i) => (
                    <motion.span
                      initial={{ opacity: 0, filter: "blur(4px)", y: 10 }}
                      animate={{ opacity: 1, filter: "blur(0px)", y: 0 }}
                      transition={{
                        duration: 0.3,
                        delay: baseDelay + i * 0.05,
                        ease: "easeInOut",
                      }}
                      className="inline-block mr-1"
                      key={`p${index}-word${i}`}
                    >
                      {word}
                    </motion.span>
                  ))}
                </p>
              );
            })}
          </div>
        </div>
      </section>
      <Timeline />
      <section className="max-w-5xl mx-auto px-6 pb-24">
        <h3 className="max-w-3xl mx-auto text-3xl md:text-5xl text-center font-medium leading-3 md:leading-10 pb-24 transition-all duration-300">
          Mis principios como{" "}
          <span className="text-3xl md:text-5xl font-bold italic text-neutral-900 dark:text-neutral-100">
            programador web
          </span>
          .
        </h3>

        <div className="grid gap-12 md:grid-cols-2">
          {[
            {
              title: "Construir en el navegador",
              description:
                "Diseñar y escribir código van de la mano. Prefiero prototipar directamente en el navegador para obtener resultados reales y tangibles rápidamente.",
            },
            {
              title: "Colaborar siempre",
              description:
                "El código no vive solo. Me gusta trabajar en equipo, compartir ideas y recibir feedback constante para mejorar el producto final.",
            },
            {
              title: "Accesibilidad primero",
              description:
                "Diseñar y desarrollar pensando en todos. Lo accesible no es opcional: es parte de crear experiencias inclusivas y respetuosas.",
            },
            {
              title: "Iterar, probar, aprender",
              description:
                "El código está vivo. Me gusta experimentar, probar cosas nuevas y aprender de cada error o acierto. Cada proyecto es una oportunidad.",
            },
          ].map((item, index) => (
            <div
              key={index}
              className="group relative p-6 border-l-4 border-emerald-500 dark:border-sky-500 bg-slate-50 dark:bg-slate-900 rounded-lg shadow-md transition-transform hover:scale-[1.01]"
            >
              <div className="absolute -left-6 top-6 text-4xl font-bold text-emerald-500 dark:text-sky-400 opacity-30 group-hover:opacity-60 transition-opacity">
                {`0${index + 1}`}
              </div>
              <h3 className="text-xl font-semibold text-slate-900 dark:text-[#ece7dd] mb-3 font-jetbrainsmono">
                {item.title}
              </h3>
              <p className="text-slate-700 dark:text-slate-300 text-sm leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </>
  );
};

export default About;

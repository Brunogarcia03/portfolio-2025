import { motion } from "framer-motion";

import Compare from "../components/ui/compare";
import Timeline from "./sections/Timeline";
import Footer from "../components/Footer";

const About = () => {
  return (
    <>
      <section className="max-w-5xl mx-auto pb-24 pt-8 h-[calc(100vh-117,6px)]">
        <motion.h1
          className="text-4xl sm:text-5xl lg:text-7xl text-center font-jetbrainsmono font-semibold z-10 px-[2vh] mb-16"
          initial={{ y: -15 }}
          animate={{ y: 0 }}
          transition={{
            type: "spring",
            damping: 10,
            bounce: 0.2,
            duration: 0.6,
          }}
        >
          Hola. Soy <span className="font-zentokyo font-thin">Bruno</span>
        </motion.h1>
        <div className="flex flex-col lg:flex-row items-center justify-center gap-10">
          <div className="w-1/2">
            <div className="max-w-sm mx-auto border border-slate-900 px-5 pt-5 rounded-t-3xl rounded-b-3xl dark:border-slate-50 bg-slate-900/60">
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
            </div>
          </div>

          <div className="max-w-2xl lg:max-w-lg mx-auto font-jetbrainsmono w-1/2">
            <h2 className="text-center lg:text-left text-balance text-2xl lg:text-3xl font-semibold tracking-[-0.015em] text-slate-900 dark:text-[#ece7dd]">
              {"Soy un programador apasionado y un instructor de programación de Alberti, Buenos Aires, Argentina."
                .split(" ")
                .map((word, i) => (
                  <motion.span
                    initial={{ opacity: 0, filter: "blur(4px)", y: 10 }}
                    animate={{ opacity: 1, filter: "blur(0px)", y: 0 }}
                    transition={{
                      duration: 0.3,
                      delay: i * 0.1,
                      ease: "easeInOut",
                    }}
                    className="inline-block mr-1"
                    key={i}
                  >
                    {word}
                  </motion.span>
                ))}
            </h2>
            {[
              "Comencé en el mundo de la programación cuando tenía 13 años, y desde entonces encontré en la programación un refugio y una fuente inagotable de creatividad y satisfacción. He dedicado los últimos 5 años a formarme intensivamente en diversas tecnologías y metodologías de desarrollo.",
              "Además de mi desarrollo profesional, también soy profesor de programación, enseñando a niños, adolescentes y adultos en mi ciudad natal. Creo firmemente en el poder transformador de la educación y disfruto compartiendo mi conocimiento y ayudando a otros a descubrir las maravillas del mundo de la programación.",
            ].map((text, index) => (
              <p
                key={index}
                className="mt-4 text-center lg:text-left text-base/6 text-slate-900 dark:text-[#ece7dd]"
              >
                {text.split(" ").map((word, i) => (
                  <motion.span
                    initial={{ opacity: 0, filter: "blur(4px)", y: 10 }}
                    animate={{ opacity: 1, filter: "blur(0px)", y: 0 }}
                    transition={{
                      duration: 0.3,
                      delay: i * 0.1,
                      ease: "easeInOut",
                    }}
                    className="inline-block mr-1"
                    key={i}
                  >
                    {word}
                  </motion.span>
                ))}
              </p>
            ))}
          </div>
        </div>
      </section>
      <Timeline />
      <Footer />
    </>
  );
};

export default About;

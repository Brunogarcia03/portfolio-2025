import { useState } from "react";
import { motion } from "motion/react";

import { AnimatedTooltip } from "../../components/ui/animated-tooltip";
import { FlipWords } from "../../components/ui/FlipWords";
import { iconsList, otherIcons } from "../../constants/projectsArray";

function Skills({ techSelected, setTechSelected }) {
  const [others, setOthers] = useState(false);

  return (
    <section
      className="w-full overflow-hidden p-24 pb-5 relative"
      onDoubleClick={() => setTechSelected("")}
    >
      {others ? (
        <>
          <h3
            className="text-3xl md:text-5xl text-center font-medium leading-3 md:leading-10 pb-24 transition-all duration-300"
            onClick={() => setTechSelected("")}
          >
            Otras Tecnologías
          </h3>

          <AnimatedTooltip
            items={otherIcons}
            techSelected={techSelected}
            setTechSelected={setTechSelected}
          />
        </>
      ) : (
        <>
          <h3
            className="text-3xl md:text-5xl text-center font-medium leading-3 md:leading-10 pb-24 transition-all duration-300"
            onClick={() => setTechSelected("")}
          >
            Explorando las{" "}
            <FlipWords
              className="text-3xl md:text-5xl font-bold italic"
              words={["habilidades", "herramientas", "tecnologías"]}
              duration={4}
            />
            <br />
            que he dominado en este viaje.
          </h3>

          <AnimatedTooltip
            items={iconsList}
            techSelected={techSelected}
            setTechSelected={setTechSelected}
          />
        </>
      )}
      <div className="w-full mt-8 flex items-center justify-center">
        <motion.button
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{
            delay: 0.75,
            duration: 0.75,
            ease: "easeInOut",
          }}
          onClick={() => (others ? setOthers(false) : setOthers(true))}
          className="text-slate-950 text-lg rounded-2xl bg-gradient-to-b from-white to-gray-100 dark:from-gray-200 dark:to-gray-200 border border-slate-900 dark:border-slate-50  text-theme-4 hover:bg-theme-accent font-semibold px-24 py-3 mt-8 delay-0 hover:px-28 active:brightness-80 hover:tracking-widest transition-all duration-500 hover:shadow-sm shadow-black"
        >
          {others ? "Habilidades" : "Otras"}
        </motion.button>
      </div>
    </section>
  );
}

export default Skills;

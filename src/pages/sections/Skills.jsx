import { AnimatedTooltip } from "../../components/ui/animated-tooltip";
import { FlipWords } from "../../components/ui/FlipWords";
import { iconsList } from "../../constants/projectsArray";

function Skills({ techSelected, setTechSelected }) {
  return (
    <section
      className="w-full overflow-hidden pt-24 pb-5 relative"
      onDoubleClick={() => setTechSelected("")}
    >
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
    </section>
  );
}

export default Skills;

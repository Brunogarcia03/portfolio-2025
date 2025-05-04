import { FlipWords } from "../../components/ui/FlipWords";
import LinkPreview from "../../components/ui/LinkPreview";
import { WobbleCard } from "../../components/ui/WobbleCard";
import { projectsList } from "../../constants/projectsArray";

const words = ["pasión", "refugio", "amor", "dedicación", "curiosidad"];

export default function Index({ techSelected, setTechSelected }) {
  const filteredProjects = techSelected
    ? projectsList.filter((project) =>
        project.icons.some((icon) => icon.name === techSelected)
      )
    : projectsList;

  return (
    <section className="w-full overflow-hidden py-24 relative z-10 bg-[linear-gradient(90deg,_rgba(236,231,221,1)_0%,_rgba(144,161,185,1)_40%,_rgba(226,232,240,1)_70%)] dark:bg-[linear-gradient(90deg,_rgba(15,23,43,1)_0%,_rgba(69,85,108,1)_40%,_rgba(49,65,88,1)_68%)]">
      <h3
        className="text-3xl md:text-5xl text-center font-medium transition-all duration-300 leading-3 md:leading-10 pb-24 cursor-pointer"
        onClick={() => setTechSelected("")}
      >
        Proyectos nacidos de mí{" "}
        <FlipWords
          className="text-3xl md:text-5xl font-bold italic"
          words={words}
          duration={4}
        />{" "}
        <br />
        por la programación.
      </h3>

      {/* Grid de tarjetas Wobble */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-2xl lg:max-w-7xl px-[5vh] mx-auto w-full">
        {filteredProjects.map((project, i) => (
          <WobbleCard
            key={i}
            containerClassName={`relative col-span-1 h-full flex flex-col justify-between ${
              i === 0 || i === filteredProjects.length - 1
                ? "lg:col-span-2 bg-pink-800 lg:min-h-[300px]"
                : "min-h-[300px]"
            } bg-slate-800 text-white`}
            className={`${project.color}`}
            url={project.url}
          >
            {i === 0 || i === projectsList.length - 1 ? (
              <div className="flex flex-col justify-between h-full lg:max-w-md cursor-pointer">
                <div className="flex-grow">
                  <div className="flex flex-col lg:flex-row gap-5">
                    <h2 className="text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
                      {project.title}
                    </h2>
                    <ul className="flex items-center gap-3">
                      {project.icons.map((icon, i) => (
                        <li
                          key={i}
                          className="border border-slate-900 rounded-lg dark:border-slate-50 dark:bg-slate-60/70 bg-slate-900/60 size-10 p-1 overflow-hidden"
                        >
                          <img
                            src={icon.icon}
                            alt={icon.name}
                            className="rounded-full w-full h-full"
                          />
                        </li>
                      ))}
                    </ul>
                  </div>

                  <p className="mt-4 text-left text-base/6 text-slate-200">
                    {project.description}
                  </p>
                </div>

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
              <div className="flex flex-col justify-between h-full cursor-pointer">
                <div className="flex-grow">
                  <h2 className="max-w-80 text-left font-jetbrainsmono text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
                    {project.title}
                  </h2>
                  <ul className="flex items-center gap-3 mt-3">
                    {project.icons.map((icon, i) => (
                      <li
                        key={i}
                        className="border border-slate-900 rounded-lg dark:border-slate-50 dark:bg-slate-60/70 bg-slate-900/60 size-10 p-1 overflow-hidden"
                      >
                        <img
                          src={icon.icon}
                          alt={icon.name}
                          className="rounded-full w-full h-full"
                        />
                      </li>
                    ))}
                  </ul>

                  <p className="mt-4 font-inter max-w-[26rem] text-left text-base/6 text-slate-200">
                    {project.description}
                  </p>
                </div>

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
            )}
          </WobbleCard>
        ))}
      </div>
    </section>
  );
}

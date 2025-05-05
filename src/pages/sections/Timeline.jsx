import { motion } from "framer-motion";

const TimelineItems = ({
  title = "The ritual",
  date = "May, 2020 - July, 2024",
  subTitle = "Acme was founded in Milan, Italy",
  description = "Pretium lectus quam id leo. Urna et pharetra pharetra massa massa. Adipiscing enim eu neque aliquam vestibulum morbi blandit cursus risus.",
}) => {
  return (
    <motion.li
      initial={{ x: 15 }}
      whileInView={{ x: 0 }}
      transition={{
        type: "spring",
        bounce: 0.2,
        duration: 1,
      }}
      viewport={{ once: true }}
      className="relative pl-8 sm:pl-32 py-6 group"
    >
      <div className="font-jetbrainsmono font-medium text-2xl text-sky-600 dark:text-emerald-500 mb-1 sm:mb-0 italic transition-all duration-300 group-hover:translate-x-1">
        {title}
      </div>
      <div className="flex flex-col lg:flex-row items-start mb-1 group-last:before:hidden before:absolute before:left-2 sm:before:left-0 before:h-full before:px-px before:bg-slate-300 sm:before:ml-[6.5rem] before:self-start before:origin-top before:-translate-x-1/2 before:translate-y-3 after:absolute after:left-2 sm:after:left-0 after:w-2 after:h-2 after:bg-emerald-500 after:border-4 after:box-content after:border-slate-50 after:rounded-full sm:after:ml-[6.5rem] after:-translate-x-1/2 after:translate-y-1.5">
        <time className="lg:absolute -left-8 p-2 translate-y-0.5 inline-flex items-center justify-center text-xs font-semibold uppercase h-6 mb-3 lg:mb-0 text-sky-500 rounded-full transition-all duration-300 group-hover:scale-105 border border-slate-900 dark:border-slate-50 dark:bg-slate-60/70 bg-slate-900/60">
          {date}
        </time>
        <div className="text-xl font-bold transition-all duration-300 group-hover:translate-x-1">
          {subTitle}
        </div>
      </div>

      <div className="font-extralight transition-all duration-300 group-hover:translate-x-1">
        {description}
      </div>
    </motion.li>
  );
};

function Timeline() {
  return (
    <section className="container mx-auto py-24">
      <h3 className="max-w-3xl mx-auto text-3xl md:text-5xl text-center font-medium leading-3 md:leading-10 pb-24 transition-all duration-300">
        Paso a paso, marcando el ritmo de mi{" "}
        <span className="text-3xl md:text-5xl font-bold italic text-neutral-900 dark:text-neutral-100">
          evolución
        </span>
        .
      </h3>
      <div className="w-full max-w-6xl mx-auto px-4 md:px-6 pb-28">
        <div className="flex flex-col justify-center divide-y divide-slate-200">
          <div className="w-full max-w-3xl mx-auto">
            <ol className="-my-6">
              <TimelineItems
                title={"Primeros pasos en la programación"}
                date={"Año 2017 / 2018"}
                subTitle={"Creación de videojuegos con Pygame, Python"}
                description={
                  "Comencé mi viaje en el mundo de la programación creando videojuegos con Pygame, una librería de Python. A esa edad, aprender a programar no solo me dio una habilidad, sino que abrió la puerta a un mundo donde podía construir cosas desde cero y resolver problemas creativos."
                }
              />
              <TimelineItems
                title={"Exploración en la programación web"}
                date={"Año 2018 - 2020"}
                subTitle={
                  "Creación de cómics web interactivos con HTML, CSS y JavaScript"
                }
                description={
                  "Con curiosidad por el diseño y la interactividad, me sumergí en la programación web. Usando HTML, CSS y JavaScript, experimenté creando 'cómics web', donde cada página cobraba vida con animaciones y elementos interactivos. Esta etapa fue clave para desarrollar mi amor por el diseño y el desarrollo frontend."
                }
              />
              <TimelineItems
                title={"Inicio en el mundo profesional como Freelancer"}
                date={"Año 2021 - ♾️"}
                subTitle={
                  "Proyectos de landing pages y desarrollo de aplicaciones funcionales"
                }
                description={
                  "Comencé mi camino profesional como programador freelancer, inicialmente enfocándome en proyectos de landing pages. A los 19 años, di el salto hacia trabajos más complejos y funcionales, desarrollando aplicaciones personalizadas para diversos clientes. Esta etapa consolidó mis habilidades y me brindó experiencia en el mundo real del desarrollo web."
                }
              />
            </ol>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Timeline;

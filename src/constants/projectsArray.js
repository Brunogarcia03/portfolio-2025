import {
  ReactDark,
  Nextjs,
  MotionDark,
  JavaScript,
  TailwindCSS,
  Strapi,
  TypeScript,
  PrismaDark,
  Python,
  Django,
  HTML5,
  CSS,
} from "@ridemountainpig/svgl-react";

const iconsList = [
  { icon: ReactDark, name: "React" },
  { icon: Nextjs, name: "Next.js" },
  { icon: MotionDark, name: "Motion" },
  { icon: JavaScript, name: "JavaScript" },
  { icon: TailwindCSS, name: "Tailwind CSS" },
  { icon: Strapi, name: "Strapi" },
  { icon: TypeScript, name: "TypeScript" },
  { icon: PrismaDark, name: "Prisma" },
  { icon: Python, name: "Python" },
  { icon: Django, name: "Django" },
  { icon: HTML5, name: "Html" },
  { icon: CSS, name: "Css" },
];

export const projectsList = [
  {
    dictionary: { title1: "Stoic", title2: "Project" },
    url: "https://estoicismo-web.vercel.app/",
    icons: [iconsList[1], iconsList[2], iconsList[3], iconsList[4]],
    description:
      "Una plataforma para aprender los principios del estoicismo con una estética sobria y elegante.",
  },
  {
    dictionary: { title1: "Viandas", title2: "Kaizen" },
    url: "https://viandas-kaizen-a13p.vercel.app/",
    icons: [iconsList[1], iconsList[3], iconsList[4], iconsList[5]],
    description:
      "Sistema para gestión de pedidos y administración de menú semanal para un emprendimiento de viandas.",
  },
  {
    dictionary: { title1: "Buscador", title2: "Regiones" },
    url: "https://www.buscadorderegionessanitarias.com.ar/",
    icons: [iconsList[1], iconsList[6], iconsList[7]],
    description:
      "Herramienta geográfica interactiva que permite buscar regiones sanitarias por ubicación.",
  },
  {
    dictionary: { title1: "Sidefolio", title2: "Logo" },
    url: "https://sidefolio-logo.vercel.app/",
    icons: [iconsList[1], iconsList[2], iconsList[3], iconsList[4]],
    description:
      "Generador visual de logotipos para portfolios con opciones de exportación rápida.",
  },
  {
    dictionary: { title1: "Academia", title2: "Elektron" },
    url: "https://nodo-academy.vercel.app/",
    icons: [iconsList[1], iconsList[6], iconsList[4], iconsList[7]],
    description:
      "Landing institucional para una academia de tecnología con estética moderna y responsiva.",
  },
  {
    dictionary: { title1: "Starter", title2: "Template" },
    url: "https://starter-template-topaz.vercel.app/",
    icons: [iconsList[1], iconsList[2], iconsList[6], iconsList[4]],
    description:
      "Boilerplate personal para lanzar proyectos rápidamente, con configuración pre-hecha.",
  },
  {
    dictionary: { title1: "Progressus", title2: "Web" },
    url: "https://progressus-web.vercel.app/",
    icons: [iconsList[1], iconsList[6], iconsList[4]],
    description:
      "Una dashboard minimalista para visualizar progreso y métricas personales o de proyectos.",
  },
  {
    dictionary: { title1: "Framer", title2: "Motion" },
    url: "https://framer-motion-animations-nine.vercel.app/",
    icons: [iconsList[0], iconsList[3], iconsList[4], iconsList[2]],
    description:
      "Ejemplos interactivos de animaciones con Framer Motion, enfocados en microinteracciones.",
  },
  {
    dictionary: { title1: "Tiny", title2: "Trees" },
    url: "https://tiny-trees.vercel.app/",
    icons: [iconsList[1], iconsList[2], iconsList[3], iconsList[4]],
    description:
      "Visualizador creativo de árboles generativos con interacciones suaves y diseño experimental.",
  },
];

export const cursorColors = [
  "bg-[#3d3d3d]", // Estoicismo Web
  "bg-[#9abc11]", // Viandas Kaizen
  "bg-[#061927]", // Buscador de Regiones Sanitarias
  "bg-[#ffd43d]", // Sidefolio Logo
  "bg-[#333333]", // Academia Elektron
  "bg-[#0a0a0a]", // Starter Template
  "bg-[#131fe6]", // Progressus
  "bg-[#6d5396]", // Framer Animations
  "bg-green-800", // Tiny Trees
];

export const projectEmojis = [
  "📜", // Estoicismo Web - filosofía, manuscritos
  "🥗", // Viandas Kaizen - comida saludable
  "🏥", // Buscador de Regiones Sanitarias - mapa, búsqueda geográfica
  "🎨", // Sidefolio Logo - diseño gráfico, creatividad
  "🏫", // Academia Elektron - educación, academia
  "🚀", // Starter Template - inicio rápido, lanzamiento
  "📊", // Progressus - métricas, dashboards
  "✨", // Framer Animations - animaciones, efectos
  "🌳", // Tiny Trees - naturaleza, árboles generativos
];

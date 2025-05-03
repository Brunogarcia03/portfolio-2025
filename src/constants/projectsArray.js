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

export const iconsList = [
  {
    icon: ReactDark,
    name: "React",
    description:
      "React - La biblioteca que convierte funciones en magia visual.",
  },
  {
    icon: Nextjs,
    name: "Next.js",
    description: "Next.js - El framework que siempre llega primero.",
  },
  {
    icon: MotionDark,
    name: "Motion",
    description: "Framer Motion - incluso tus divs merecen moverse.",
  },
  {
    icon: JavaScript,
    name: "JavaScript",
    description: "JavaScript - Lo amas, lo odias, y no puedes vivir sin él.",
  },
  {
    icon: TailwindCSS,
    name: "Tailwind CSS",
    description:
      "Tailwind - Escribir CSS sin escribir CSS (y sin perder la cabeza).",
  },
  {
    icon: Strapi,
    name: "Strapi",
    description: "Strapi - El CMS que no te grita, ¡te susurra en API!",
  },
  {
    icon: TypeScript,
    name: "TypeScript",
    description: "TypeScript - JavaScript con armadura (y advertencias).",
  },
  {
    icon: PrismaDark,
    name: "Prisma",
    description: "Prisma - ORM elegante para bases de datos desordenadas.",
  },
  {
    icon: Python,
    name: "Python",
    description: "Python - Legible, amigable y más inteligente que la mayoría.",
  },
  {
    icon: Django,
    name: "Django",
    description: "Django - El framework que hace que Python se vista de gala.",
  },
  {
    icon: HTML5,
    name: "Html",
    description:
      "HTML - La estructura de las páginas web, ¿es un lenguaje de programación?",
  },
  {
    icon: CSS,
    name: "Css",
    description:
      "CSS - Estiliza tus páginas, tal vez puedas hacerlo con tu vida.",
  },
];

export const projectsList = [
  {
    title: "Stoic Project",
    url: "https://estoicismo-web.vercel.app/",
    icons: [iconsList[1], iconsList[2], iconsList[3], iconsList[4]],
    description:
      "Una plataforma para aprender los principios del estoicismo con una estética sobria y elegante.",
  },
  {
    title: "Viandas Kaizen",
    url: "https://viandas-kaizen-a13p.vercel.app/",
    icons: [iconsList[1], iconsList[3], iconsList[4], iconsList[5]],
    description:
      "Sistema para gestión de pedidos y administración de menú semanal para un emprendimiento de viandas.",
  },
  {
    title: "Buscador Regiones",
    url: "https://www.buscadorderegionessanitarias.com.ar/",
    icons: [iconsList[1], iconsList[6], iconsList[7]],
    description:
      "Herramienta geográfica interactiva que permite buscar regiones sanitarias por ubicación.",
  },
  {
    title: "Sidefolio Logo",
    url: "https://sidefolio-logo.vercel.app/",
    icons: [iconsList[1], iconsList[2], iconsList[3], iconsList[4]],
    description:
      "Generador visual de logotipos para portfolios con opciones de exportación rápida.",
  },
  {
    title: "Academia Elektron",
    url: "https://nodo-academy.vercel.app/",
    icons: [iconsList[1], iconsList[6], iconsList[4], iconsList[7]],
    description:
      "Landing institucional para una academia de tecnología con estética moderna y responsiva.",
  },
  {
    title: "Starter Template",
    url: "https://starter-template-topaz.vercel.app/",
    icons: [iconsList[1], iconsList[2], iconsList[6], iconsList[4]],
    description:
      "Boilerplate personal para lanzar proyectos rápidamente, con configuración pre-hecha.",
  },
  {
    title: "Progressus Web",
    url: "https://progressus-web.vercel.app/",
    icons: [iconsList[1], iconsList[6], iconsList[4]],
    description:
      "Una dashboard minimalista para visualizar progreso y métricas personales o de proyectos.",
  },
  {
    title: "Framer Motion",
    url: "https://framer-motion-animations-nine.vercel.app/",
    icons: [iconsList[0], iconsList[3], iconsList[4], iconsList[2]],
    description:
      "Ejemplos interactivos de animaciones con Framer Motion, enfocados en microinteracciones.",
  },
  {
    title: "Tiny Trees",
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

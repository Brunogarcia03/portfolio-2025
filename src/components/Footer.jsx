import { motion } from "motion/react";

import Linkedin from "/svgs/linkedin.svg";
import Youtube from "/svgs/youtube.svg";
import Twitch from "/svgs/twitch.svg";
import Instagram from "/svgs/instagram_dark.svg";
import Github from "/svgs/github_dark.svg";

const links = [
  { icon: Linkedin, url: "www.linkedin.com/in/bruno-garcía" },
  { icon: Youtube, url: "#" },
  { icon: Twitch, url: "#" },
  { icon: Instagram, url: "#" },
  { icon: Github, url: "https://github.com/Brunogarcia03" },
];

export default function Footer() {
  return (
    <footer className="w-full pb-10 group">
      <div className="container mx-auto flex flex-col items-center justify-center gap-5">
        <img
          src="/photos/Leo.webp"
          alt="Mi perro Leo"
          loading="lazy"
          width={100}
          height={100}
          className="rounded-full border border-slate-900 dark:border-slate-50 hover:tracking-widest transition-all duration-500 hover:shadow-2xl shadow-black"
        />
        <ul className="flex items-center gap-5">
          {links.map((icon, i) => (
            <li
              key={i}
              className="border border-slate-900 rounded-lg dark:border-slate-50 dark:bg-slate-60/70 bg-slate-900/60 size-14 p-2 overflow-hidden hover:tracking-widest transition-all duration-500 hover:shadow-2xl shadow-black hover:scale-125"
            >
              <a href={icon.url}>
                <img
                  src={icon.icon}
                  alt={`Logo ${i + 1}`}
                  className="w-full h-full"
                />
              </a>
            </li>
          ))}
        </ul>
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
        <div className="font-bold">
          <span className="font-semibold">{new Date().getFullYear()} </span>
          &#8212; Construido por{" "}
          <a
            className="group-hover:text-sky-500 dark:group-hover:text-emerald-500 ml-1 relative after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-full after:origin-bottom-right after:scale-x-0 after:bg-sky-500 dark:after:bg-emerald-500 after:transition-transform after:duration-300 after:ease-[cubic-bezier(69.6%_0.17_162.48)] group-hover:after:origin-bottom-left group-hover:after:scale-x-100"
            href={"https://brunodev.online/es/"}
          >
            Bruno García
          </a>
        </div>
      </div>
    </footer>
  );
}

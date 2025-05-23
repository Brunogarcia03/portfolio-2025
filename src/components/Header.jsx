import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Switch } from "./Switch";
import { AnimatePresence, motion } from "motion/react";
import { twMerge } from "tailwind-merge";

const navList = [
  {
    title: "Trabajo",
    link: "/",
  },
  {
    title: "Sobre mí",
    link: "/sobre-mi",
  },
  {
    title: "Contacto",
    link: "/contacto",
  },
];

const Header = () => {
  const location = useLocation();

  const [selected, setSelected] = useState(() => {
    switch (location.pathname) {
      case "/":
        return "Trabajo";
      case "/sobre-mi":
        return "Sobre mí";
      case "/contacto":
        return "Contacto";
      default:
        return "";
    }
  });
  const navigate = useNavigate();

  return (
    <header className="relative w-full top-0 py-8">
      <AnimatePresence mode="popLayout" initial={false}>
        <nav className="max-w-md mx-auto flex items-center justify-between text-md sm:text-lg font-jetbrainsmono border border-slate-900 px-5 py-2 rounded-3xl dark:border-slate-50 backdrop-blur-md dark:bg-slate-900/10 bg-slate-50/10">
          {navList.map((nav, index) => (
            <button
              key={index}
              className="relative flex font-extralight px-3 py-1"
              onClick={() => {
                setSelected(nav.title);
                navigate(nav.link);
              }}
            >
              {selected === nav.title && (
                <motion.div
                  layoutId="nav-indicator"
                  className="absolute inset-0 z-0 dark:bg-slate-60/70 bg-slate-900/60 mix-blend-difference"
                  style={{ borderRadius: "9999px" }}
                  transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                />
              )}
              <span className={twMerge("relative z-10")}>{nav.title}</span>
            </button>
          ))}

          <Switch />
        </nav>
      </AnimatePresence>
    </header>
  );
};

export default Header;

import { useScroll, useTransform, motion } from "framer-motion";
import React, { useRef } from "react";

import {
  GitHubDark,
  InstagramDark,
  LinkedIn,
  Facebook,
} from "@ridemountainpig/svgl-react";

export default function Footer() {
  return (
    <footer className="w-full pb-10 z-10">
      <div className="max-w-7xl mx-auto flex flex-col gap-10 items-center text-center">
        {/* Logo Placeholder */}
        <div className="w-16 h-16 rounded-full bg-white text-black font-bold text-xl flex items-center justify-center shadow-lg">
          BG
        </div>

        {/* Social Links */}
        <div className="flex gap-6 flex-wrap justify-center">
          <a
            href="https://github.com/Brunogarcia03"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:scale-110 transition-transform"
          >
            <GitHubDark className="w-8 h-8" />
          </a>
          <a
            href="https://www.canva.com/design/DAFbJcYWOvU/RJbDj3-kw0e7yKH8G5js8A/view"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:scale-110 transition-transform flex items-center gap-2"
          >
            <span className="text-sm font-semibold">CV</span>
          </a>
          <a
            href="https://www.linkedin.com/in/bruno-garcía/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:scale-110 transition-transform"
          >
            <LinkedIn className="w-8 h-8" />
          </a>
          <a
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:scale-110 transition-transform"
          >
            <InstagramDark className="w-8 h-8" />
          </a>
        </div>

        {/* Footer Text */}
        <div className="text-sm opacity-80">
          <p>
            <span className="font-semibold text-base">©</span> 2024 Bruno García
            — All rights reserved
          </p>
        </div>
      </div>
    </footer>
  );
}

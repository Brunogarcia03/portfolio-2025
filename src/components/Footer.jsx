import Linkedin from "/svgs/linkedin.svg";
import Youtube from "/svgs/youtube.svg";
import Twitch from "/svgs/twitch.svg";
import Instagram from "/svgs/instagram_dark.svg";
import Github from "/svgs/github_dark.svg";

const links = [
  { icon: Linkedin, url: "" },
  { icon: Youtube, url: "" },
  { icon: Twitch, url: "" },
  { icon: Instagram, url: "" },
  { icon: Github, url: "" },
];

export default function Footer() {
  return (
    <footer className="w-full pb-10">
      <div className="container mx-auto flex flex-col items-center justify-center gap-5">
        <img
          src="/photos/Leo.webp"
          className="h-[100px] rounded-full border border-slate-900 dark:border-slate-50 hover:tracking-widest transition-all duration-500 hover:shadow-2xl shadow-black"
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
        <button
          onClick={() => navigate("/sobre-mi")}
          className="text-slate-950 text-lg rounded-2xl bg-gradient-to-b from-white to-gray-100 dark:from-gray-200 dark:to-gray-200 border border-slate-900 dark:border-slate-50  text-theme-4 hover:bg-theme-accent font-semibold px-24 py-3 delay-0 hover:px-28 active:brightness-80 hover:tracking-widest transition-all duration-500 hover:shadow-2xl shadow-black"
        >
          ¡Visita mi CV!
        </button>
      </div>
    </footer>
  );
}

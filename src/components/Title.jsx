import { motion, useScroll } from "motion/react";
import { useRef } from "react";

import PolaroidCard from "../components/ui/PolaroidCard";

const photoCards = [
  {
    layoutId: "photo-1",
    url: "/photos/miniYo.jpg",
    label: "Mini yo",
    className: "hidden lg:block w-[240px] absolute -right-48 -top-42 rotate-6",
  },
  {
    layoutId: "photo-2",
    url: "/photos/Tango_Tina.jpg",
    label: "Mi amores",
    className: "hidden lg:block w-[240px] absolute -left-52 bottom-5 -rotate-6",
  },
];

const Title = () => {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  return (
    <div
      ref={sectionRef}
      className="flex items-center justify-center relative mb-16"
    >
      <motion.h1
        layoutId="bruno"
        className="text-5xl sm:text-6xl lg:text-8xl text-center font-jetbrainsmono font-semibold z-10 px-[2vh]"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.75, duration: 0.75, ease: "easeInOut" }}
      >
        Hola! Soy <span className="font-zentokyo font-thin">Bruno</span>
        <br />
        Programador Web.
      </motion.h1>

      {photoCards.map(({ layoutId, url, label, className }) => (
        <motion.div
          key={layoutId}
          layoutId={layoutId}
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.75, duration: 0.75, ease: "easeInOut" }}
          className={className}
        >
          <PolaroidCard
            scrollYProgress={scrollYProgress}
            url={url}
            label={label}
          />
        </motion.div>
      ))}
    </div>
  );
};

export default Title;

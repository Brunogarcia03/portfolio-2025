import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useEffect, useRef } from "react";

const PolaroidCard = ({ url, label, rotate, scrollYProgress }) => {
  const cardRef = useRef(null);
  const translateY = useTransform(scrollYProgress, [0, 1], [0, 350]);

  // Motion values
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const rotateX = useTransform(y, [-0.5, 0.5], [15, -15]);
  const rotateY = useTransform(x, [-0.5, 0.5], [-15, 15]);

  const springRotateX = useSpring(rotateX, { stiffness: 200, damping: 20 });
  const springRotateY = useSpring(rotateY, { stiffness: 200, damping: 20 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      const rect = cardRef.current.getBoundingClientRect();
      const posX = (e.clientX - rect.left) / rect.width - 0.5;
      const posY = (e.clientY - rect.top) / rect.height - 0.5;
      x.set(posX);
      y.set(posY);
    };

    const handleMouseLeave = () => {
      x.set(0);
      y.set(0);
    };

    const card = cardRef.current;
    if (card) {
      card.addEventListener("mousemove", handleMouseMove);
      card.addEventListener("mouseleave", handleMouseLeave);
    }

    return () => {
      if (card) {
        card.removeEventListener("mousemove", handleMouseMove);
        card.removeEventListener("mouseleave", handleMouseLeave);
      }
    };
  }, [x, y]);

  return (
    <motion.div
      ref={cardRef}
      className="group transition will-change-transform cursor-pointer h-full"
      style={{
        perspective: 1000,
        translateY: translateY,
      }}
    >
      <motion.div
        style={{
          rotateX: rotate ? 0 : springRotateX,
          rotateY: rotate ? 0 : springRotateY,
          transformStyle: "preserve-3d",
        }}
        className="relative overflow-hidden rounded-lg bg-gradient-to-b from-white to-gray-100 p-4 shadow-2xl dark:from-gray-200 dark:to-gray-200"
      >
        <div className="relative overflow-hidden rounded h-[200px]">
          <img
            src={url}
            alt={label}
            className="rounded-lg w-full h-full object-cover"
          />
          <div className="absolute inset-0 shadow-[inset_0_0_4px_rgba(0,0,0,.3)] pointer-events-none"></div>
        </div>
        <p className="mt-3 text-center text-slate-950 md:text-lg xl:text-xl">
          {label}
        </p>
      </motion.div>
    </motion.div>
  );
};

export default PolaroidCard;

import { twMerge } from "tailwind-merge";
import { motion } from "framer-motion";

export const Switch = ({ checked, setChecked }) => {
  const handleChange = (e) => {
    const isChecked = e.target.checked;
    setChecked(isChecked);

    if (isChecked) {
      document.documentElement.classList.add("dark");
      document.documentElement.classList.remove("light");
    } else {
      document.documentElement.classList.remove("dark");
      document.documentElement.classList.add("light");
    }
  };

  return (
    <form className="flex space-x-4 antialiased items-center">
      <label
        htmlFor="checkbox"
        className={twMerge(
          "h-7 px-1 flex items-center border border-transparent shadow-[inset_0px_0px_12px_rgba(0,0,0,0.25)] rounded-full w-[60px] relative cursor-pointer transition duration-200"
        )}
      >
        <motion.div
          initial={{
            width: "20px",
            x: checked ? 0 : 32,
          }}
          animate={{
            height: ["20px", "10px", "20px"],
            width: ["20px", "30px", "20px", "20px"],
            x: checked ? 32 : 0,
            backgroundColor: checked ? "#f8fafc" : "#020618",
          }}
          transition={{
            duration: 0.3,
            delay: 0.1,
          }}
          key={String(checked)}
          className="h-[20px] block rounded-full shadow-md z-10"
        />
        <input
          type="checkbox"
          checked={checked}
          onChange={handleChange}
          className="hidden"
          id="checkbox"
        />
      </label>
    </form>
  );
};

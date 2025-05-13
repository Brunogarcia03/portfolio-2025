import { motion } from "motion/react";
import { useForm } from "react-hook-form";
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { twMerge } from "tailwind-merge";
import Footer from "../components/Footer";
import { IconLoader } from "@tabler/icons-react";

function Contact() {
  const [success, setSuccess] = useState(false);
  const [Loading, setLoading] = useState(false);
  const formRef = useRef(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async () => {
    if (!formRef.current) return;

    setLoading(true);

    try {
      await emailjs.sendForm(
        import.meta.env.VITE_SERVICE_ID, // Reemplaza con tu Service ID
        import.meta.env.VITE_TEMPLATE_ID, // Reemplaza con tu Template ID
        formRef.current,
        {
          publicKey: import.meta.env.VITE_PUBLIC_KEY, // Reemplaza con tu Public Key
        }
      );
      setSuccess(true);
      setLoading(false);
    } catch (error) {
      console.error("EmailJS Error:", error);
    }
  };

  return (
    <>
      <section className="h-full flex flex-col items-center justify-between gap-8 px-5 lg:px-0 mt-12 mb-16 max-w-6xl mx-auto overflow-hidden">
        <motion.h1
          className="text-4xl sm:text-5xl lg:text-7xl text-center font-jetbrainsmono font-semibold z-10 px-[2vh] mb-8 xl:mb-12"
          initial={{ y: -15, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{
            delay: 0.75,
            type: "spring",
            damping: 10,
            bounce: 0.2,
            duration: 0.6,
          }}
        >
          Contacto.
        </motion.h1>

        <motion.div
          initial={{ x: "-200vh" }}
          animate={{ x: "0%" }}
          transition={{
            type: "spring",
            damping: 16,
            bounce: 0.2,
            duration: 0.6,
            delay: 0.75,
          }}
          className="h-1/2 lg:h-full lg:my-auto lg:w-1/2 flex items-center justify-center text-6xl p-6 text-wrap"
        >
          <div className="flex items-center z-10">
            {"¡Gracias  por  escribir!".split("").map((word, i) => (
              <motion.span
                initial={{
                  opacity: 0,
                  filter: "blur(4px)",
                  y: i % 2 === 0 ? 10 : -10,
                }}
                animate={{ opacity: 1, filter: "blur(0px)", y: 0 }}
                transition={{
                  delay: i * 0.05,
                  duration: 1.3,
                  ease: "easeInOut",
                  repeat: Infinity,
                  repeatType: "mirror",
                  repeatDelay: 1,
                }}
                className="inline-block mr-0.5 font-zentokyo font-thin"
                key={`title-${i}`}
              >
                {word}
              </motion.span>
            ))}
          </div>
        </motion.div>

        <motion.form
          ref={formRef}
          onSubmit={handleSubmit(onSubmit)}
          initial={{ x: "200vh" }}
          animate={{ x: "0%" }}
          transition={{
            type: "spring",
            damping: 16,
            bounce: 0.2,
            duration: 0.6,
            delay: 0.75,
          }}
          className="h-1/2 max-w-lg w-full border border-slate-900 dark:border-slate-50 bg-slate-900/60 rounded-2xl text-xl flex flex-col gap-8 justify-center p-16 z-10 font-inter text-slate-50"
        >
          <span>Querido Bruno, </span>

          <textarea
            {...register("user_message", { required: true })}
            name="user_message"
            placeholder="Mensaje"
            className="bg-transparent border-b-2 order-slate-900 dark:border-slate-50 outline-none italic h-8"
          />
          {errors.message && (
            <span className="text-red-600 font-semibold text-sm">
              El mensaje es obligatorio.
            </span>
          )}

          <span>Mi Email es:</span>
          <input
            type="email"
            {...register("user_email", {
              required: true,
              pattern: /^\S+@\S+$/i,
            })}
            name="user_email"
            placeholder="Email"
            className="bg-transparent border-b-2 order-slate-900 dark:border-slate-50 outline-none italic"
          />
          {errors.email && (
            <span className="text-red-600 font-semibold text-sm">
              Ingresa un correo válido.
            </span>
          )}

          <span>Saludos.</span>
          <button
            type="submit"
            disabled={success}
            className={twMerge(
              "flex items-center justify-center text-lg rounded-2xl border border-slate-900 dark:border-slate-50 font-semibold px-24 py-3 delay-0 font-jetbrainsmono",
              success
                ? "bg-gradient-to-b from-white/60 to-gray-100/60 dark:from-gray-200/60 dark:to-gray-200/60 text-center"
                : "bg-gradient-to-b from-white to-gray-100 dark:from-gray-200 dark:to-gray-200 text-slate-950 hover:px-28 active:brightness-80 hover:tracking-widest transition-all duration-500 hover:shadow-2xl shadow-black text-center"
            )}
          >
            {!Loading ? (
              <span>{success ? "¡Tu mensaje ha sido enviado!" : "Enviar"}</span>
            ) : (
              <IconLoader className="transition-all duration-300 animate-spin" />
            )}
          </button>
        </motion.form>
      </section>

      <Footer />
    </>
  );
}

export default Contact;

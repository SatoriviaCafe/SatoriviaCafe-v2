"use client";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section
      id="hero"
      className="
        flex min-h-screen flex-col items-center justify-center 
        px-4 text-center
        bg-cover bg-center"
    >
      <motion.h1
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="
          mb-4 font-bold
          text-4xl sm:text-5xl md:text-6xl lg:text-7xl"
      >
        Satorivia Cafe 星辰咖啡
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
        className="
          opacity-80
          text-base sm:text-lg md:text-xl"
      >
        世界精品 · 中国精制
      </motion.p>
    </section>
  );
}

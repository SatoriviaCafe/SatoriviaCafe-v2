"use client";
import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" className="px-6 py-20 scroll-mt-28 md:scroll-mt-32">
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
        className="mb-8 text-center text-4xl font-bold"
      >
        品牌故事
      </motion.h2>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
        viewport={{ once: true }}
        className="mx-auto max-w-3xl text-left opacity-80 leading-relaxed"
      >
        　　“A human being is a part of the whole called by us ‘Universe’… freeing
        ourselves from this prison by widening our circle of compassion.”
        <br />
        <br />
        　　在城市的灯火与喧嚣之外，我们始终相信——每个人都值得拥有一段宁静时光。星辰咖啡诞生于这样的信念：在一杯咖啡的香气中，找回心灵与宇宙的连接。它承载着片刻的沉静、诗意与辽阔，如夜空中闪烁的星辰，照亮生活中微小却温暖的浪漫。
        <br />
        <br />
        　　我们秉持极简、纯粹的美学理念，从选豆、烘焙到冲煮，每一步都精心打磨，只为呈现最本真的风味体验。设计灵感取自浩瀚星河，融合「白」与「蓝」的宇宙色调，让每一次品尝都仿佛漫步银河。借助NFC溯源技术，每一颗咖啡豆的旅程都可真实可见，触手可及。
        <br />
        <br />
        　　星辰咖啡希望通过味觉与数字的双重连接，让每一次品尝都成为温柔的宁静时刻；让你感受到自己是整体的一部分，和万物共舞，并被世界温柔守望。
        <br />
        <br />
        　　Intui Cafe 是 SatoriVia　Cafe旗下的子品牌，专注于以直觉与灵感为核心的独特咖啡体验，让人们在喧嚣中找到属于自己的微光与自由。
      </motion.p>
    </section>
  );
}

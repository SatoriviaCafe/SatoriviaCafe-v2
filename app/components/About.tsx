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
        　　在城市灯火与喧嚣之外，我们相信，每个人都值得拥有一段属于自己的宁静时光。星辰咖啡诞生于这样的信念——在咖啡的香气中，找回心灵与宇宙的联系。我们用一杯咖啡，承载片刻的沉静、诗意与辽阔，像夜空中闪烁的星星，照亮生活中的微小浪漫。
        <br />
        <br />
        　　我们秉持极简、纯粹的美学理念，从选豆、烘焙到冲煮，每一步都精心打磨，只为呈现最本真的风味体验。灵感源于浩瀚星河，我们的设计融合「白」与「蓝」的宇宙色调，象征纯洁与无限，让每一次品尝都仿佛漫步在银河之中。星辰咖啡，不只是一杯饮品，更是一种生活节奏的重新调频。
        <br />
        <br />
        　　未来，我们希望打造一个属于咖啡爱好者的宁静宇宙，在这里，你可以慢下来、思考、感受，甚至迷失片刻。我们相信，真正打动人心的，不只是咖啡的味道，而是那份在星光下静静流淌的情感连结。欢迎来到星辰咖啡，一起探索味觉与灵魂的宇宙之旅。
      </motion.p>
    </section>
  );
}

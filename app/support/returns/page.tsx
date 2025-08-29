"use client";

import BackgroundWrapper from "@/app/components/BackgroundWrapper";
import Navbar from "@/app/components/Navbar";
import { motion, type Variants } from "framer-motion";

const fadeIn: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      duration: 0.8,
      ease: [0.25, 0.1, 0.25, 1.0],
    },
  },
};

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.25, 0.1, 0.25, 1.0],
    },
  },
};

const staggerContainer: Variants = {
  hidden: { opacity: 1 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3,
    },
  },
};

export default function ReturnPolicyPage() {
  return (
    <div className="min-h-screen relative">
      <BackgroundWrapper />
      <div className="relative z-10">
        <Navbar />

        <motion.div
          variants={fadeIn}
          initial="hidden"
          animate="show"
          className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16 pt-28"
        >
          <motion.div variants={fadeUp} className="text-center mb-16">
            <h1 className="text-3xl md:text-4xl font-light text-white mb-3">
              退换货政策
            </h1>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="show"
            className="grid lg:grid-cols-3 gap-8"
          >
            <motion.div
              variants={fadeUp}
              className="lg:col-span-1 bg-black/20 backdrop-blur-md rounded-xl p-6 border border-white/10"
            >
              <h2 className="text-lg font-medium text-white mb-4">服务承诺</h2>
              <p className="text-gray-300 text-sm leading-relaxed">
                我们承诺为每一位顾客提供{" "}
                <span className="text-orange-400 font-medium">
                  7天无理由退换货服务
                </span>
                ，让您的每一次购买都安心、无忧。
              </p>
              <div className="mt-6 pt-6 border-t border-white/10">
                <p className="text-xs text-gray-400">
                  在星辰咖啡，我们不仅注重咖啡品质，也希望为您营造无后顾之忧的购物体验。
                </p>
              </div>
            </motion.div>

            <motion.div variants={fadeUp} className="lg:col-span-2 grid gap-4">
              {[
                {
                  title: "无理由退换",
                  desc: "7天内",
                  content:
                    "商品保持原包装、未开封且不影响二次销售，即可申请退换货",
                },
                {
                  title: "品质保障",
                  desc: "优先处理",
                  content: "口感、香气不符承诺时，优先更换新鲜产品或办理退款",
                },
                {
                  title: "运输破损赔付",
                  desc: "立即补发",
                  content: "快递运输导致包装损坏或漏气，签收时拍照联系客服即可",
                },
                {
                  title: "贴心客服",
                  desc: "第一时间",
                  content: "收到退换申请后立即响应，提供清晰操作指引",
                },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  variants={fadeUp}
                  className="group bg-black/20 backdrop-blur-md rounded-lg p-5 border border-white/10 hover:border-orange-400/20 hover:bg-black/30 transition-all duration-300"
                >
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="font-medium text-white text-base group-hover:text-orange-300 transition-colors">
                      {item.title}
                    </h3>
                    <span className="text-xs text-orange-400 bg-orange-400/10 px-2 py-1 rounded">
                      {item.desc}
                    </span>
                  </div>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    {item.content}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}

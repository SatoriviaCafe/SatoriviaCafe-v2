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

export default function DeliveryInfoPage() {
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
              配送资讯
            </h1>
            <p className="text-gray-400 text-sm uppercase tracking-wider">
              Delivery Information
            </p>
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
              <h2 className="text-lg font-medium text-white mb-4">配送承诺</h2>
              <p className="text-gray-300 text-sm leading-relaxed mb-4">
                我们与{" "}
                <span className="text-orange-400 font-medium">顺丰速运</span>{" "}
                深度合作，全场订单{" "}
                <span className="text-orange-400 font-medium">顺丰包邮</span>
                ，确保快速、安全、准时送达。
              </p>
              <p className="text-gray-300 text-sm leading-relaxed">
                无论您身处城市中心，还是静谧小镇，我们都希望第一时间将这份香气传递到您手中。
              </p>
              <div className="mt-6 pt-6 border-t border-white/10">
                <div className="flex items-center space-x-2 text-xs text-gray-400">
                  <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                  <span>全场包邮 • 安全可靠</span>
                </div>
              </div>
            </motion.div>

            <motion.div variants={fadeUp} className="lg:col-span-2 grid gap-4">
              {[
                {
                  title: "多重防护包装",
                  desc: "保鲜防护",
                  content:
                    "内袋密封保鲜，外层防震防潮，最大程度保留咖啡的新鲜与风味",
                },
                {
                  title: "精心准备的小礼物",
                  desc: "暖心惊喜",
                  content:
                    "每份订单随附滴滤咖啡小礼物，可能是新品试饮或限量风味",
                },
                {
                  title: "特殊配送需求",
                  desc: "一对一服务",
                  content:
                    "节日礼盒、送礼备注、定时到达等特殊需求，客服团队贴心安排",
                },
                {
                  title: "香气传递保证",
                  desc: "新鲜如初",
                  content:
                    "即便长途运输，也能让您打开包装的那一刻闻到扑面而来的香气",
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

          <motion.div
            variants={fadeUp}
            className="mt-12 bg-gradient-to-r from-orange-500/10 to-amber-500/10 backdrop-blur-md rounded-xl p-6 border border-orange-400/20 text-center"
          >
            <p className="text-gray-300 text-sm leading-relaxed">
              让收货不只是"收到货物"，更是一次{" "}
              <span className="text-orange-300 font-medium">
                暖心的味觉预告
              </span>
              ，让这份咖啡与心意，恰到好处地抵达。
            </p>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}

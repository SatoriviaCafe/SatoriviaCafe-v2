// components/Footer.tsx
"use client";

import React from "react";
import Link from "next/link";
import { Heart, Mail, MapPin, Star } from "lucide-react";

// 平滑滚动到锚点
function scrollToId(id: string) {
  const el = document.querySelector(id);
  el?.scrollIntoView({ behavior: "smooth" });
}

// 导航链接数据
const footerNav = {
  products: [
    { title: "单品咖啡豆（敬請期待）", href: "/products/beans" },
    { title: "滤挂咖啡（敬請期待）", href: "/products/drip" },
  ],
  about: [
    { title: "品牌故事", href: "#about" },
    { title: "烘焙理念（敬請期待）", href: "#roast" },
  ],
  support: [
    { title: "配送资讯（敬請期待）", href: "/support/shipping" },
    { title: "退换货政策（敬請期待）", href: "/support/returns" },
  ],
};

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-black to-slate-800 text-gray-300">
      {/* 星空背景装饰 */}
      <div className="absolute inset-0 opacity-30">
        {[
          "left-10 top-10",
          "right-20 top-20 delay-300",
          "left-1/3 top-32 delay-700",
          "bottom-20 right-1/4 delay-1000",
          "bottom-32 left-1/4 delay-500",
          "top-12 right-1/3 delay-400",
          "bottom-10 left-1/3 delay-600",
          "top-3 left-3/4 delay-800",
          "right-10 bottom-5 delay-1100",
          "left-5 bottom-5 delay-900",
          "top-1/4 right-1/2 delay-1200",
          "bottom-1/3 left-2/3 delay-1300",
          "left-1/5 top-1/6 delay-200",
          "left-3/4 top-1/8 delay-450",
          "left-2/5 top-3/5 delay-700",
          "left-9/10 top-2/3 delay-950",
          "left-1/10 top-4/5 delay-300",
          "left-1/2 top-1/3 delay-600",
          "left-4/5 top-1/2 delay-850",
          "left-1/3 top-7/8 delay-150",
          "left-7/10 top-3/4 delay-500",
          "left-1/6 top-2/5 delay-750",
          "left-8/9 top-1/4 delay-1000",
        ].map((pos, i) => (
          <div
            key={i}
            className={`absolute h-1 w-1 animate-pulse rounded-full bg-white ${pos}`}
          />
        ))}
      </div>

      {/* 渐变覆盖层 */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />

      <div className="relative px-6 pb-10 pt-20 text-white md:px-20">
        <div className="mx-auto grid max-w-7xl items-start gap-12 md:grid-cols-5">
          {/* 左侧品牌区 */}
          <div className="md:col-span-2">
            <div className="mb-6 flex items-center gap-3">
              <Link href="/">
                <img
                  src="/logo.png"
                  alt="星辰咖啡 Logo"
                  className="h-10 w-auto"
                />
              </Link>
              <h2 className="bg-gradient-to-r from-white via-amber-100 to-amber-200 bg-clip-text text-4xl font-extrabold tracking-widest text-transparent">
                星辰咖啡
              </h2>
            </div>
            <p className="mb-6 max-w-md text-base leading-relaxed text-gray-300 font-sans">
              我们相信：一杯好咖啡，就像星辰一样，值得你慢下来、细细品味。每一颗咖啡豆都承载着我们对品质的坚持。
            </p>
            <div className="mb-6 space-y-3">
              <div className="flex items-center gap-3 text-sm text-gray-400 hover:text-white transition-colors">
                <MapPin className="h-4 w-4 text-amber-400" />
                深圳市南山区粤海街道海珠社区海德二道288号茂业时代广场15G-6
              </div>
              <div className="flex items-center gap-3 text-sm text-gray-400 hover:text-white transition-colors">
                <Mail className="h-4 w-4 text-amber-400" />
                innoheart.co@outlook.com
              </div>
            </div>
            <div className="inline-flex items-center gap-2 rounded-full border border-amber-500/20 bg-gradient-to-r from-amber-900/20 to-amber-800/20 px-4 py-2">
              <Star className="h-3 w-3 fill-current text-amber-400" />
              <p className="text-xs font-medium text-amber-200">
                手工烘焙 · 真诚呈现
              </p>
            </div>
          </div>

          {/* 导航链接群 */}
          <div className="md:col-span-3 grid grid-cols-3 gap-8">
            {[
              { heading: "产品系列", items: footerNav.products },
              { heading: "品牌与理念", items: footerNav.about },
              { heading: "客户服务", items: footerNav.support },
            ].map(({ heading, items }) => (
              <div key={heading}>
                <h4 className="relative mb-6 text-sm font-bold uppercase tracking-widest text-gray-400">
                  {heading}
                  <span className="absolute bottom-0 left-0 block h-0.5 w-8 rounded-full bg-gradient-to-r from-amber-400 to-amber-600" />
                </h4>
                <ul className="space-y-3">
                  {items.map(({ title, href }) => {
                    const isHash = href.startsWith("#");
                    const isInternal = href.startsWith("/") && !isHash;

                    if (isHash) {
                      return (
                        <li key={href}>
                          <button
                            onClick={() => scrollToId(href)}
                            className="group flex items-center gap-2 text-sm hover:text-white hover:translate-x-1 transition"
                          >
                            <span className="group-hover:text-amber-400">
                              {title}
                            </span>
                          </button>
                        </li>
                      );
                    }

                    if (isInternal) {
                      return (
                        <li key={href}>
                          <Link
                            href={href}
                            className="group flex items-center gap-2 text-sm hover:text-white hover:translate-x-1 transition"
                          >
                            <span className="group-hover:text-amber-400">
                              {title}
                            </span>
                          </Link>
                        </li>
                      );
                    }

                    // 如果未来有外部链接也能兼容
                    return (
                      <li key={href}>
                        <a
                          href={href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="group flex items-center gap-2 text-sm hover:text-white hover:translate-x-1 transition"
                        >
                          <span className="group-hover:text-amber-400">
                            {title}
                          </span>
                        </a>
                      </li>
                    );
                  })}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* 自媒体关注区（保持你原本的那块，不需改动） */}
        <div className="mx-auto mt-16 max-w-7xl">
          <h3 className="mb-2 text-lg font-semibold text-white">
            关注我们的星空时光
          </h3>
          <p className="mb-6 text-sm text-gray-400">分享每一刻的咖啡美好</p>
          <div className="flex flex-wrap gap-4">
            {[
              {
                name: "抖音",
                icon: "douyin.png",
                color: "bg-[linear-gradient(135deg,_#06b6d4_10%,_#ec4899_80%)]",
                followers: "42K+",
              },
              {
                name: "视频号",
                icon: "shipinhao.png",
                color: "from-red-500 to-[#FA9D3B]",
                followers: "35K+",
              },
              {
                name: "小红书",
                icon: "xiaohongshu.png",
                color: "from-red-700 to-[#FF2E4D]",
                followers: "28K+",
              },
              {
                name: "微信公众号",
                icon: "weixin.png",
                color: "from-green-500 to-green-600",
                followers: "50K+",
              },
              {
                name: "微信小程序",
                icon: "xiaochengxu.png",
                color: "from-green-500 to-green-600",
                followers: "50K+",
              },
              {
                name: "旗舰店",
                icon: "taobao.png",
                color: "from-orange-500 to-red-500",
                followers: "店铺",
              },
            ].map((social, i) => (
              <a
                key={i}
                href="#"
                className="group relative flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur-sm transition-all duration-300 hover:scale-105 hover:border-white/20 hover:bg-white/10"
              >
                <div
                  className={`rounded-full bg-gradient-to-br p-2 ${social.color} transition-transform duration-300 group-hover:scale-110`}
                >
                  <img
                    src={`/socials/${social.icon}`}
                    alt={social.name}
                    className="h-5 w-5 brightness-0 invert"
                  />
                </div>
                <div>
                  <p className="text-sm font-medium text-white">
                    {social.name}
                  </p>
                  <p className="text-xs text-gray-400">{social.followers}</p>
                </div>
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-white/0 to-white/5 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              </a>
            ))}
          </div>
        </div>

        {/* 下方版权区 */}
        <div className="mx-auto mt-16 max-w-7xl">
          <div className="mb-8 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
          <div className="flex flex-col items-center justify-between gap-6 text-sm text-gray-400 md:flex-row">
            <p>© 2025 Satorivia Cafe 星辰咖啡 All rights reserved.</p>
            <div className="flex items-center gap-2 text-xs">
              <span>Made with</span>
              <Heart className="h-3 w-3 animate-pulse fill-current text-red-400" />
              <span>by Satorivia</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

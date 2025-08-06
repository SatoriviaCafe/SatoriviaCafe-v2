import Link from "next/link";

import { Heart, Mail, MapPin, Phone, Star } from "lucide-react";

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-black to-slate-800">
      {/* 星空背景裝飾 */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute left-10 top-10 h-1 w-1 animate-pulse rounded-full bg-white"></div>
        <div className="absolute right-20 top-20 h-1 w-1 animate-pulse rounded-full bg-white delay-300"></div>
        <div className="absolute left-1/3 top-32 h-1 w-1 animate-pulse rounded-full bg-white delay-700"></div>
        <div className="absolute bottom-20 right-1/4 h-1 w-1 animate-pulse rounded-full bg-white delay-1000"></div>
        <div className="absolute bottom-32 left-1/4 h-1 w-1 animate-pulse rounded-full bg-white delay-500"></div>
        <div className="absolute top-12 right-1/3 h-1 w-1 animate-pulse rounded-full bg-white delay-400"></div>
        <div className="absolute bottom-10 left-1/3 h-1 w-1 animate-pulse rounded-full bg-white delay-600"></div>
        <div className="absolute top-3 left-3/4 h-1 w-1 animate-pulse rounded-full bg-white delay-800"></div>
        <div className="absolute right-10 bottom-5 h-1 w-1 animate-pulse rounded-full bg-white delay-1100"></div>
        <div className="absolute left-5 bottom-5 h-1 w-1 animate-pulse rounded-full bg-white delay-900"></div>
        <div className="absolute top-1/4 right-1/2 h-1 w-1 animate-pulse rounded-full bg-white delay-1200"></div>
        <div className="absolute bottom-1/3 left-2/3 h-1 w-1 animate-pulse rounded-full bg-white delay-1300"></div>
        <div className="absolute left-1/5 top-1/6 h-1 w-1 animate-pulse rounded-full bg-white delay-200"></div>
        <div className="absolute left-3/4 top-1/8 h-1 w-1 animate-pulse rounded-full bg-white delay-450"></div>
        <div className="absolute left-2/5 top-3/5 h-1 w-1 animate-pulse rounded-full bg-white delay-700"></div>
        <div className="absolute left-9/10 top-2/3 h-1 w-1 animate-pulse rounded-full bg-white delay-950"></div>
        <div className="absolute left-1/10 top-4/5 h-1 w-1 animate-pulse rounded-full bg-white delay-300"></div>
        <div className="absolute left-1/2 top-1/3 h-1 w-1 animate-pulse rounded-full bg-white delay-600"></div>
        <div className="absolute left-4/5 top-1/2 h-1 w-1 animate-pulse rounded-full bg-white delay-850"></div>
        <div className="absolute left-1/3 top-7/8 h-1 w-1 animate-pulse rounded-full bg-white delay-150"></div>
        <div className="absolute left-7/10 top-3/4 h-1 w-1 animate-pulse rounded-full bg-white delay-500"></div>
        <div className="absolute left-1/6 top-2/5 h-1 w-1 animate-pulse rounded-full bg-white delay-750"></div>
        <div className="absolute left-8/9 top-1/4 h-1 w-1 animate-pulse rounded-full bg-white delay-1000"></div>
      </div>

      {/* 漸層覆蓋層 */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>

      <div className="relative px-6 pb-10 pt-20 text-white md:px-20">
        <div className="mx-auto grid max-w-7xl items-start gap-12 md:grid-cols-5">
          {/* 左側品牌區 - 換成 logo */}
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

            {/* 聯絡資訊 */}
            <div className="mb-6 space-y-3">
              <div className="flex items-center gap-3 text-sm text-gray-400 transition-colors hover:text-white">
                <MapPin className="h-4 w-4 text-amber-400" />
                <span>
                  深圳市南山区粤海街道海珠社区海德二道288号茂业时代广场15G-6
                </span>
              </div>
              <div className="flex items-center gap-3 text-sm text-gray-400 transition-colors hover:text-white">
                <Mail className="h-4 w-4 text-amber-400" />
                <span>innoheart.co@outlook.com</span>
              </div>
            </div>

            <div className="inline-flex items-center gap-2 rounded-full border border-amber-500/20 bg-gradient-to-r from-amber-900/20 to-amber-800/20 px-4 py-2">
              <Star className="h-3 w-3 fill-current text-amber-400" />
              <p className="text-xs font-medium text-amber-200">
                手工烘焙 · 真诚呈现
              </p>
            </div>
          </div>

          {/* 導覽連結群 - 增強互動效果 */}
          <div>
            <h4 className="relative mb-6 text-sm font-bold uppercase tracking-widest text-gray-400">
              产品系列
              <div className="absolute bottom-0 left-0 h-0.5 w-8 rounded-full bg-gradient-to-r from-amber-400 to-amber-600"></div>
            </h4>
            <ul className="space-y-3">
              {[
                { name: "单品咖啡豆", badge: "Hot" },
                { name: "滤挂咖啡", badge: null },
                { name: "星辰杯具", badge: "New" },
                { name: "咖啡器具", badge: null },
              ].map((item, index) => (
                <li key={index}>
                  <Link
                    href="#"
                    className="group flex items-center gap-2 text-sm text-gray-300 transition-all duration-300 hover:translate-x-1 hover:text-white"
                  >
                    <span className="transition-colors group-hover:text-amber-400">
                      {item.name}
                    </span>
                    {item.badge && (
                      <span className="rounded-full border border-amber-500/30 bg-amber-500/20 px-2 py-0.5 text-xs text-amber-300">
                        {item.badge}
                      </span>
                    )}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="relative mb-6 text-sm font-bold uppercase tracking-widest text-gray-400">
              品牌故事
              <div className="absolute bottom-0 left-0 h-0.5 w-8 rounded-full bg-gradient-to-r from-amber-400 to-amber-600"></div>
            </h4>
            <ul className="space-y-3">
              {["品牌故事", "门店位置", "烘焙理念", "人才招募"].map(
                (item, index) => (
                  <li key={index}>
                    <Link
                      href="#"
                      className="group text-sm text-gray-300 transition-all duration-300 hover:translate-x-1 hover:text-white"
                    >
                      <span className="transition-colors group-hover:text-amber-400">
                        {item}
                      </span>
                    </Link>
                  </li>
                )
              )}
            </ul>
          </div>

          <div>
            <h4 className="relative mb-6 text-sm font-bold uppercase tracking-widest text-gray-400">
              客戶服務
              <div className="absolute bottom-0 left-0 h-0.5 w-8 rounded-full bg-gradient-to-r from-amber-400 to-amber-600"></div>
            </h4>
            <ul className="space-y-3">
              {["常见问题", "配送资讯", "退换货政策"].map((item, index) => (
                <li key={index}>
                  <Link
                    href="#"
                    className="group text-sm text-gray-300 transition-all duration-300 hover:translate-x-1 hover:text-white"
                  >
                    <span className="transition-colors group-hover:text-amber-400">
                      {item}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mx-auto mt-16 max-w-7xl">
          <div className="mb-8">
            <h3 className="mb-2 text-lg font-semibold text-white">
              关注我们的星空时光
            </h3>
            <p className="mb-6 text-sm text-gray-400">分享每一刻的咖啡美好</p>

            <div className="flex flex-wrap gap-4">
              {[
                {
                  name: "抖音",
                  icon: "douyin.png",
                  color:
                    "bg-[linear-gradient(135deg,_#06b6d4_10%,_#ec4899_80%)]",
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
                  name: "天猫旗舰店",
                  icon: "tianmao.png",
                  color: "from-orange-500 to-red-500",
                  followers: "店铺",
                },
              ].map((social, index) => (
                <a
                  key={index}
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

                  {/* Hover 效果 */}
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-white/0 to-white/5 opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* 下方版權區 - 增強設計 */}
        <div className="mx-auto max-w-7xl">
          <div className="mb-8 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>

          <div className="flex flex-col items-center justify-between gap-6 text-sm text-gray-400 md:flex-row">
            <div className="flex flex-col items-center gap-4 md:flex-row">
              <p className="flex items-center gap-2">
                <span>
                  © 2025 Satorivia Cafe 星辰咖啡 All rights reserved.
                </span>
              </p>
            </div>

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

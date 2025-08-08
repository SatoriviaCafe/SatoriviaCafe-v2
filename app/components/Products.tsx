"use client";

import { Carousel } from "antd";
import Image from "next/image";
import Link from "next/link";
import { beans } from "@/data/beans";

export default function Products() {
  return (
    <section id="products" className="px-6 py-20 text-black">
      <h2 className="mb-12 text-4xl font-bold text-center text-white">
        小行星系列
      </h2>

      <div className="hidden md:block">
        <Carousel
          dots
          arrows
          autoplay
          autoplaySpeed={4000}
          className="[&_.slick-dots]:bottom-[-50px] [&_.slick-dots_li_button]:w-3 [&_.slick-dots_li_button]:h-3 [&_.slick-dots_li_button]:rounded-full [&_.slick-dots_li.slick-active_button]:bg-black [&_.slick-prev]:left-[-40px] [&_.slick-next]:right-[-40px] [&_.slick-prev]:z-10 [&_.slick-next]:z-10 [&_.slick-prev]:text-black [&_.slick-next]:text-black"
        >
          {Array.from({ length: Math.ceil(beans.length / 3) }, (_, index) => (
            <div key={index}>
              <div className="grid grid-cols-3 gap-8 px-4 pb-8">
                {beans.slice(index * 3, (index + 1) * 3).map((item) => (
                  <div key={item.id} className="flex flex-col text-center px-2">
                    <Link href={`/products/beans/${item.series}/${item.id}`}>
                      <div className="relative overflow-hidden rounded-lg group">
                        <Image
                          src={item.image}
                          alt={item.name}
                          width={300}
                          height={300}
                          className="mx-auto cursor-pointer object-cover transition-transform duration-300 group-hover:scale-105 rounded-lg"
                        />
                      </div>
                    </Link>
                    <div className="text-lg mt-4 mb-4">{item.name}</div>
                    <div className="mt-auto pb-4">
                      <a
                        href={item.taobaoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block rounded-full bg-white border-2 border-white px-8 py-3 text-black shadow-lg transition-all duration-300 hover:bg-transparent hover:text-white hover:shadow-xl transform hover:scale-105"
                      >
                        购买
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </Carousel>
      </div>

      <div className="block md:hidden">
        <Carousel
          dots
          arrows
          autoplay
          autoplaySpeed={3000}
          className="[&_.slick-dots]:bottom-[-50px] [&_.slick-dots_li_button]:w-3 [&_.slick-dots_li_button]:h-3 [&_.slick-dots_li_button]:rounded-full [&_.slick-dots_li.slick-active_button]:bg-black [&_.slick-prev]:left-[-20px] [&_.slick-next]:right-[-20px] [&_.slick-prev]:z-10 [&_.slick-next]:z-10 [&_.slick-prev]:text-black [&_.slick-next]:text-black"
        >
          {beans.map((item) => (
            <div key={item.id}>
              <div className="px-4 pb-8">
                <div className="flex flex-col text-center px-2 h-full">
                  <Link href={`/products/beans/${item.series}/${item.id}`}>
                    <div className="relative overflow-hidden rounded-lg group">
                      <Image
                        src={item.image}
                        alt={item.name}
                        width={300}
                        height={300}
                        className="mx-auto cursor-pointer object-cover transition-transform duration-300 group-hover:scale-105 rounded-lg"
                      />
                    </div>
                  </Link>
                  <div className="text-lg font-medium mt-4 mb-4">
                    {item.name}
                  </div>
                  <div className="mt-auto pb-4">
                    <a
                      href={item.taobaoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block rounded-full bg-white border-2 border-white px-8 py-3 text-black font-semibold shadow-lg transition-all duration-300 hover:bg-transparent hover:text-white hover:shadow-xl transform hover:scale-105"
                    >
                      购买
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Carousel>
      </div>
    </section>
  );
}

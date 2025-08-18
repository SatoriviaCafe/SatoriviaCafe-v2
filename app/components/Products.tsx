"use client";

import { Carousel } from "antd";
import Image from "next/image";
import Link from "next/link";
import { motion, type Variants } from "framer-motion";
import { products } from "@/data/products";

const containerStagger: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.1 },
  },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 16, scale: 0.98 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.45, ease: "easeOut" },
  },
};

export default function Products() {
  // 防呆：如果沒有資料就不渲染 Carousel，免得跑版
  if (!products || products.length === 0) {
    return (
      <section
        id="products"
        className="px-6 py-20 scroll-mt-28 md:scroll-mt-32"
      >
        <h2 className="mb-12 text-4xl font-bold text-center text-white">
          小行星系列
        </h2>
        <p className="text-center text-gray-300">目前沒有可顯示的商品。</p>
      </section>
    );
  }

  return (
    <section
      id="products"
      className="px-6 py-20 text-black scroll-mt-28 md:scroll-mt-32"
    >
      <motion.h2
        variants={containerStagger}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-10% 0px -10% 0px" }}
        className="mb-12 text-4xl font-bold text-center text-white"
      >
        小行星系列
      </motion.h2>

      {/* Desktop */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="hidden md:block"
      >
        <Carousel
          dots
          arrows
          autoplay
          autoplaySpeed={4000}
          className="[&_.slick-dots]:bottom-[-50px] [&_.slick-dots_li_button]:w-3 [&_.slick-dots_li_button]:h-3 [&_.slick-dots_li_button]:rounded-full [&_.slick-dots_li.slick-active_button]:bg-black [&_.slick-prev]:left-[-40px] [&_.slick-next]:right-[-40px] [&_.slick-prev]:z-10 [&_.slick-next]:z-10 [&_.slick-prev]:text-black [&_.slick-next]:text-black"
        >
          {Array.from(
            { length: Math.ceil(products.length / 3) },
            (_, index) => (
              <div key={index}>
                <motion.div
                  variants={containerStagger}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true }}
                  className="grid grid-cols-3 gap-8 px-4 pb-8"
                >
                  {products
                    .slice(index * 3, (index + 1) * 3)
                    .map((itemData) => (
                      <motion.div
                        key={itemData.id}
                        variants={cardVariants}
                        className="flex flex-col text-center px-2"
                      >
                        <Link
                          href={`/products/${itemData.productsid}/${itemData.series}/${itemData.id}`}
                        >
                          <div className="relative overflow-hidden rounded-lg group">
                            <Image
                              src={itemData.image}
                              alt={itemData.name}
                              width={300}
                              height={300}
                              className="mx-auto cursor-pointer object-cover transition-transform duration-300 group-hover:scale-105 rounded-lg"
                            />
                          </div>
                        </Link>
                        <div className="text-lg mt-4 mb-4">{itemData.name}</div>
                        <div className="mt-auto pb-4">
                          <a
                            href={itemData.taobaoUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-block rounded-full bg-white border-2 border-white px-8 py-3 text-black shadow-lg transition-all duration-300 hover:bg-transparent hover:text-white hover:shadow-xl transform hover:scale-105"
                          >
                            购买
                          </a>
                        </div>
                      </motion.div>
                    ))}
                </motion.div>
              </div>
            )
          )}
        </Carousel>
      </motion.div>

      {/* Mobile */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="block md:hidden"
      >
        <Carousel
          dots
          arrows
          autoplay
          autoplaySpeed={3000}
          className="[&_.slick-dots]:bottom-[-50px] [&_.slick-dots_li_button]:w-3 [&_.slick-dots_li_button]:h-3 [&_.slick-dots_li_button]:rounded-full [&_.slick-dots_li.slick-active_button]:bg-black [&_.slick-prev]:left-[-20px] [&_.slick-next]:right-[-20px] [&_.slick-prev]:z-10 [&_.slick-next]:z-10 [&_.slick-prev]:text-black [&_.slick-next]:text-black"
        >
          {products.map((itemData) => (
            <div key={itemData.id}>
              <motion.div
                variants={containerStagger}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                className="px-4 pb-8"
              >
                <motion.div
                  variants={cardVariants}
                  className="flex flex-col text-center px-2 h-full"
                >
                  <Link
                    href={`/products/${itemData.productsid}/${itemData.series}/${itemData.id}`}
                  >
                    <div className="relative overflow-hidden rounded-lg group">
                      <Image
                        src={itemData.image}
                        alt={itemData.name}
                        width={300}
                        height={300}
                        className="mx-auto cursor-pointer object-cover transition-transform duration-300 group-hover:scale-105 rounded-lg"
                      />
                    </div>
                  </Link>
                  <div className="text-lg font-medium mt-4 mb-4">
                    {itemData.name}
                  </div>
                  <div className="mt-auto pb-4">
                    <a
                      href={itemData.taobaoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block rounded-full bg-white border-2 border-white px-8 py-3 text-black font-semibold shadow-lg transition-all duration-300 hover:bg-transparent hover:text-white hover:shadow-xl transform hover:scale-105"
                    >
                      购买
                    </a>
                  </div>
                </motion.div>
              </motion.div>
            </div>
          ))}
        </Carousel>
      </motion.div>
    </section>
  );
}

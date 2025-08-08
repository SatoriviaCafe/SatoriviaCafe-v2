"use client";

import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { useState, use } from "react";
import { beans } from "@/data/beans";
import BackgroundWrapper from "@/app/components/BackgroundWrapper";
import Navbar from "@/app/components/Navbar";

export default function BeanDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = use(params);
  const [activeTab, setActiveTab] = useState("details");

  const bean = beans.find((b) => b.id === id);

  if (!bean) {
    notFound();
  }

  return (
    <div className="min-h-screen relative">
      {/* 星空背景 */}
      <BackgroundWrapper />

      {/* 主要内容 */}
      <div className="relative z-10">
        {/* 主页导航栏 */}
        <Navbar />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 pt-24">
          <div className="bg-black/20 backdrop-blur-md rounded-xl shadow-2xl border border-white/10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 p-6">
              {/* 左侧：产品图片 */}
              <div className="space-y-4">
                <div className="aspect-square bg-gray-100 rounded-lg overflow-hidden">
                  <Image
                    src={bean.image}
                    alt={bean.name}
                    width={500}
                    height={500}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>

                {/* 风味雷达图 */}
                {bean.radar && (
                  <div className="bg-black/30 backdrop-blur-sm rounded-lg p-4 border border-white/20">
                    <h3 className="text-sm font-medium text-white mb-2">
                      风味雷达图
                    </h3>
                    <div className="aspect-square bg-black/20 rounded overflow-hidden">
                      <Image
                        src={bean.radar}
                        alt="风味雷达图"
                        width={300}
                        height={300}
                        className="w-full h-full object-contain"
                      />
                    </div>
                  </div>
                )}
              </div>

              {/* 右侧：产品信息和购买选项 */}
              <div className="space-y-6">
                {/* 产品基本信息 */}
                <div>
                  <h1 className="text-2xl font-bold text-white mb-2">
                    {bean.name}
                  </h1>
                  <div className="flex items-center space-x-4 text-sm text-gray-300">
                    <span className="bg-orange-500/80 text-white px-2 py-1 rounded backdrop-blur-sm">
                      精品咖啡
                    </span>
                    <span>产地：{bean.origin}</span>
                  </div>
                </div>

                {/* 风味描述 */}
                <div className="bg-amber-500/20 border border-amber-400/30 rounded-lg p-4 backdrop-blur-sm">
                  <h3 className="text-sm font-medium text-amber-200 mb-1">
                    风味特点
                  </h3>
                  <p className="text-amber-100">{bean.flavor}</p>
                </div>

                {/* 产品规格 - 使用动态数据 */}
                <div className="grid grid-cols-2 gap-4 p-4 bg-black/30 backdrop-blur-sm rounded-lg border border-white/10">
                  <div>
                    <span className="text-sm text-gray-400">海拔高度</span>
                    <p className="font-medium text-white">{bean.altitude}</p>
                  </div>
                  <div>
                    <span className="text-sm text-gray-400">咖啡品种</span>
                    <p className="font-medium text-white">{bean.variety}</p>
                  </div>
                  <div>
                    <span className="text-sm text-gray-400">产区</span>
                    <p className="font-medium text-white">{bean.origin}</p>
                  </div>
                  <div>
                    <span className="text-sm text-gray-400">处理方式</span>
                    <p className="font-medium text-white">
                      {bean.treatment || "水洗处理"}
                    </p>
                  </div>
                </div>

                {/* 新增：产品规格详情 */}
                {(bean.specification || bean.package || bean.additives) && (
                  <div className="grid grid-cols-1 gap-3 p-4 bg-black/30 backdrop-blur-sm rounded-lg border border-white/10">
                    {bean.specification && (
                      <div className="flex justify-between">
                        <span className="text-sm text-gray-400">规格</span>
                        <p className="font-medium text-white text-right">
                          {bean.specification}
                        </p>
                      </div>
                    )}
                    {bean.package && (
                      <div className="flex justify-between">
                        <span className="text-sm text-gray-400">包装</span>
                        <p className="font-medium text-white text-right">
                          {bean.package}
                        </p>
                      </div>
                    )}
                    {bean.additives && (
                      <div className="flex justify-between">
                        <span className="text-sm text-gray-400">添加物</span>
                        <p className="font-medium text-white text-right">
                          {bean.additives}
                        </p>
                      </div>
                    )}
                  </div>
                )}

                {/* 产品描述 */}
                <div className="border-t border-white/10 pt-6">
                  <div className="bg-amber-500/20 border border-amber-400/30 rounded-lg p-4 mb-4 backdrop-blur-sm">
                    <h3 className="text-sm font-medium text-amber-200 mb-2">
                      产品特色
                    </h3>
                    <ul className="text-sm text-amber-100 space-y-1">
                      <li>• {bean.variety}品种，品质卓越</li>
                      <li>• 生长于海拔 {bean.altitude} </li>
                      <li>• 独特的 {bean.flavor} 风味层次</li>
                      <li>• 新鲜烘焙，保证最佳风味</li>
                      {bean.additives && <li>• {bean.additives}</li>}
                    </ul>
                  </div>
                </div>

                <div className="space-y-3 border-t border-white/10 pt-6">
                  <div className="text-center mb-4">
                    <div className="text-lg text-gray-200 mb-1">
                      想要了解更多或购买？
                    </div>
                    <div className="text-sm text-gray-400">
                      点击下方按钮前往我们的淘宝店铺
                    </div>
                  </div>

                  {bean.taobaoUrl && (
                    <a
                      href={bean.taobaoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block w-full bg-gradient-to-r from-orange-500 to-red-500 text-white text-center py-4 rounded-lg font-bold text-lg hover:from-orange-600 hover:to-red-600 transition-all duration-300 transform hover:scale-105 shadow-lg backdrop-blur-sm"
                    >
                      前往淘宝购买 🛒
                    </a>
                  )}
                </div>

                {/* 服务保障 */}
                <div className="bg-black/30 backdrop-blur-sm rounded-lg p-4 border border-white/10">
                  <h3 className="text-sm font-medium text-white mb-2">
                    服务保障
                  </h3>
                  <div className="grid grid-cols-2 gap-2 text-sm text-gray-300">
                    <div className="flex items-center">
                      <span className="w-2 h-2 bg-green-400 rounded-full mr-2"></span>
                      7天无理由退换
                    </div>
                    <div className="flex items-center">
                      <span className="w-2 h-2 bg-green-400 rounded-full mr-2"></span>
                      新鲜烘焙保证
                    </div>
                    <div className="flex items-center">
                      <span className="w-2 h-2 bg-green-400 rounded-full mr-2"></span>
                      顺丰快递包邮
                    </div>
                    <div className="flex items-center">
                      <span className="w-2 h-2 bg-green-400 rounded-full mr-2"></span>
                      品质保证
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* 产品详情标签页 */}
            <div className="border-t border-white/10">
              <div className="flex border-b border-white/10">
                <button
                  onClick={() => setActiveTab("details")}
                  className={`px-6 py-3 text-sm font-medium transition-colors ${
                    activeTab === "details"
                      ? "text-orange-400 border-b-2 border-orange-400"
                      : "text-gray-400 hover:text-white"
                  }`}
                >
                  产品详情
                </button>
                <button
                  onClick={() => setActiveTab("brewing")}
                  className={`px-6 py-3 text-sm font-medium transition-colors ${
                    activeTab === "brewing"
                      ? "text-orange-400 border-b-2 border-orange-400"
                      : "text-gray-400 hover:text-white"
                  }`}
                >
                  冲煮建议
                </button>
              </div>

              <div className="p-6">
                {activeTab === "details" && (
                  <div className="prose max-w-none">
                    <h3 className="text-lg font-medium mb-4 text-white">
                      关于 {bean.name}
                    </h3>
                    <p className="text-gray-300 mb-4">
                      {bean.name} 来自世界著名的咖啡产区 {bean.origin}
                      ，生长在海拔 {bean.altitude} 的优质环境中。 采用{" "}
                      {bean.variety} 品种，经过精心挑选和
                      {bean.treatment || "水洗"}处理，呈现出独特的 {bean.flavor}{" "}
                      风味特点。
                    </p>

                    <h4 className="font-medium mb-2 text-white">产品特色：</h4>
                    <ul className="list-disc list-inside text-gray-300 space-y-1 mb-4">
                      <li>{bean.variety}品种，品质卓越</li>
                      <li>生长于海拔 {bean.altitude}</li>
                      <li>独特的 {bean.flavor} 风味层次</li>
                      <li>新鲜烘焙，保证最佳风味</li>
                      <li>严格品控，每一粒都精心挑选</li>
                      {bean.additives && <li>{bean.additives}</li>}
                    </ul>

                    {/* 新增：详细规格信息 */}
                    <div className="mt-6 space-y-4">
                      <h4 className="font-medium mb-3 text-white">
                        产品规格：
                      </h4>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {bean.specification && (
                          <div className="bg-black/30 backdrop-blur-sm rounded-lg p-3 border border-white/10">
                            <span className="text-sm text-gray-400 block">
                              规格
                            </span>
                            <p className="font-medium text-white">
                              {bean.specification}
                            </p>
                          </div>
                        )}
                        {bean.package && (
                          <div className="bg-black/30 backdrop-blur-sm rounded-lg p-3 border border-white/10">
                            <span className="text-sm text-gray-400 block">
                              包装
                            </span>
                            <p className="font-medium text-white">
                              {bean.package}
                            </p>
                          </div>
                        )}
                        {bean.treatment && (
                          <div className="bg-black/30 backdrop-blur-sm rounded-lg p-3 border border-white/10">
                            <span className="text-sm text-gray-400 block">
                              处理方式
                            </span>
                            <p className="font-medium text-white">
                              {bean.treatment}
                            </p>
                          </div>
                        )}
                        {bean.additives && (
                          <div className="bg-black/30 backdrop-blur-sm rounded-lg p-3 border border-white/10">
                            <span className="text-sm text-gray-400 block">
                              添加物
                            </span>
                            <p className="font-medium text-white">
                              {bean.additives}
                            </p>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                )}

                {activeTab === "brewing" && (
                  <div className="prose max-w-none">
                    <h3 className="text-lg font-medium mb-4 text-white">
                      冲煮建议
                    </h3>

                    {/* 使用动态数据的冲煮参数 */}
                    <div className="mb-6 bg-amber-500/20 border border-amber-400/30 rounded-lg p-4 backdrop-blur-sm">
                      <h4 className="font-medium text-amber-200 mb-3">
                        推荐参数
                      </h4>
                      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                        {bean.dosage && (
                          <div>
                            <span className="text-amber-300 block">用量</span>
                            <p className="text-amber-100 font-medium">
                              {bean.dosage}
                            </p>
                          </div>
                        )}
                        {bean.temprecommendations && (
                          <div>
                            <span className="text-amber-300 block">水温</span>
                            <p className="text-amber-100 font-medium">
                              {bean.temprecommendations}
                            </p>
                          </div>
                        )}
                        {bean.gouacheratio && (
                          <div>
                            <span className="text-amber-300 block">粉水比</span>
                            <p className="text-amber-100 font-medium">
                              {bean.gouacheratio}
                            </p>
                          </div>
                        )}
                        {bean.extractiontime && (
                          <div>
                            <span className="text-amber-300 block">
                              萃取时间
                            </span>
                            <p className="text-amber-100 font-medium">
                              {bean.extractiontime}
                            </p>
                          </div>
                        )}
                      </div>
                    </div>

                    {/* 推荐冲煮方法 */}
                    {bean.brewingmethod && (
                      <div className="mb-6">
                        <h4 className="font-medium text-white mb-3">
                          推荐冲煮方法
                        </h4>
                        <div className="bg-black/30 backdrop-blur-sm rounded-lg p-4 border border-white/10">
                          <p className="text-gray-300">{bean.brewingmethod}</p>
                        </div>
                      </div>
                    )}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

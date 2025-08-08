import type { Metadata } from "next";

import "antd/dist/reset.css";
import "./globals.css";

export const metadata: Metadata = {
  title: "官网 | 星辰咖啡 Satorivia Cafe",
  description:
    "星辰咖啡 Satorivia Cafe 是一家专业的咖啡品牌，致力于为客户提供高质量的咖啡产品和服务。",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-cn">
      <body>{children}</body>
    </html>
  );
}

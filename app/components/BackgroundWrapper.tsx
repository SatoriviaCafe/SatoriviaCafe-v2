"use client";

import dynamic from "next/dynamic";

const StarsBackground = dynamic(() => import("./StarsBackground"), {
  ssr: false,
  loading: () => <div className="fixed inset-0 bg-black" />,
});

export default function BackgroundWrapper() {
  return <StarsBackground />;
}

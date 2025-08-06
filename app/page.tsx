"use client";

import About from "./components/About";
import BackgroundWrapper from "./components/BackgroundWrapper";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Products from "./components/Products";
import { useState, useEffect, useRef } from "react";

export default function HomePage() {
  const [isLoading, setIsLoading] = useState(true);
  const locomotiveScrollRef = useRef<any>(null);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  return (
    <>
      <div className="text-white">
        <Navbar />
        <BackgroundWrapper />
        <main>
          <Hero />
          <About />
          <Products />
        </main>
        <Footer />
      </div>
    </>
  );
}

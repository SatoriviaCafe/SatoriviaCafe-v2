import About from "./components/About";
import BackgroundWrapper from "./components/BackgroundWrapper";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Products from "./components/Products";

export default function HomePage() {
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

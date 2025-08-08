export default function Hero() {
  return (
    <section
      id="hero"
      className="
        flex min-h-screen flex-col items-center justify-center 
        px-4 text-center
        bg-cover bg-center"
    >
      <h1
        className="
          mb-4 font-bold
          text-4xl sm:text-5xl md:text-6xl lg:text-7xl"
      >
        Satorivia Cafe 星辰咖啡
      </h1>
      <p
        className="
          opacity-80
          text-base sm:text-lg md:text-xl"
      >
        世界精品 · 中国精制
      </p>
    </section>
  );
}

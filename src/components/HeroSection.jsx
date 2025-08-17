export default function HeroSection() {
  return (
    <section
      data-theme="dark"
      className="relative h-screen w-full overflow-hidden"
    >
      {/* Background Video */}
      <iframe
        src="https://www.youtube.com/embed/LsVoMYog1r8?autoplay=1&mute=1&controls=0&loop=1&playlist=LsVoMYog1r8"
        className="absolute top-0 left-0 w-full h-full pointer-events-none"
        allow="autoplay; fullscreen"
      ></iframe>

      {/* Overlay */}
      <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-50"></div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-start justify-center h-full px-6 md:px-20">
        {/* Semi-transparent + blur text */}
        <h1 className="text-5xl md:text-8xl font-extrabold blur-text">
          Drama Anak Bintan
        </h1>

        <p className="mt-6 max-w-xl text-lg md:text-xl text-gray-200">
          Komunitas film yang mengangkat cerita lokal penuh makna dan inspirasi.
        </p>

        <a
          href="/about"
          className="mt-6 px-6 py-3 bg-red-500 rounded-lg shadow-lg hover:bg-red-600 transition text-lg text-white"
        >
          Learn More
        </a>
      </div>
    </section>
  );
}

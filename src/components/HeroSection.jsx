export default function HeroSection() {
  return (
    <section className="relative w-full h-screen bg-black text-white">
      {/* Background Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black z-10"></div>

      {/* YouTube Embed */}
      <div className="absolute inset-0 overflow-hidden z-0">
        <iframe
          className="w-full h-full object-cover"
          src="https://www.youtube.com/embed/VIDEO_ID?autoplay=1&mute=1&controls=0&loop=1&playlist=LsVoMYog1r8"
          title="Trailer"
          frameBorder="0"
          allow="autoplay; fullscreen"
          allowFullScreen
        ></iframe>
      </div>

      {/* Content */}
      <div className="relative z-20 flex flex-col items-start justify-end h-full px-6 pb-20 md:px-20">
        <h1 className="text-4xl md:text-6xl font-extrabold mb-4">Drama Anak Bintan</h1>
        <p className="text-lg md:text-2xl max-w-xl mb-6">Film-film pendek yang memperkenalkan keindahan Bintan dengan gaya sinematik.</p>
        <button className="bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-md font-semibold">
          🎬 Tonton Sekarang
        </button>
      </div>
    </section>
  );
}

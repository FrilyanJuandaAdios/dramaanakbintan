import { Film } from "lucide-react";
export default function HeroSection() {
  return (
    <section className="relative w-full bg-black text-white">
      {/* MOBILE View */}
      <div className="block md:hidden">
        {/* YouTube Video (Setengah Layar) */}
        <div className="w-full h-[50vh] relative overflow-hidden">
          <iframe
            className="absolute inset-0 w-full h-full object-cover"
            src="https://www.youtube.com/embed/LsVoMYog1r8?autoplay=1&mute=1&controls=0&loop=1&playlist=LsVoMYog1r8"
            title="Trailer"
            frameBorder="0"
            allow="autoplay; fullscreen"
            allowFullScreen
          ></iframe>
        </div>

        {/* Text Content */}
        <div className="px-6 pt-6 pb-12 text-center">
          <h1 className="text-3xl font-extrabold mb-3">Drama Anak Bintan</h1>
          <p className="text-base mb-4">
            Film-film pendek yang memperkenalkan keindahan Bintan dengan gaya sinematik.
          </p>
       <button className="bg-red-500 hover:bg-red-600 text-white px-5 py-2 rounded-md font-semibold flex items-center">
      Tonton Sekarang
      <Film size={20} className="ml-2" />
    </button>
        </div>
      </div>

      {/* DESKTOP View */}
      <div className="hidden md:block relative w-full h-screen">
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black z-10"></div>
        <div className="absolute inset-0 overflow-hidden z-0">
          <iframe
            className="w-full h-full object-cover"
            src="https://www.youtube.com/embed/LsVoMYog1r8?autoplay=1&mute=1&controls=0&loop=1&playlist=LsVoMYog1r8"
            title="Trailer"
            frameBorder="0"
            allow="autoplay; fullscreen"
            allowFullScreen
          ></iframe>
        </div>
        <div className="relative z-20 flex flex-col items-start justify-end h-full px-6 pb-20 md:px-20">
          <h1 className="text-6xl font-extrabold mb-4">Drama Anak Bintan</h1>
          <p className="text-2xl max-w-xl mb-6">
            Film-film pendek yang memperkenalkan keindahan Bintan dengan gaya sinematik.
          </p>
          <button className="bg-red-500 hover:bg-red-600 text-white px-5 py-2 rounded-md font-semibold flex items-center">
      Tonton Sekarang
      <Film size={20} className="ml-2" />
    </button>
        </div>
      </div>
    </section>
  );
}

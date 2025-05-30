const films = [
  {
    title: "Kasut Untuk Mak Ngah",
    thumbnail: "/thumbnails/1.png",
    youtubeId: "uUGi6uewrDc&t=10s",
  },
  {
    title: "Baju Kurung",
    thumbnail: "/thumbnails/2.png",
    youtubeId: "qX2PZhwS8Mk&t=11s",
  },
  {
    title: "Dibalik Luka Lama",
    thumbnail: "/thumbnails/3.png",
    youtubeId: "46DEVBiWbmc",
  },
  {
    title: "Sssst!",
    thumbnail: "/thumbnails/4.png",
    youtubeId: "6sbGrUXYSFA",
  },
  {
    title: "Bapak Aku Pelaut",
    thumbnail: "/thumbnails/5.png",
    youtubeId: "EjzFkVyJ91Q",
  },
  {
    title: "Konde Mak Cik",
    thumbnail: "/thumbnails/6.JPG",
    youtubeId: "EjzFkVyJ91Q",
  },
];

export default function FilmSection() {
  return (
    <section id="film" className="bg-black text-white px-6 md:px-20 py-12">
      <h2 className="text-3xl md:text-4xl font-bold mb-10 text-center">🎞️ Film Kami</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {films.map((film, index) => (
          <a
            key={index}
            href={`https://www.youtube.com/watch?v=${film.youtubeId}`}
            target="_blank"
            rel="noopener noreferrer"
            className="block w-full"
          >
            <div className="relative aspect-video w-full overflow-hidden rounded-xl shadow-lg hover:scale-105 transition-transform duration-300">
              <img
                src={film.thumbnail}
                alt={film.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-0 w-full bg-gradient-to-t from-black via-transparent to-transparent px-4 py-2">
                <p className="text-sm md:text-base font-semibold">{film.title}</p>
              </div>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}

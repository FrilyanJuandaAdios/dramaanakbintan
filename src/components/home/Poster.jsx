import Image from "next/image";

// Semua ukuran teks memakai satuan cqw agar tipografi poster ikut skala lebar kartu
function Frame({ children, className = "" }) {
  return (
    <div
      className={`relative aspect-[2/3] w-full overflow-hidden rounded-[3px] bg-black [container-type:inline-size] ${className}`}
    >
      {children}
    </div>
  );
}

function Studio({ className = "text-white/60" }) {
  return <p className={`text-[3cqw] uppercase tracking-[0.45em] ${className}`}>ADAB Productions</p>;
}

// Poster dari thumbnail YouTube, di-crop ke bagian subjek
export function ReleasedPoster({ film, sizes }) {
  return (
    <Frame>
      <div
        className="absolute inset-0"
        style={film.zoom ? { transform: `scale(${film.zoom})`, transformOrigin: "50% 100%" } : undefined}
      >
        <Image
          src={film.poster}
          alt=""
          fill
          sizes={sizes}
          style={{ objectPosition: film.focus }}
          className="object-cover saturate-[0.85] contrast-[1.08]"
        />
      </div>
      <div className="absolute inset-x-0 top-0 h-1/3 bg-gradient-to-b from-black/80 to-transparent" />
      <div className="absolute inset-x-0 bottom-0 h-[65%] bg-gradient-to-t from-black via-black/75 to-transparent" />

      <div className="absolute inset-x-0 top-0 px-[6cqw] pt-[10cqw] text-center">
        <Studio />
      </div>

      <div className="absolute inset-x-0 bottom-0 p-[7cqw] text-center">
        <p className="font-cinema italic text-[4.6cqw] leading-snug text-white/75 mb-[5cqw]">{film.tagline}</p>
        <h3 className="font-cinema text-[11cqw] leading-[0.95] text-white">{film.title}</h3>
        <div className="mx-auto my-[4.5cqw] h-px w-[18cqw] bg-white/30" />
        <p className="text-[2.6cqw] uppercase tracking-[0.3em] text-white/45">{film.genre} · Film Pendek</p>
      </div>
    </Frame>
  );
}

export function LaylaPoster({ sizes }) {
  return (
    <Frame>
      <Image src="/Layla/Layla.png" alt="" fill sizes={sizes} className="object-cover object-[68%_30%]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_60%_35%,transparent_30%,rgba(0,0,0,0.65)_100%)]" />
      <div className="absolute inset-x-0 bottom-0 h-[60%] bg-gradient-to-t from-black via-black/70 to-transparent" />

      <div className="absolute inset-x-0 top-0 px-[8cqw] pt-[12cqw] text-center">
        <p className="font-cinema italic text-[4.4cqw] leading-snug text-white/80">
          Karena beberapa cerita tidak selesai ketika seseorang pergi.
        </p>
      </div>

      <div className="absolute inset-x-0 bottom-0 p-[7cqw] text-center">
        <Image
          src="/Layla/LaylaLogo.png"
          alt=""
          width={1052}
          height={372}
          sizes="300px"
          className="mx-auto w-[84%] h-auto"
        />
        <p className="mt-[6cqw] text-[2.2cqw] uppercase tracking-[0.18em] leading-[1.9] text-white/40">
          ADAB Productions <span className="text-white/25">mempersembahkan</span> · Sutradara{" "}
          <span className="text-white/70">Frilyan Juanda Adios</span> · Produser{" "}
          <span className="text-white/70">Tahani Vidra Putri</span> · Penulis{" "}
          <span className="text-white/70">Rafly Kynaz</span>
        </p>
        <p className="mt-[4cqw] text-[3.4cqw] uppercase tracking-[0.4em] text-[#ecd568]">Segera · 2027</p>
      </div>
    </Frame>
  );
}

// Poster tipografis tanpa foto: senja dan lingkaran waktu
export function SeuntaiPoster() {
  return (
    <Frame className="bg-[#120f1c]">
      <div className="absolute inset-0 bg-gradient-to-b from-[#0d0b16] via-[#2a1f33] to-[#b77a4f]" />
      <div className="absolute inset-x-0 bottom-0 h-1/2 bg-[radial-gradient(ellipse_at_50%_100%,rgba(255,190,130,0.45),transparent_65%)]" />

      {/* Lingkaran jam yang hampir penuh */}
      <svg viewBox="0 0 100 100" className="absolute left-1/2 top-[22%] w-[62%] -translate-x-1/2" aria-hidden>
        <circle cx="50" cy="50" r="46" fill="none" stroke="rgba(255,255,255,0.18)" strokeWidth="0.4" />
        <circle
          cx="50"
          cy="50"
          r="46"
          fill="none"
          stroke="rgba(255,226,190,0.75)"
          strokeWidth="0.6"
          strokeDasharray="289"
          strokeDashoffset="18"
          transform="rotate(-90 50 50)"
        />
        <circle cx="50" cy="4" r="1.3" fill="#ffe2be" transform="rotate(-22 50 50)" />
        <line x1="50" y1="50" x2="50" y2="14" stroke="rgba(255,255,255,0.35)" strokeWidth="0.4" transform="rotate(-22 50 50)" />
      </svg>

      <div className="absolute inset-x-0 top-0 px-[6cqw] pt-[10cqw] text-center">
        <Studio className="text-white/55" />
      </div>

      <div className="absolute inset-x-0 bottom-0 p-[7cqw] text-center">
        <h3 className="font-cinema italic text-[12cqw] leading-[0.9] text-white">Seuntai Rindu</h3>
        <p className="font-cinema text-[6cqw] text-white/85 mt-[2cqw]">di Ujung Waktu</p>
        <div className="mx-auto my-[4.5cqw] h-px w-[18cqw] bg-white/40" />
        <p className="text-[2.6cqw] uppercase tracking-[0.3em] text-white/60">Drama · Segera</p>
      </div>
    </Frame>
  );
}

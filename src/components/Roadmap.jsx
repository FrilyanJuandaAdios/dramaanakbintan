export default function Roadmap() {
  const roadmapItems = [
    {
      year: "2023",
      title: "Awal Berdiri",
      description:
        "Drama Anak Bintan terbentuk dan mulai membuat film pendek untuk memperkenalkan lokasi wisata di Bintan.",
    },
    {
      year: "2024",
      title: "Produksi Mandiri",
      description:
        "Mulai produksi film dengan kru internal. Rilis beberapa film dokumenter dan fiksi pendek di YouTube.",
    },
    {
      year: "2025",
      title: "Penguatan Komunitas",
      description:
        "Membuka pendaftaran anggota komunitas film lokal dan memperluas kerja sama dengan seniman Bintan.",
    },
    {
      year: "2026",
      title: "Festival & Distribusi",
      description:
        "Menargetkan partisipasi di festival film lokal & internasional, serta distribusi digital secara lebih luas.",
    },
  ];

  return (
    <section className="bg-[#0d0d0d] text-white px-6 md:px-20 py-16">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          📅 Roadmap Kami
        </h2>

        <ol className="relative border-l border-gray-700">
          {roadmapItems.map((item, index) => (
            <li key={index} className="mb-10 ml-4">
              <div className="absolute w-3 h-3 bg-red-500 rounded-full -left-1.5 border border-white" />
              <time className="mb-1 text-sm font-medium text-gray-400">{item.year}</time>
              <h3 className="text-xl font-semibold">{item.title}</h3>
              <p className="text-gray-300">{item.description}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

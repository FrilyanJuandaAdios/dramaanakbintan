"use client"
export default function Services() {
  return (
    <section className="bg-[#111] text-white px-6 md:px-20 py-16">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-10">🎬 Layanan Kami</h2>
        <p className="text-gray-300 max-w-3xl mx-auto mb-12">
          Drama Anak Bintan menyediakan jasa video dan fotografi dengan sentuhan sinematik yang profesional untuk berbagai kebutuhan, mulai dari promosi wisata, event, hingga project personal.
        </p>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Service 1 */}
          <div className="bg-gray-900 p-6 rounded-xl shadow-lg hover:shadow-red-600 transition-shadow">
            <h3 className="text-xl font-semibold mb-4">🎥 Produksi Video Sinematik</h3>
            <p className="text-gray-400">
              Video berkualitas tinggi dengan storytelling yang kuat dan visual memukau, cocok untuk promosi, dokumenter, dan film pendek.
            </p>
          </div>

          {/* Service 2 */}
          <div className="bg-gray-900 p-6 rounded-xl shadow-lg hover:shadow-red-600 transition-shadow">
            <h3 className="text-xl font-semibold mb-4">📸 Fotografi Profesional</h3>
            <p className="text-gray-400">
              Layanan fotografi dengan konsep sinematik untuk event, produk, maupun portofolio pribadi dengan hasil yang artistik dan menarik.
            </p>
          </div>
        </div>

        <button
          className="mt-12 bg-red-600 hover:bg-red-700 px-8 py-3 rounded-full font-semibold shadow-lg transition"
          onClick={() => window.location.href = '#contact'}
        >
          Hubungi Kami
        </button>
      </div>
    </section>
  );
}

export default function JoinCommunity() {
  return (
    <section
      id="join-community"
      className="relative bg-cover bg-center bg-no-repeat py-20 px-6 md:px-20 text-white"
      style={{ backgroundImage: "url('/comunity-bg.jpg')" }}
    >
      {/* Overlay hitam semi transparan supaya teks jelas */}
      <div className="absolute inset-0 bg-black bg-opacity-60"></div>

      <div className="relative max-w-4xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-6">Gabung Komunitas Drama Anak Bintan</h2>
        <p className="mb-10 text-lg max-w-xl mx-auto">
          Jadi bagian dari komunitas kami dan dapatkan info terbaru, event khusus, serta kesempatan kolaborasi kreatif.
        </p>

        <form className="max-w-md mx-auto flex flex-col gap-4 bg-black bg-opacity-50 p-8 rounded-lg shadow-lg">
          <input
            type="text"
            placeholder="Nama lengkap"
            className="p-3 rounded border border-gray-300 text-black"
            required
          />
          <input
            type="number"
            placeholder="Nomor HP / WA"
            className="p-3 rounded border border-gray-300 text-black"
            required
          />
          <button
            type="submit"
            className="bg-red-500 hover:bg-red-600 transition py-3 rounded font-semibold"
          >
            Daftar Sekarang
          </button>
        </form>
      </div>
    </section>
  );
}

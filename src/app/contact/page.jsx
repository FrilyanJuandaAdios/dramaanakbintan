"use client";
import { useState } from "react";
import { motion } from "framer-motion";

const programs = [
  "Workshop Film",
  "Screening & Diskusi",
  "Produksi Bersama",
  "Komunitas Kreatif",
];

export default function ContactPage() {
  const [form, setForm] = useState({
    name: "",
    address: "",
    whatsapp: "",
    program: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (form.name && form.address && form.whatsapp && form.program) {
      setSubmitted(true);
      // 👉 di sini nanti bisa ditambah API POST ke backend/Google Sheets/Email
      console.log("Form submitted:", form);
    }
  };

  return (
    <main className="relative min-h-screen bg-black text-white overflow-hidden">
      {/* Background accent */}
      <div className="absolute inset-0">
        <div className="absolute top-1/3 left-1/4 w-[400px] h-[400px] bg-red-600 rounded-full mix-blend-screen filter blur-3xl opacity-25 animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-[350px] h-[350px] bg-purple-600 rounded-full mix-blend-screen filter blur-3xl opacity-20 animate-pulse" />
        <div className="absolute inset-0 bg-black/60 backdrop-blur-md" />
      </div>

      {/* Hero */}
      <section className="relative h-[50vh] flex flex-col items-center justify-center text-center px-4 z-10">
        <h1 className="text-5xl md:text-7xl font-bold mb-4">Contact Us</h1>
        <p className="text-lg md:text-2xl text-gray-300 max-w-2xl">
          Mari berkolaborasi dan berkembang bersama lewat program kami
        </p>
      </section>

      {/* Form */}
      <section className="relative z-10 py-10 px-6 flex justify-center">
        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="w-full max-w-2xl p-8 rounded-2xl bg-white/10 border border-white/20 backdrop-blur-xl shadow-xl space-y-6"
        >
          {!submitted ? (
            <>
              {/* Nama */}
              <div>
                <label className="block text-sm font-semibold mb-2">
                  Nama Lengkap
                </label>
                <input
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/30 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-500"
                  placeholder="Masukkan nama anda"
                  required
                />
              </div>

              {/* Alamat */}
              <div>
                <label className="block text-sm font-semibold mb-2">
                  Alamat
                </label>
                <textarea
                  name="address"
                  value={form.address}
                  onChange={handleChange}
                  rows={3}
                  className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/30 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-500"
                  placeholder="Alamat lengkap anda"
                  required
                />
              </div>

              {/* WhatsApp */}
              <div>
                <label className="block text-sm font-semibold mb-2">
                  Nomor WhatsApp
                </label>
                <input
                  type="tel"
                  name="whatsapp"
                  value={form.whatsapp}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/30 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-500"
                  placeholder="Contoh: 0812xxxx"
                  required
                />
              </div>

              {/* Program */}
              <div>
                <label className="block text-sm font-semibold mb-2">
                  Pilih Program
                </label>
                <select
                  name="program"
                  value={form.program}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/30 text-white focus:outline-none focus:ring-2 focus:ring-red-500"
                  required
                >
                  <option value="">-- Pilih Program --</option>
                  {programs.map((p, idx) => (
                    <option key={idx} value={p} className="bg-black text-white">
                      {p}
                    </option>
                  ))}
                </select>
              </div>

              {/* Tombol */}
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                type="submit"
                className="w-full py-3 rounded-xl bg-red-600 hover:bg-red-700 transition font-semibold"
              >
                Kirim
              </motion.button>
            </>
          ) : (
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              className="text-center space-y-4"
            >
              <h2 className="text-2xl font-bold text-green-400">
                Terima kasih!
              </h2>
              <p className="text-gray-300">
                Data anda sudah terkirim. Kami akan segera menghubungi anda
                lewat WhatsApp.
              </p>
            </motion.div>
          )}
        </motion.form>
      </section>
    </main>
  );
}

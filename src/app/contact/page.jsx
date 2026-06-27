"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { MessageCircle, Mail, MapPin, ArrowRight } from "lucide-react";
import Footer from "@/components/Footer";

const programs = [
  "Workshop Film",
  "Screening",
  "Ikut Produksi Film",
  "Lainnya",
];

const API_URL = "/api/contact";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7 } },
};

export default function ContactPage() {
  const [form, setForm] = useState({ name: "", address: "", whatsapp: "", program: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState("");
  const [toastMessage, setToastMessage] = useState("");
  const [toastType, setToastType] = useState("success");

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitError("");
    setToastMessage("");

    if (!form.name || !form.address || !form.whatsapp || !form.program) {
      setSubmitError("Semua field wajib diisi.");
      return;
    }

    setIsSubmitting(true);
    try {
      const response = await fetch(API_URL, {
        method: "POST",
        cache: "no-cache",
        body: new URLSearchParams(form),
      });

      if (!response.ok) {
        const json = await response.json().catch(() => null);
        throw new Error(json?.error || "Gagal mengirim data.");
      }

      const json = await response.json().catch(() => null);
      if (!json?.success) throw new Error(json?.error || "Gagal mengirim data.");

      setForm({ name: "", address: "", whatsapp: "", program: "" });
      setToastType("success");
      setToastMessage("Terima kasih! Kami akan segera menghubungi kamu.");
      setTimeout(() => setToastMessage(""), 4000);
    } catch (error) {
      console.error("Error sending contact form:", error);
      setSubmitError("Maaf, terjadi masalah. Silakan coba lagi nanti.");
      setToastType("error");
      setToastMessage("Gagal mengirim. Coba lagi nanti.");
      setTimeout(() => setToastMessage(""), 4000);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <main className="relative min-h-screen bg-black text-white overflow-hidden">
      {/* Ambient glow */}
      <div className="pointer-events-none fixed inset-0">
        <div className="absolute top-1/4 left-1/3 w-[500px] h-[500px] bg-red-700 rounded-full mix-blend-screen filter blur-[120px] opacity-15" />
        <div className="absolute bottom-1/3 right-1/4 w-[400px] h-[400px] bg-red-900 rounded-full mix-blend-screen filter blur-[100px] opacity-10" />
      </div>

      {/* Hero */}
      <section className="relative h-screen flex flex-col items-center justify-center text-center px-6 z-10">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-xs uppercase tracking-[0.4em] text-red-500 mb-6 font-semibold"
        >
          Drama Anak Bintan
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="text-6xl md:text-8xl font-bold mb-6 leading-tight"
        >
          Ayo <span className="text-red-500">Ngobrol</span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="text-lg md:text-xl text-gray-400 max-w-xl leading-relaxed"
        >
          Tertarik ikut program kami, penasaran dengan produksi kami, atau sekadar
          ingin kenalan? Kirim pesanmu — kami baca setiap satu.
        </motion.p>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="mt-12 flex flex-col items-center gap-1"
        >
          <span className="text-xs text-gray-600 uppercase tracking-widest">Scroll</span>
          <div className="w-px h-12 bg-gradient-to-b from-gray-600 to-transparent" />
        </motion.div>
      </section>

      {/* Content */}
      <section className="relative z-10 px-6 pb-32 max-w-5xl mx-auto">
        <div className="grid md:grid-cols-2 gap-6 items-start">

          {/* Left — info */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="space-y-5"
          >
            {/* What happens next */}
            <div className="rounded-3xl bg-white/5 border border-white/10 p-8">
              <p className="text-xs uppercase tracking-widest text-red-500 mb-6 font-semibold">
                Yang terjadi setelah kamu kirim
              </p>
              <ol className="space-y-5">
                {[
                  { step: "01", text: "Kami baca pesanmu dengan sungguh-sungguh — bukan bot, manusia beneran." },
                  { step: "02", text: "Tim kami akan menghubungi kamu lewat WhatsApp dalam 1–2 hari kerja." },
                  { step: "03", text: "Kita ngobrol santai, kenalan, dan lihat apakah kita bisa bergerak bersama." },
                ].map((item) => (
                  <li key={item.step} className="flex gap-4 items-start">
                    <span className="text-xs font-mono text-red-500 font-bold mt-0.5 shrink-0">{item.step}</span>
                    <p className="text-gray-300 text-sm leading-relaxed">{item.text}</p>
                  </li>
                ))}
              </ol>
            </div>

            {/* Contact info */}
            <div className="rounded-3xl bg-white/5 border border-white/10 p-8 space-y-4">
              <p className="text-xs uppercase tracking-widest text-gray-500 mb-5 font-semibold">Atau hubungi langsung</p>
              <a
                href="https://wa.me/6285893883536"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-4 group"
              >
                <div className="w-10 h-10 rounded-2xl bg-white/8 flex items-center justify-center shrink-0 group-hover:bg-red-500/15 transition-colors">
                  <MessageCircle className="h-4 w-4 text-gray-400 group-hover:text-red-400 transition-colors" />
                </div>
                <div>
                  <p className="text-xs text-gray-500 mb-0.5">WhatsApp</p>
                  <p className="text-white text-sm font-medium group-hover:text-red-400 transition-colors">+62 858 9388 3536</p>
                </div>
              </a>
              <a
                href="mailto:dramaanakbintan@gmail.com"
                className="flex items-center gap-4 group"
              >
                <div className="w-10 h-10 rounded-2xl bg-white/8 flex items-center justify-center shrink-0 group-hover:bg-red-500/15 transition-colors">
                  <Mail className="h-4 w-4 text-gray-400 group-hover:text-red-400 transition-colors" />
                </div>
                <div>
                  <p className="text-xs text-gray-500 mb-0.5">Email</p>
                  <p className="text-white text-sm font-medium group-hover:text-red-400 transition-colors">dramaanakbintan@gmail.com</p>
                </div>
              </a>
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-2xl bg-white/8 flex items-center justify-center shrink-0">
                  <MapPin className="h-4 w-4 text-gray-400" />
                </div>
                <div>
                  <p className="text-xs text-gray-500 mb-0.5">Lokasi</p>
                  <p className="text-white text-sm font-medium">Bintan, Kepulauan Riau</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right — form */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <form
              onSubmit={handleSubmit}
              className="rounded-3xl bg-white/5 border border-white/10 p-8 space-y-5"
            >
              <p className="text-xs uppercase tracking-widest text-gray-500 mb-6 font-semibold">Form pendaftaran</p>

              {/* Nama */}
              <div className="space-y-2">
                <label className="text-xs uppercase tracking-widest text-gray-500 font-semibold">
                  Nama Lengkap
                </label>
                <input
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-2xl bg-white/5 border border-white/10 text-white placeholder-gray-600 focus:outline-none focus:border-red-500/50 focus:bg-white/8 transition-all text-sm"
                  placeholder="Nama kamu"
                  required
                />
              </div>

              {/* Alamat */}
              <div className="space-y-2">
                <label className="text-xs uppercase tracking-widest text-gray-500 font-semibold">
                  Alamat
                </label>
                <textarea
                  name="address"
                  value={form.address}
                  onChange={handleChange}
                  rows={3}
                  className="w-full px-4 py-3 rounded-2xl bg-white/5 border border-white/10 text-white placeholder-gray-600 focus:outline-none focus:border-red-500/50 focus:bg-white/8 transition-all text-sm resize-none"
                  placeholder="Kota atau alamat lengkap"
                  required
                />
              </div>

              {/* WhatsApp */}
              <div className="space-y-2">
                <label className="text-xs uppercase tracking-widest text-gray-500 font-semibold">
                  Nomor WhatsApp
                </label>
                <input
                  type="tel"
                  name="whatsapp"
                  value={form.whatsapp}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-2xl bg-white/5 border border-white/10 text-white placeholder-gray-600 focus:outline-none focus:border-red-500/50 focus:bg-white/8 transition-all text-sm"
                  placeholder="0812xxxx"
                  required
                />
              </div>

              {/* Program */}
              <div className="space-y-2">
                <label className="text-xs uppercase tracking-widest text-gray-500 font-semibold">
                  Yang Kamu Minati
                </label>
                <select
                  name="program"
                  value={form.program}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-2xl bg-white/5 border border-white/10 text-white focus:outline-none focus:border-red-500/50 focus:bg-white/8 transition-all text-sm"
                  required
                >
                  <option value="" className="bg-black text-gray-400">Pilih program</option>
                  {programs.map((p, idx) => (
                    <option key={idx} value={p} className="bg-black text-white">{p}</option>
                  ))}
                </select>
              </div>

              {submitError && (
                <div className="rounded-2xl bg-red-500/10 border border-red-500/30 text-red-300 px-4 py-3 text-sm">
                  {submitError}
                </div>
              )}

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full flex items-center justify-center gap-2 py-3.5 rounded-2xl bg-red-500 hover:bg-red-600 disabled:bg-red-500/40 disabled:cursor-not-allowed transition-colors text-white text-sm font-semibold mt-2"
              >
                {isSubmitting ? "Mengirim..." : (
                  <>Kirim Pesan <ArrowRight className="h-4 w-4" /></>
                )}
              </button>
            </form>
          </motion.div>
        </div>
      </section>

      {/* Toast */}
      {toastMessage && (
        <div
          className={`fixed left-1/2 bottom-8 z-50 -translate-x-1/2 rounded-2xl px-6 py-4 text-sm font-medium shadow-2xl border transition-all duration-300 ${
            toastType === "success"
              ? "bg-emerald-500/20 border-emerald-500/30 text-emerald-300"
              : "bg-red-500/20 border-red-500/30 text-red-300"
          }`}
        >
          {toastMessage}
        </div>
      )}

      <Footer />
    </main>
  );
}

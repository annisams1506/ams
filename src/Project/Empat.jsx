import foto from "../images/adminsekolah.png";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import * as Icons from "lucide-react";

export default function Empat() {
  return (
    <motion.section
      className="px-6 py-20 bg-white dark:bg-gray-900 min-h-screen font-mono transition-colors duration-500"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      <div className="max-w-4xl mx-auto">
        <Link to="/" className="text-sm text-blue-500 hover:underline block mb-6">
          &larr; Back to Projects
        </Link>

        <motion.h1
          className="text-3xl sm:text-4xl font-semibold text-gray-900 dark:text-white mb-2"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          Aplikasi Administrasi Sekolah - VB. NET
        </motion.h1>

        <p className="text-xs sm:text-sm text-gray-500 dark:text-gray-400 mb-6 italic">
          Created on November 2020 by Annisa Maulana Sabilla · Last Updated on October 2022
        </p>

        <motion.img
          src={foto}
          alt="Aplikasi Administrasi"
          className="relative mt-10 mx-4 sm:mx-8 md:mx-20 items-center rounded-md h-[480px] mb-10 border border-gray-200 dark:border-gray-700 shadow-lg object-cover"
          initial={{ scale: 0.95, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5 }}
        />

        {/* Repository & Demo */}
        <section className="pb-8">
          <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-3">🔗 Repository & Demo</h2>
          <motion.div
            className="flex flex-wrap gap-4"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            <a
              href="https://github.com/annisams1506/Aplikasi-Administrasi-Sekolah-SPP-Penggajian-Guru"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm px-4 py-2 rounded border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700 transition text-gray-900 dark:text-white font-semibold shadow-sm"
            >
              <Icons.Github className="w-4 h-4" /> Repository
            </a>
            <a
              href="https://drive.google.com/file/d/1ZsdSjvPHH1EMtM02PsdFsvQohoyBQ-9L/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm px-4 py-2 rounded border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700 transition text-gray-900 dark:text-white font-semibold shadow-sm"
            >
              <Icons.PlayCircle className="w-4 h-4" /> View Demo (Google Drive)
            </a>
          </motion.div>
        </section>

        {/* Overview */}
        <section className="py-8">
          <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-3">📝 Overview</h2>
          <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
            Aplikasi administrasi sekolah untuk mengelola pembayaran SPP siswa, penggajian guru, serta pengolahan dan pelaporan data.
          </p>
        </section>

        {/* Tech Stack */}
        <section className="py-8">
          <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-3">🛠️ Tech Stack</h2>
          <ul className="list-disc list-inside text-sm text-gray-700 dark:text-gray-300">
            <li><strong>VB. NET</strong>: Tools utama untuk pengembangan aplikasi dekstop berbasis Windows.</li>
            <li><strong>MySQL</strong>: Sebagai Database, diakses melalui phpmyadmin.</li>
            <li><strong>Crystal Report</strong>: Tools untuk membuat dan mencetak laporan data (pembayaran, penggajian dan rekap data).</li>
            <li><strong>Microsoft Visual Studio</strong>: IDE utama untuk desain UI, Coding dan Debugging.</li>
            <li><strong>ODBC Connector</strong>: Koneksi antara VB. NET dan MySQL.</li>
          </ul>
        </section>

        {/* Features */}
        <section className="py-8">
          <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-3">✨ Features</h2>
          <ul className="list-disc list-inside text-sm text-gray-700 dark:text-gray-300 space-y-1">
            <li>🔸 Login Multi - User: Sistem autentikasi untuk admin dan staff.</li>
            <li>🔸 Management Data: CRUD data Siswa, Guru, Petugas.</li>
            <li>🔸 Pembayaran SPP: Pencatatan transaksi pembayaran SPP siswa per bulan.</li>
            <li>🔸 Penggajian Guru: Proses input gaji.</li>
            <li>🔸 Report Pembayaran SPP: Cetak laporan pembayaran SPP berdasarkan periode tertentu.</li>
            <li>🔸 Report Penggajian Guru: Rekap dan cetak slip gaji guru bulanan.</li>
            <li>🔸 Data Search & Filtering: Fitur pencarian dan penyaringan data untuk kemudahan akses dan manajemen.</li>
          </ul>
        </section>

        {/* Kesimpulan */}
        <section className="py-8">
          <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-3">🧠 Kesimpulan</h2>
          <p className="text-sm text-gray-700 dark:text-gray-300 mb-2 leading-relaxed">
            Proyek ini memberikan pengalaman praktis dalam membangun aplikasi desktop berbasis VB.NET untuk kebutuhan administrasi sekolah. Dengan fitur-fitur terintegrasi dan koneksi database MySQL, aplikasi ini mampu mendukung efisiensi pengelolaan pembayaran SPP, penggajian guru, serta laporan data secara sistematis dan terstruktur.
          </p>
        </section>

        {/* Footer */}
        <div className="mt-12 border-t pt-4 text-center">
          <p className="text-xs text-gray-500 dark:text-gray-400 mb-3">🚩 Thanks For Reading!</p>
          <Link to="/" className="text-sm text-blue-500 hover:underline">
            🔁 Lihat Proyek Lainnya
          </Link>
        </div>
      </div>
    </motion.section>
  );
}

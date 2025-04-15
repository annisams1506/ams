import alfatih from "../images/soula1.png";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import * as Icons from "lucide-react";

export default function Satu() {
  return (
    <motion.section
      className="px-6 py-20 bg-white dark:bg-gray-900 min-h-screen font-mono transition-colors duration-500"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      <div className="max-w-4xl mx-auto">
        <Link
          to="/project"
          className="text-sm text-blue-500 hover:underline block mb-6"
        >
          &larr; Back to Projects
        </Link>

        <motion.h1
          className="text-3xl sm:text-4xl font-semibold text-gray-900 dark:text-white mb-2"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
           WEBGIS SOULAFISH (South Lampung Fish & Chlorophyll Insight )
        </motion.h1>

        <p className="text-xs sm:text-sm text-gray-500 dark:text-gray-400 mb-6 italic">
          Created on December 2024 by Annisa Maulana Sabilla · Last Updated on December 2024
        </p>

        <motion.img
          src={alfatih}
          alt="Soulafish Project"
          className="relative mt-10 mx-4 sm:mx-8 md:mx-20 items-center rounded-md h-[480px] mb-10 border border-gray-200 dark:border-gray-700 shadow-lg"
          initial={{ scale: 0.95, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5 }}
        />

        <div className="divide-y divide-gray-200 dark:divide-gray-700">
          <section className="pb-8">
            <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-3">🔗 Repository & Live Site</h2>
            <div className="flex gap-4">
              <a href="https://github.com/annisams1506/soulafish" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm px-4 py-2 rounded border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700 transition text-gray-900 dark:text-white font-semibold shadow-sm">
                <Icons.Github className="w-4 h-4" /> Repository
              </a>
              <a href="https://soulafish.netlify.app/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm px-4 py-2 rounded border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700 transition text-gray-900 dark:text-white font-semibold shadow-sm">
                <Icons.Link className="w-4 h-4" /> Open Live Site
              </a>
            </div>
          </section>

          <section className="py-8">
            <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-3">📝 Overview</h2>
            <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
            SoulaFish adalah platform WebGIS interaktif yang dikembangkan untuk membantu nelayan, peneliti, dan pemangku kepentingan perikanan dalam mengidentifikasi lokasi penangkapan ikan yang potensial di wilayah Lampung Selatan. Website ini mengintegrasikan data suhu permukaan laut (SPL) dan konsentrasi klorofil-a menggunakan hasil analisis spasial berbasis machine learning (Random Forest) 
            untuk memberikan informasi berbasis data yang akurat dan mudah dipahami.
            </p>
          </section>

          <section className="py-8">
            <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-3">🛠️ The Tech Stack</h2>
            <ul className="list-disc list-inside text-sm text-gray-700 dark:text-gray-300">
              <li><strong>React.js</strong>: Membangun antarmuka pengguna interaktif dan modern.</li>
              <li><strong>Tailwind CSS</strong>: Styling cepat dan responsif dengan utility-first framework.</li>
              <li><strong>Leaflet.js</strong>: Library Java Script untuk menampilkan peta dan pop up interaktif.</li>
              <li><strong>ArcGIS</strong>: Software yang digunakan untuk mengolah dan menganalisis data suhu serta data klorofil untuk menentukan area potensial.</li>
              <li><strong>Random Forest</strong>: </li>
              <li><strong>Koordinat JSON</strong>: Format Data Spasial yang berisi informasi koordinat geografis area potensial.</li>
              <li><strong>Chart.Js</strong>: Tools untuk mennghasilkan grafik yang digunakan untuk data dan informasi.</li>
            </ul>
          </section>

          <section className="py-8">
            <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-3">✨ Features</h2>
            <ul className="list-disc list-inside text-sm text-gray-700 dark:text-gray-300 space-y-1">
              <li>🔸 Navbar: Menu navigasi  (Home, Maps, Data & Information, About).</li>
              <li>🔸 Maps: Peta Interaktif untuk menampilkan wilayah potensial yang dilengkapi marker dan pop up berdasarkan analisis suhu & klorofil</li>
              <li>🔸 Data Information: Sebuah menu Visualisasi Data yang menyajikan Grafik Interaktif</li>
              <li>🔸 About: Menampilkan Sejarah dibagun-nya website soulafish dan menjelaskan background Logo</li>
              <li>🔸 Unduh CSV: Untuk mengunduh data potensial yang telah dilakukan dalam bentuk CSV (Excel)</li>
           
            </ul>
          </section>

          <section className="py-8">
            <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-3">🧠 Kesimpulan</h2>
            <p className="text-sm text-gray-700 dark:text-gray-300 mb-2 leading-relaxed">
            royek ini memperkuat pengalaman saya di bidang pengembangan web dan data spasial, serta berhasil meraih Top 10 Best Project dalam Perlombaan tingkat Kampus.
            </p>
            <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
              Jika kamu ingin mencoba langsung websitenya, ini link demo-nya <a href="https://soulafish.netlify.app/" target="_blank" rel="noopener noreferrer" className="text-blue-500 underline">link ini</a>!
            </p>
          </section>
        </div>

        <div className="mt-12 border-t pt-4 text-center">
          <p className="text-xs text-gray-500 dark:text-gray-400 mb-3">🚩 Thanks For Reading!</p>
          <Link
            to="/project"
            className="text-sm text-blue-500 hover:underline"
          >
            🔁 Lihat Proyek Lainnya
          </Link>
        </div>
      </div>
    </motion.section>
  );
}

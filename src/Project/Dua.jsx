import alfatih from "../images/alfatih1.png";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import * as Icons from "lucide-react";

export default function Dua() {
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
          Company Profile PT Alfatih Pilar Peradaban
        </motion.h1>

        <p className="text-xs sm:text-sm text-gray-500 dark:text-gray-400 mb-6 italic">
          Created on October 2024 by Annisa Maulana Sabilla · Last Updated on December 2024
        </p>

        <motion.img
          src={alfatih}
          alt="Alfatih Project"
          className="relative mt-10 mx-4 sm:mx-8 md:mx-20 items-center rounded-md h-[480px] mb-10 border border-gray-200 dark:border-gray-700 shadow-lg"
          initial={{ scale: 0.95, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5 }}
        />

        <div className="divide-y divide-gray-200 dark:divide-gray-700">
          <section className="pb-8">
            <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-3">🔗 Repository & Live Site</h2>
            <div className="flex gap-4">
              <a href="https://github.com/annisams1506/hexasparkprokon" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm px-4 py-2 rounded border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700 transition text-gray-900 dark:text-white font-semibold shadow-sm">
                <Icons.Github className="w-4 h-4" /> Repository
              </a>
              <a href="https://alfatihpilarperadaban.netlify.app/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm px-4 py-2 rounded border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700 transition text-gray-900 dark:text-white font-semibold shadow-sm">
                <Icons.Link className="w-4 h-4" /> Open Live Site
              </a>
            </div>
          </section>

          <section className="py-8">
            <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-3">📝 Overview</h2>
            <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
              Sebagai mahasiswa dalam mata kuliah Proyek Konsultasi, saya berkesempatan bermitra dengan PT. Alfatih Pilar Peradaban. Perusahaan ini belum memiliki platform digital resmi, dan saya mengambil peran penting dalam merancang serta membangun website company profile mereka dari nol.
            </p>
          </section>

          <section className="py-8">
            <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-3">🛠️ The Tech Stack</h2>
            <ul className="list-disc list-inside text-sm text-gray-700 dark:text-gray-300">
              <li><strong>React.js</strong>: Membangun antarmuka pengguna interaktif dan modern.</li>
              <li><strong>Tailwind CSS</strong>: Styling cepat dan responsif dengan utility-first framework.</li>
              <li><strong>Swiper.js</strong>: Menambahkan komponen slider untuk tampilan yang dinamis.</li>
            </ul>
          </section>

          <section className="py-8">
            <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-3">✨ Features</h2>
            <ul className="list-disc list-inside text-sm text-gray-700 dark:text-gray-300 space-y-1">
              <li>🔸 Navbar: Menu navigasi intuitif (Home, About, Our Service, Project & Clients, Contact).</li>
              <li>🔸 Home: Halaman pembuka yang menyambut pengguna dengan slideshow dan intro perusahaan.</li>
              <li>🔸 About: Penjelasan sejarah, visi-misi, dan nilai perusahaan.</li>
              <li>🔸 Our Service: Menampilkan beragam layanan dengan dropdown interaktif.</li>
              <li>🔸 Project & Clients: Galeri proyek dan klien yang telah bekerja sama.</li>
              <li>🔸 Contact: Formulir yang memudahkan komunikasi langsung.</li>
              <li>🔸 Footer: Informasi sosial media dan alamat resmi perusahaan.</li>
            </ul>
          </section>

          <section className="py-8">
            <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-3">🧠 Kesimpulan</h2>
            <p className="text-sm text-gray-700 dark:text-gray-300 mb-2 leading-relaxed">
              Proyek ini tidak hanya menambah pengalaman saya dalam dunia pengembangan web, tetapi juga memberikan kontribusi nyata terhadap branding digital perusahaan mitra.
            </p>
            <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
              Jika kamu ingin mencoba langsung websitenya, ini link demo-nya <a href="https://alfatihpilarperadaban.netlify.app/" target="_blank" rel="noopener noreferrer" className="text-blue-500 underline">link ini</a>!
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

import gotss from "../images/gots.png"; // thumbnail dari Figma-mu
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import * as Icons from "lucide-react";

export default function Tiga() {
  return (
    <motion.section
      className="px-6 py-20 bg-white dark:bg-gray-900 min-h-screen font-mono transition-colors duration-500"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      <div className="max-w-4xl mx-auto">
        <Link to="/project" className="text-sm text-blue-500 hover:underline block mb-6">
          &larr; Back to Projects
        </Link>

        <motion.h1
          className="text-3xl sm:text-4xl font-semibold text-gray-900 dark:text-white mb-2"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
         Guardian Of The Sea (UI/UX)
        </motion.h1>

        <p className="text-xs sm:text-sm text-gray-500 dark:text-gray-400 mb-6 italic">
          Created on November 2023 by Annisa Maulana Sabilla · Last Updated on November 2023
        </p>

        <motion.img
          src={gotss}
          alt="Gotss Figma UI"
          className="relative mt-10 mx-4 sm:mx-8 md:mx-20 items-center rounded-md h-[480px] mb-10 border border-gray-200 dark:border-gray-700 shadow-lg object-cover"
          initial={{ scale: 0.95, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5 }}
        />

        <div className="divide-y divide-gray-200 dark:divide-gray-700">
          <section className="pb-8">
            <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-3">🔗 Figma Prototype</h2>
            <div className="flex gap-4">
              <a
                href="https://www.figma.com/proto/lSFeaQUbDpwaDEr6I7AE9D/gotss-anzayyy?node-id=0-1&t=sU50SBuievBbFRzg-1&scaling=scale-down"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm px-4 py-2 rounded border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700 transition text-gray-900 dark:text-white font-semibold shadow-sm"
              >
                <Icons.Figma className="w-4 h-4" /> View Prototype
              </a>
            </div>
          </section>

          <section className="py-8">
            <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-3">📝 Overview</h2>
            <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
              Gotss adalah aplikasi konseptual yang dirancang untuk mengatasi isu pencemaran laut. Desain UI/UX-nya menampilkan berbagai fitur penting seperti informasi lokasi rawan pencemaran, edukasi, berita terkini, pelaporan oleh warga (citizen science), serta event-event lingkungan.
            </p>
          </section>

          <section className="py-8">
            <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-3">🛠️ The Design Stack</h2>
            <ul className="list-disc list-inside text-sm text-gray-700 dark:text-gray-300">
              <li><strong>Figma</strong>: Tools utama untuk membuat UI layout dan prototyping.</li>
              <li><strong>Wireframing</strong>: Perancangan awal struktur antar layar.</li>
              <li><strong>Prototyping</strong>: Alur interaktif antar halaman aplikasi.</li>
              <li><strong>Design System</strong>: Konsistensi elemen UI dalam aplikasi.</li>
              <li><strong>Mobile-first</strong>: Fokus desain pada tampilan mobile.</li>
            </ul>
          </section>

          <section className="py-8">
            <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-3">✨ Features</h2>
            <ul className="list-disc list-inside text-sm text-gray-700 dark:text-gray-300 space-y-1">
              <li>🔸 Trash-Sea: Informasi lokasi laut dengan potensi sampah tinggi.</li>
              <li>🔸 Education: Artikel dan konten edukasi tentang laut dan lingkungan.</li>
              <li>🔸 News: Berita terkini seputar pencemaran laut dan kebijakan.</li>
              <li>🔸 Citizen Science Hub: Pengguna dapat berpartisipasi melaporkan kondisi lingkungan.</li>
              <li>🔸 Event: Info kegiatan sosial atau edukatif terkait lingkungan.</li>
            </ul>
          </section>

          <section className="py-8">
            <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-3">🧠 Kesimpulan</h2>
            <p className="text-sm text-gray-700 dark:text-gray-300 mb-2 leading-relaxed">
              Project ini merepresentasikan peran desain dalam menyampaikan isu penting seperti pencemaran laut. Prototipe ini merupakan bentuk kontribusi melalui pendekatan UI/UX yang ramah pengguna dan edukatif.
            </p>
            <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
              Kamu bisa menjelajahi desainnya langsung di <a href="https://www.figma.com/proto/lSFeaQUbDpwaDEr6I7AE9D/gotss-anzayyy?node-id=0-1&t=sU50SBuievBbFRzg-1&scaling=scale-down" target="_blank" rel="noopener noreferrer" className="text-blue-500 underline">Figma prototype ini</a>.
            </p>
          </section>
        </div>

        <div className="mt-12 border-t pt-4 text-center">
          <p className="text-xs text-gray-500 dark:text-gray-400 mb-3">🚩 Thanks For Reading!</p>
          <Link to="/project" className="text-sm text-blue-500 hover:underline">
            🔁 Lihat Proyek Lainnya
          </Link>
        </div>
      </div>
    </motion.section>
  );
}

import { FaGithub, FaLinkedin, FaEnvelope, FaSpotify } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800 py-6 ">
      <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-4">
        {/* Left - Nama & Tahun */}
        <p className="text-sm text-gray-500 dark:text-gray-400 text-center md:text-left">
          © {new Date().getFullYear()} Annisa Maulana Sabilla. All rights reserved.
        </p>

        {/* Right - Ikon Sosial */}
        <div className="flex gap-5 text-indigo-600 dark:text-indigo-300">
          <a
            href="https://github.com/annisams1506"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub className="w-5 h-5 hover:text-indigo-800 dark:hover:text-white transition" />
          </a>
          <a
            href="https://open.spotify.com/user/31ldyuuplqdhtwi4zpwbg6vqkbwi?si=f272a3ef18804046"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaSpotify className="w-5 h-5 hover:text-indigo-800 dark:hover:text-white transition" />
          </a>
          <a
            href="https://www.linkedin.com/in/annisa-maulana-sabilla-a2b800161/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin className="w-5 h-5 hover:text-indigo-800 dark:hover:text-white transition" />
          </a>
          <a href="mailto:annisa.m.sabilla@gmail.com">
            <FaEnvelope className="w-5 h-5 hover:text-indigo-800 dark:hover:text-white transition" />
          </a>
        </div>
      </div>
    </footer>
  );
}

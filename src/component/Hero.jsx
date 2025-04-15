import { motion } from "framer-motion";
import { Download } from "lucide-react";
import profilePic from "../images/annisa.png";

export default function Hero() {
  return (
    <section className="px-4 sm:px-6 py-16 sm:py-24 mt-4 bg-white dark:bg-gray-900">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12">
        
        {/* Teks */}
        <div className="text-left md:text-left flex-1">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-2xl md:text-4xl  font-extrabold tracking-tight text-gray-900 dark:text-white leading-tight"
          >
            Hello, I'm{" "}
            <span className="text-indigo-900 dark:text-indigo-400">
              Annisa Maulana Sabilla
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.7 }}
            className="mt-4 text-sm md:text-xl text-gray-700 dark:text-gray-300 leading-relaxed"
          >
            A <span className="font-semibold">Marine Information Systems</span> student with a strong passion for{" "}
            <span className="underline decoration-indigo-400/50">front-end development</span> and{" "}
            <span className="underline decoration-indigo-400/50">spatial data visualization</span>.
            I bring ideas to life through interactive, data-driven user experiences. 🌍💡
          </motion.p>

          {/* Badges */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.7 }}
            className="mt-4 flex flex-wrap justify-center md:justify-start gap-2"
          >
            <span className="px-3 py-1 rounded-full bg-indigo-100 dark:bg-indigo-900 text-indigo-600 dark:text-indigo-300 text-sm font-medium">
              💼 Open to Work
            </span>
            <span className="px-3 py-1 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 text-sm font-medium">
              🎨 Front-End Enthusiast
            </span>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.7 }}
            className="mt-8 flex justify-center md:justify-start gap-4"
          >
            <a
              href="https://drive.google.com/file/d/1F7sjNRcDoaRyCl7wRuMBZNrRdqwm5pAg/view?usp=sharing"
               target="_blank"
               rel="noopener noreferrer"
              className="flex items-center gap-2 px-5 py-2 rounded-xl border border-indigo-500 text-indigo-600 dark:text-indigo-400 hover:bg-indigo-100 dark:hover:bg-indigo-900 transition font-medium hover:scale-105 duration-200"
            >
              <Download size={18} />
              Download CV
            </a>
          </motion.div>
        </div>

        {/* Foto */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5, duration: 0.7 }}
          className="flex-1 flex justify-center"
        >
          <div className="relative group  rounded-2xl shadow-2xl p-4 border border-gray-200 dark:border-gray-700 ">
            <div className="absolute -inset-1  opacity-30 blur-lg rounded-2xl  hidden group-hover:block" />
            <img
              src={profilePic}
              alt="Annisa Maulana Sabilla"
              className="w-32 h-32 md:w-40 md:h-40 object-cover rounded-xl shadow-md"
            />
            <p className="mt-2 text-sm text-center text-gray-500 dark:text-gray-400 italic">
              “Hi.”
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

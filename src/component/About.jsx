import { motion } from "framer-motion";
import * as Icons from "lucide-react";
import { FaSpotify } from "react-icons/fa";

const contactList = [
  {
    name: "GitHub",
    icon: "Github",
    link: "https://github.com/annisams1506",
  },
  {
    name: "Spotify",
    icon: FaSpotify,
    link: "https://open.spotify.com/user/31ldyuuplqdhtwi4zpwbg6vqkbwi?si=f272a3ef18804046",
  },
  {
    name: "Instagram",
    icon: "Instagram",
    link: "https://instagram.com/annisa._.ms",
  },
  {
    name: "LinkedIn",
    icon: "Linkedin",
    link: "https://www.linkedin.com/in/annisa-maulana-sabilla-a2b800161/",
  },
  {
    name: "Gmail",
    icon: "Mail",
    link: "mailto:annisa.m.sabilla@gmail.com",
  },
];

export default function About() {
  return (
    <section className="min-h-screen bg-white dark:bg-gray-900 px-6 py-20">
      <div className="max-w-4xl mx-auto space-y-16">
        {/* === About Me Section === */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl font-extrabold text-indigo-600 dark:text-indigo-400 mb-4">
            ✨ About Me
          </h2>
          <div className="space-y-2 font-poppins text-gray-800 dark:text-gray-300 text-sm leading-relaxed">
            <p>
              Hi! I'm <strong>Annisa Maulana Sabilla</strong> — but feel free to
              call me whatever you like 😄. I'm originally from Bekasi, Indonesia,
              and currently studying at <strong>Universitas Pendidikan Indonesia</strong>, majoring in{" "}
              <strong>Marine Information Systems</strong> 🌊💻.
              <br />
              My journey in tech started back in vocational high school, where I
              majored in <strong>Software Engineering</strong> at SMK Telekomunikasi
              Telesandi Bekasi. Since then, I've been passionate about combining my
              love for both <strong>technology</strong> and <strong>marine science</strong> 🌐🐠.
            </p>

            <p>
              Technologies I'm familiar with include:
              <span className="block mt-2">
                <code className="bg-indigo-100 text-indigo-700 dark:bg-indigo-900 dark:text-indigo-200 px-2 py-1 rounded-md text-xs">
                  ReactJS, Vite, Next.js, Figma, VB.NET, C#, PHP, Node.js, Python, ArcGIS
                </code>
              </span>
            </p>

            <p>
              A little fun fact about me: I'm an <strong>ISFP</strong> — someone who loves creating through visuals,
               feeling through music, and living with calm energy. I'm a huge fan of{" "}
              <strong>Billie Eilish</strong>'s music, a regular watcher of{" "}
              <strong>Korean dramas</strong>, and an ultimate fan of{" "}
              <strong>BIGBANG</strong>, especially <strong>G-Dragon 🐉</strong>.
            </p>
          </div>
        </motion.div>

        {/* === Contact Section === */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-center"
        >
          <h2 className="text-3xl font-extrabold text-indigo-600 dark:text-indigo-400 mb-2">
            📫 Let's Connect
          </h2>
          <p className="text-gray-600 dark:text-gray-300 mb-6 text-lg">
            Feel free to reach out or follow me on the platforms below 👇
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            {contactList.map((contact, index) => {
              const Icon =
                typeof contact.icon === "string"
                  ? Icons[contact.icon]
                  : contact.icon;

              return (
                <a
                  key={index}
                  href={contact.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 text-sm rounded-md border border-indigo-200 dark:border-indigo-700 text-indigo-600 dark:text-indigo-300 hover:bg-indigo-50 dark:hover:bg-indigo-800 transition"
                >
                  {Icon && <Icon className="w-5 h-5" />}
                  {contact.name}
                </a>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

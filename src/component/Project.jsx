import { motion } from "framer-motion";
import { Link } from "react-router-dom";

import soula1 from "../images/soula1.png";
import alfatih from "../images/alfatih1.png";
import gots from "../images/gots.png";
import spp from "../images/empat.png";

const projects = [
  {
    title: "SoulaFish WebGIS",
    description:
      "WebGIS for predicting potential fishing zones using satellite-derived chlorophyll and temperature data.",
    stack: ["React", "Tailwind", "ArcGIS", "Random Forest"],
    image: soula1,
    link: "/project1",
  },
  {
    title: "Company Profile Website",
    description:
      "Responsive website for Alfatih Pilar Peradaban — built with React & Tailwind.",
    stack: ["React", "Tailwind", "Framer Motion"],
    image: alfatih,
    link: "/project2",
  },
  {
    title: "UI/UX Design – Guardian Of The Sea",
    description:
      "A prototype app to address marine pollution with features like Trash-Sea Monitoring, Education, News, Citizen Science, and Events.",
    stack: ["Figma", "Prototyping", "Design System"],
    image: gots,
    link: "/project3",
  },
  {
    title: "Aplikasi Administrasi Sekolah",
    description:
      "A desktop application for managing student SPP payments and teacher salaries efficiently.",
    stack: ["VB.Net", "Crystal Report", "MySQL"],
    image: spp,
    link: "/project4",
  },
];

export default function Project() {
  return (
    <section className="px-4 sm:px-6 py-12 sm:py-12 bg-white dark:bg-gray-900 min-h-screen transition-colors duration-500">
      <div className="max-w-6xl mx-auto text-center">
        <motion.h2
          className="text-4xl font-bebas text-gray-900 dark:text-white mb-4  tracking-tight"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          ✨ My Projects
        </motion.h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 shadow-md hover:shadow-xl transition rounded-2xl p-5 flex flex-col"
            >
              <img
                src={project.image}
                alt={project.title}
                className="rounded-lg mb-4 w-full h-40 object-cover"
              />
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                {project.title}
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-300 flex-grow">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 mt-4">
                {project.stack.map((tech, i) => (
                  <span
                    key={i}
                    className="text-xs bg-indigo-100 dark:bg-indigo-700/30 text-indigo-700 dark:text-indigo-300 px-2 py-1 rounded-full"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <Link
                to={project.link}
                className="mt-5 inline-block text-sm px-4 py-2 rounded-lg bg-indigo-600 text-white hover:bg-indigo-700 transition"
              >
                See More
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

import { Briefcase, BookOpenCheck, Trophy } from "lucide-react";
import { motion } from "framer-motion";

const experiences = [
  {
    title: "QCO - Intern",
    place: "PT Astra Honda Motor",
    date: "Maret 2025 – Present",
    description:
      "Maintained and updated QCO Machining data systems using Excel and VBA",
  },

  {
    title: "Project Consultant – Front-End Developer",
    place: "PT Alfatih Pilar Peradaban",
    date: "September 2024 – Desember 2024",
    description:
      " Built a responsive company profile website with ReactJS and TailwindCSS, prioritizing intuitive design and user engagement.",
  },

  {
    title: "IT Software Solution For Business Trainee",
    place: "BBPVP Bekasi",
    date: "Februari 2022 – Mei 2025",
    description:
      "Completed a non-boarding training program with 340 instructional hours focused on software development and obtained BNSP certification.",
  },
  {
    title: "Human Resource Generalist (HRGA) - Intern",
    place: "PT Supernova Flexible Packaging",
    date: "Januari 2020 – Maret 2020",
    description:
      "Assisted HR & General Affairs team in managing administrative documents, employee attendance, and recruitment logistics. Developed a Recruitment Application using VB.NET as a final project.",
  },
];

const achievements = [
  {
    title: "Journal Publication - Simpatik: Jurnal Sistem Informasi dan Informatika",
    place: "Optimisasi Produksi Budidaya Perikanan Di Provinsi Nusa Tenggara Timur Melalui Klasterisasi Menggunakan Algoritma K-Means",
    date: "Des 2024",
    icon: <BookOpenCheck />,
  },
  {
    title: "Journal Publication - Indonesian Conference of Maritime (INCOMA)",
    place: "Prototype Aplikasi GOTS: Solusi Digital untuk Perlindungan dan Pembersihan Lautan Berbasis Android",
    date: "May 2024",
    icon: <BookOpenCheck />,
  },
  {
    title: "Top 10 Finalist Website Project",
    place: "Kompetensi ASIK (Inovasi dan Keberlanjutan Sektor Kelautan)",
    date: "Des 2024",
    icon: <Trophy />,
  },
];

export default function ExperiencePage() {
  return (
    <section 
    id="experience"
    className="min-h-screen bg-white dark:bg-gray-900 px-6 py-20">
      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-12">
        {/* Professional Experience */}
        <div className="md:col-span-2">
          <h2 className="text-3xl font-bebas text-gray-900 dark:text-white mb-10">
            Professional Experience
          </h2>
          <div className="relative border-l border-gray-300 dark:border-gray-700 pl-6">
            {experiences.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="relative pb-10"
              >
                {/* Dot */}
                <span className="absolute -left-[20px] top-1 w-3 h-3 bg-indigo-500 rounded-full" />

                {/* Content */}
                <p className="text-sm text-gray-500 dark:text-gray-400 mb-1">
                  {item.date}
                </p>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                  {item.title}
                </h3>
                <p className="text-sm font-medium text-indigo-600 dark:text-indigo-400 mb-2">
                  {item.place}
                </p>
                <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Achievements */}
        <div>
          <h2 className="text-2xl font-bebas text-gray-900 dark:text-white mb-8">
            Achievements & Publications
          </h2>
          <div className="space-y-5">
            {achievements.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="flex items-start gap-3"
              >
                <div className="bg-pink-500 text-white p-2 rounded-md">
                  {item.icon}
                </div>
                <div>
                  <h4 className="text-sm font-medium text-gray-900 dark:text-white">
                    {item.title}
                  </h4>
                  <p className="text-xs text-gray-600 dark:text-gray-400">
                    {item.place} • {item.date}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

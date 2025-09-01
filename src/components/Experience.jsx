import { motion } from "framer-motion";

const experiences = [
  {
    role: "DLS Software Developer",
    company: "Centre for Virtual Reality Innovation – VARLab",
    date: "Aug 2022 – Present",
    skills: ["JavaScript", "React", "Node.js", "Unity", "Azure", "MongoDB", "Docker"],
    projects: [
      "CVRI Asset Storage",
      "Dynamic Content Editor",
      "Supply Chain DLX",
      "Trucking Inspection DLX",
    ],
  },
  {
    role: "AR/VR Software Developer (Co-op & Part-Time)",
    company: "Centre for Virtual Reality Innovation – VARLab",
    date: "Jan 2021 – Dec 2021",
    skills: ["C#", "Unity", "Jira", "Figma", "Agile", "Scrum"],
    projects: ["Onboarding Platform", "Inspection Tools"],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="relative px-6 py-20">
      {/* Timeline vertical line */}        
      <h2 className="text-center text-4xl md:text-6xl font-bold text-white mb-12">
          Experience
        </h2>
      <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-gray-800" />

      <div className="space-y-16 max-w-5xl mx-auto relative">
        {experiences.map((exp, i) => (
          <motion.div
            key={i}
            className={`relative w-full md:w-1/2 px-6 ${
              i % 2 === 0 ? "ml-auto" : "mr-auto"
            }`}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: i * 0.2 }}
            viewport={{ once: true }}
          >
            {/* Circle on timeline */}
            <div className="absolute -left-8 top-4 w-8 h-8 rounded-full bg-gray-900 border-2 border-orange-400 flex items-center justify-center font-bold text-orange-400">
              VR
            </div>

            {/* Experience Card */}
            <div className="bg-gray-900 rounded-2xl shadow-xl p-6">
              <h3 className="text-xl font-semibold">{exp.role}</h3>
              <p className="text-gray-400">{exp.company}</p>
              <p className="text-sm text-gray-500 mb-4">{exp.date}</p>

              {/* Skills */}
              <div className="flex flex-wrap gap-2 mb-4">
                {exp.skills.map((skill, idx) => (
                  <span
                    key={idx}
                    className="bg-purple-600/20 text-purple-400 px-3 py-1 rounded-full text-sm"
                  >
                    {skill}
                  </span>
                ))}
              </div>

              {/* Projects */}
              <p className="font-medium mb-2">Projects:</p>
              <ul className="list-disc list-inside text-gray-400">
                {exp.projects.map((proj, idx) => (
                  <li key={idx}>{proj}</li>
                ))}
              </ul>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

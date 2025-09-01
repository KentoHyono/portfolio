import { motion } from "framer-motion";

export default function Contact() {
  return (
    <motion.section
      id="contact"
      className="px-6 py-20 text-center my-20"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <div class="h-[2px] w-full bg-gradient-to-r from-white/0 via-white/50 to-white/0 my-10 px-10" />

      <h2 className="text-5xl font-semibold mt-20">Get In Touch ✉️</h2>
      <p className="text-gray-400 text-xl text-lg mt-10 mb-20">
        Feel free to reach out if you’d like to collaborate or hire me.
      </p>
      <motion.a
        href="mailto:yourname@email.com"
        className="px-8 py-6 bg-blue-500 font-bold text-2xl rounded-xl shadow hover:bg-blue-600 transition"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        Email Me!
      </motion.a>
    </motion.section>
  );
}

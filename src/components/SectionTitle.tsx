// src/components/SectionTitle.tsx
import { motion } from "framer-motion";

export default function SectionTitle({ title, subtitle }: { title: string; subtitle?: string }) {
  return (
    <motion.div
      className="text-center mb-12"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <h2 className="text-4xl md:text-6xl font-extrabold text-white mb-2">
        {title}
      </h2>
      {subtitle && (
        <p className="text-lg md:text-xl text-gray-400">{subtitle}</p>
      )}
    </motion.div>
  );
}

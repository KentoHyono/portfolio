import { motion } from "framer-motion";

export default function Footer() {
  return (
    <motion.footer
      className="px-6 py-6 text-center bg-gray-950 text-gray-500"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      © {new Date().getFullYear()} Your Name. All rights reserved.
    </motion.footer>
  );
}

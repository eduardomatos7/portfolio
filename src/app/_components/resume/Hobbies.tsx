"use client";
import { motion } from "motion/react";
import { item } from "../../_utils/variants";

interface Props {
  hobbies: string[];
}

function Hobbies({ hobbies }: Props) {
  return (
    <motion.div variants={item} className="flex flex-wrap gap-2">
      <p className="text-gray-400 font-poppins mr-1">Hobbies</p>
      <div className="flex flex-wrap gap-2">
        {hobbies.map((tag) => (
          <motion.span
            key={tag}
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.92 }}
            className="text-[11px] sm:text-[12px] px-3 py-1 rounded-full bg-gradient-to-r from-blue-500/20 to-indigo-500/20 text-white/80 border border-[#19324e] backdrop-blur-sm hover:border-[#27527d] transition-colors duration-300 shadow-[0_0_0_0_rgba(255,176,71,0)] hover:shadow-[0_0_0_1px_rgba(255,176,71,0.35)]"
          >
            {tag}
          </motion.span>
        ))}
      </div>
    </motion.div>
  );
}

export default Hobbies;

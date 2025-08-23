"use client";
import { motion } from "motion/react";
import { item } from "../../_utils/variants";

interface Props {
  paragraphs: string[];
}

const bulletDelay = [0, 150, 300];

function BioSection({ paragraphs }: Props) {
  return (
    <motion.div variants={item} className="space-y-5 text-[15px] leading-relaxed font-light">
      {paragraphs.map((text, i) => (
        <motion.p key={i} variants={item} className="relative pl-5">
          <span
            className="absolute left-0 top-2 size-2 rounded-full bg-gradient-to-r from-blue-400 to-indigo-400 animate-pulse"
            style={{ animationDelay: `${bulletDelay[i] || 0}ms` }}
          />
          {text}
        </motion.p>
      ))}
    </motion.div>
  );
}

export default BioSection;

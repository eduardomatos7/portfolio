"use client";
import { motion } from "motion/react";
import { item } from "../../_utils/variants";
import { TimelinePoint } from "../../_utils/data";

interface Props {
  points: TimelinePoint[];
}

function Timeline({ points }: Props) {
  return (
    <motion.ul variants={item} className="relative pl-6 border-l border-white/10 space-y-6">
      {points.map((p, i) => (
        <motion.li
          key={`${p.year}-${i}`}
          initial={{ opacity: 0, x: -18 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.5, delay: i * 0.1 }}
          className="group relative"
        >
          <span className="absolute -left-[11px] top-2 size-3 rounded-full bg-gradient-to-br from-blue-400 to-indigo-500 ring-2 ring-[#121237] group-hover:scale-110 transition-transform" />
            <div className="flex items-start gap-4">
              <div className="min-w-[55px] text-sm font-semibold text-blue-300 ml-3 mt-1">{p.year}</div>
              <div className="flex-1">
                <h4 className="font-medium text-white/90">{p.title}</h4>
                <p className="text-[13px] text-white/60 mt-1">{p.desc}</p>
              </div>
            </div>
        </motion.li>
      ))}
    </motion.ul>
  );
}

export default Timeline;

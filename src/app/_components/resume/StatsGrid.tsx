"use client";
import { motion } from "motion/react";
import { item } from "../../_utils/variants";
import { StatItem } from "../../_utils/data";

interface Props {
  stats: StatItem[];
}

function StatsGrid({ stats }: Props) {
  return (
    <motion.div variants={item} className="grid grid-cols-2 gap-4">
      {stats.map((s) => (
        <motion.div
          key={s.label}
          whileHover={{ y: -4, boxShadow: "0 8px 24px -8px rgba(56,132,255,0.45)" }}
          className="rounded-xl border border-white/10 bg-white/5 px-4 py-3 flex flex-col items-start gap-0.5 backdrop-blur-sm"
        >
          <span className="text-[10px] uppercase tracking-wide text-white/50">{s.label}</span>
          <span className="text-xl font-semibold bg-gradient-to-r from-blue-300 to-indigo-300 bg-clip-text text-transparent">
            {s.value}
          </span>
          <span className="text-[11px] text-white/60">{s.hint}</span>
        </motion.div>
      ))}
    </motion.div>
  );
}

export default StatsGrid;

"use client";
import Image from "next/image";
import { motion } from "motion/react";
import { item, floatCard } from "../../_utils/variants";

function ProfileCard() {
  return (
    <motion.div variants={item} className="relative group">
      <motion.div
        variants={floatCard}
        animate="animate"
        className="rounded-2xl overflow-hidden ring-1 ring-white/10 shadow-xl shadow-blue-900/30 bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm p-4 flex flex-col items-center"
      >
        <div className="relative w-40 h-40 rounded-full overflow-hidden ring-2 ring-blue-500/60 shadow-lg shadow-blue-900/40 mb-4">
          <Image
            src="/assets/images/Photo.png"
            alt="Foto"
            fill
            className="object-cover"
            sizes="160px"
            priority
          />
        </div>
        <p className="text-center text-sm text-white/70 leading-relaxed max-w-[240px]">
          Desenvolvedor focado em criar e desenvolver soluções de alto nível!!
        </p>
      </motion.div>
    </motion.div>
  );
}

export default ProfileCard;

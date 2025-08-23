"use client";
import React from "react";
import { motion } from "motion/react";
import { container, item } from "../../_utils/variants";
import { stats, hobbies, bioParagraphs, timeline } from "../../_utils/data";
import ProfileCard from "./ProfileCard";
import StatsGrid from "./StatsGrid";
import Hobbies from "./Hobbies";
import BioSection from "./BioSection";
import Timeline from "./Timeline";

function ResumePage() {
  return (
    <section id="resume" className="relative py-24 w-full flex justify-center overflow-hidden">
      {/* Background Lights */}
      <div className="pointer-events-none absolute inset-0 [mask-image:radial-gradient(circle_at_center,white,transparent_70%)]">
        <div className="absolute -top-32 -left-32 size-[420px] bg-blue-600/30 blur-[120px] rounded-full animate-pulse" />
        <div className="absolute bottom-0 -right-32 size-[420px] bg-indigo-500/25 blur-[140px] rounded-full animate-pulse [animation-delay:2s]" />
      </div>

      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
        className="relative flex flex-col gap-12 max-w-[92%] lg:max-w-[70%] text-white font-poppins"
      >
        <motion.h1 variants={item} className="text-2xl xl:text-4xl font-normal tracking-tight text-center mb-5">
          <span className="text-white">Me conheça um pouco mais: </span>
        </motion.h1>

        <div className="grid md:grid-cols-[340px_1fr] gap-10 items-start">
          {/* Coluna esquerda */}
          <motion.div variants={item} className="flex flex-col gap-6">
            <ProfileCard />
            <StatsGrid stats={stats} />
            <Hobbies hobbies={hobbies} />
          </motion.div>

            {/* Coluna direita */}
            <motion.div variants={item} className="flex flex-col gap-8">
              <BioSection paragraphs={bioParagraphs} />
              <Timeline points={timeline} />
            </motion.div>
        </div>
      </motion.div>
    </section>
  );
}

export default ResumePage;

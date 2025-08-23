"use client";
import Image from "next/image";
import { FaGithub } from "react-icons/fa";
import { IoRocketOutline } from "react-icons/io5";
import { propsProject } from "../interfaces/projectCards";
import { Smartphone, MonitorSmartphone, Server, Monitor } from "lucide-react";
import { useRef, useState } from "react";
import { Video } from "lucide-react";
import VideoModal from "./VideoModal";

function Card({ project }: { project: propsProject }) {
  const {
    srcImage,
    title,
    description,
    technologies,
    github,
    deploy,
    platforms,
    video,
  } = project;
  const [openVideo, setOpenVideo] = useState(false);
  const [originRect, setOriginRect] = useState<{top:number;left:number;width:number;height:number}|null>(null);
  const videoBtnRef = useRef<HTMLButtonElement | null>(null);
  const openWithRect = () => {
    if (videoBtnRef.current) {
      const r = videoBtnRef.current.getBoundingClientRect();
      setOriginRect({ top: r.top, left: r.left, width: r.width, height: r.height });
    }
    setOpenVideo(true);
  };
  const platformIcon = () => {
    const p = platforms.toLowerCase();
    if (p.includes("mobile") && p.includes("front"))
      return <MonitorSmartphone className="h-4 w-4" />;
    if (p.includes("mobile")) return <Smartphone className="h-4 w-4" />;
    if (p.includes("back")) return <Server className="h-4 w-4" />;
    return <Monitor className="h-4 w-4" />;
  };

  const coverImage = () => {
    const srcImage = project.srcImage.split(".")[1];
    if (srcImage !== "svg") return true;
    return false;
  };

  return (
    <section
      className="relative w-full xl:w-[90%] max-h-fit mx-auto min-h-[80vh]  lg:min-h-[50vh] flex flex-col lg:grid lg:grid-cols-2 
      rounded-3xl overflow-hidden border border-white/5 shadow-[0_0_38px_-16px_rgba(18,80,160,0.35),0_0_52px_-30px_rgba(255,140,40,0.28)] 
       backdrop-blur-sm"
      data-aos="fade-up"
      data-aos-anchor-placement="bottom-bottom"
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_18%_22%,rgba(28,116,168,0.18),transparent_62%)]" />
      <div className="pointer-events-none absolute inset-0 mix-blend-overlay opacity-10 bg-[linear-gradient(125deg,rgba(255,255,255,0.04)_0%,transparent_70%)]" />

      <div className="relative h-[33vh] sm:h-[50vh] lg:h-full flex items-center justify-center p-6 lg:p-10 bg-[#061120]/30 rounded-3xl overflow-hidden">
        <Image
          src={srcImage}
          alt={title}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 100vw, 50vw"
          className={`${
            coverImage() ? "object-cover" : " "
          } drop-shadow-[0_10px_25px_rgba(0,0,0,0.45)] transition-transform duration-700 ease-out hover:scale-[1.03]`}
        />
        <div className="absolute inset-0 ring-1 ring-white/10 rounded-3xl" />
      </div>

      <div className="relative flex flex-col gap-6 p-6 sm:p-10 xl:p-14">
        <header className="space-y-3">
          <div className="flex flex-wrap items-center gap-3">
            <h2 className="text-3xl md:text-3xl lg:text-4xl font-semibold tracking-tight font-inter bg-gradient-to-r
             from-sky-200 via-cyan-100 to-blue-200 bg-clip-text text-transparent drop-shadow-[0_0_6px_rgba(0,180,255,0.15)]">
              {title}
            </h2>

            <span
              className="px-3 py-1 flex gap-1 justify-center items-center text-xs md:text-xs lg:text-sm rounded-full 
            bg-indigo-700/20 text-indigo-200 border border-indigo-500/40 font-medium backdrop-blur-sm shadow-[0_0_0_0_rgba(255,176,71,0)]
            hover:shadow-[0_0_0_1px_rgba(255,176,71,0.4)] transition-shadow"
            >
              {platformIcon()} {platforms}
            </span>
          </div>
          <p className="text-base md:text-lg leading-relaxed text-gray-300/90 font-light max-w-2xl">
            {description}
          </p>
        </header>

        <div className="flex flex-wrap gap-3" aria-label="Tecnologias usadas">
          {technologies.map(({ id, tech, alt, width }) => (
            <div
              key={id}
              className="group flex items-center gap-2 px-3 py-2 rounded-xl bg-[#0e1c30]/60 
              border border-[#19324e] backdrop-blur-sm hover:bg-[#163250]/70 hover:border-[#27527d] 
              transition-colors shadow-[0_0_0_0_rgba(255,176,71,0)] hover:shadow-[0_0_0_1px_rgba(255,176,71,0.35)]"
            >
              <Image
                src={tech}
                alt={alt}
                width={width}
                height={width}
                className="object-contain w-auto h-5 md:h-6"
              />
              <span className="text-[11px] md:text-xs text-gray-400 font-medium tracking-wide group-hover:text-gray-200 transition-colors">
                {alt}
              </span>
            </div>
          ))}
        </div>

        <div className="mt-auto flex flex-col sm:flex-row gap-4 pt-4 flex-wrap">
          {video && (
            <button
              ref={videoBtnRef}
              onClick={openWithRect}
              className="group relative inline-flex items-center justify-center gap-2 rounded-xl px-6 py-3 font-medium text-sm overflow-hidden border border-sky-400/30 bg-sky-500/10 text-sky-200 hover:bg-sky-500/20 hover:text-white transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-400/50"
            >
              <Video className="h-5 w-5 group-hover:scale-110 transition-transform" />
              <span>Vídeo</span>
            </button>
          )}
          {deploy && (
            <button className="relative py-2 px-4 border-[1px] border-[#77A2FF] rounded-xl overflow-hidden group transition-all duration-500 hover:scale-105 hover:shadow-[0_0_10px_rgba(27,122,255,0.5)]">
              <span className="relative">
                <a
                  target="_blank"
                  href={deploy}
                  rel="noopener noreferrer"
                  className="flex items-center font-poppins text-base md:text-sm text-cente justify-center gap-2 rounded-xl font-medium overflow-hidden"
                >
                  <IoRocketOutline className="text-lg group-hover:translate-y-[-2px] transition-transform" />
                  Prévia
                </a>
              </span>
              <span
                className="pointer-events-none absolute -top-1/2 -left-1/2 w-[200%] h-[300%] 
                            opacity-0 group-hover:opacity-100 transition-all duration-300 "
              ></span>
            </button>
          )}
          <a
            href={github}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative inline-flex items-center justify-center gap-2 
            rounded-xl px-6 py-3 font-medium text-sm overflow-hidden border 
            border-white/10 bg-white/5 text-gray-200 hover:bg-white/10 hover:text-white
             transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-white/30"
          >
            <FaGithub className="text-lg group-hover:rotate-3 transition-transform" />
            <span>GitHub</span>
          </a>
        </div>

        <div className="pointer-events-none absolute -bottom-24 -right-16 w-96 h-96 rounded-full blur-3xl bg-orange-700/10" />
        <div className="pointer-events-none absolute -top-20 -left-24 w-80 h-80 rounded-full blur-3xl bg-sky-600/10" />
      </div>
      {video && (
        <VideoModal
          open={openVideo}
          onClose={() => setOpenVideo(false)}
            video={video}
            title={`Vídeo - ${title}`}
            originRect={originRect}
          />
      )}
    </section>
  );
}

export default Card;

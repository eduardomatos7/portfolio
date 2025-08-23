"use client";
import { useEffect, useState } from "react";
import { X } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { createPortal } from "react-dom";

export interface OriginRect {
  top: number; left: number; width: number; height: number;
}

interface VideoModalProps {
  open: boolean;
  onClose: () => void;
  video: string;
  title?: string;
  originRect?: OriginRect | null;
  variant?: 'expand' | 'fade';
  maxWidth?: number;
  autoPlay?: boolean;
}

export function VideoModal({ open, onClose, video, title, originRect, variant = 'expand', maxWidth = 1280, autoPlay = true }: VideoModalProps) {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  // ESC para fechar
  useEffect(() => {
    function handleKey(e: KeyboardEvent) { if (e.key === "Escape") onClose(); }
    if (open) window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [open, onClose]);

  // travar scroll
  useEffect(() => {
    if (open) {
      const prev = document.body.style.overflow;
      document.body.style.overflow = "hidden";
      return () => { document.body.style.overflow = prev; };
    }
  }, [open]);

  if (!mounted) return null;

  const isYoutube = /youtube|youtu\.be/.test(video);
  const aspect = 16 / 9;
  const vw = typeof window !== 'undefined' ? window.innerWidth : 1920;
  const vh = typeof window !== 'undefined' ? window.innerHeight : 1080;
  let targetWidth = Math.min(vw * 0.9, maxWidth);
  let targetHeight = targetWidth / aspect;
  if (targetHeight > vh * 0.9) {
    targetHeight = vh * 0.9;
    targetWidth = targetHeight * aspect;
  }

  const initialStyle = variant === 'expand' && originRect ? {
    top: originRect.top + (typeof window !== 'undefined' ? window.scrollY : 0),
    left: originRect.left,
    width: originRect.width,
    height: originRect.height,
    borderRadius: 16
  } : undefined;

  const containerInitial = variant === 'expand'
    ? { opacity: 0, scale: 0.9 }
    : { opacity: 0, scale: 0.92, filter: 'blur(8px)' };
  const containerAnimate = variant === 'expand'
    ? { opacity: 1, scale: 1, top: '50%', left: '50%', x: '-50%', y: '-50%', width: targetWidth, height: targetHeight, borderRadius: 20 }
    : { opacity: 1, scale: 1, filter: 'blur(0px)', top: '50%', left: '50%', x: '-50%', y: '-50%', width: targetWidth, height: targetHeight, borderRadius: 20 };
  const containerExit = variant === 'expand'
    ? { opacity: 0, scale: 0.9, transition: { duration: 0.25 } }
    : { opacity: 0, scale: 0.85, filter: 'blur(10px)', transition: { duration: 0.25 } };

  const content = (
    <AnimatePresence>
      {open && (
        <>
          <motion.div
            key="backdrop"
            className="fixed inset-0 z-[998] bg-black/70 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            aria-hidden="true"
          />
            <motion.div
              key="video-modal"
              className="fixed z-[999] overflow-hidden shadow-[0_8px_40px_-4px_rgba(0,0,0,0.65)] ring-1 ring-white/10 bg-black"
              style={initialStyle}
              initial={containerInitial}
              animate={containerAnimate}
              exit={containerExit}
              transition={variant === 'expand' ? { type: 'spring', stiffness: 260, damping: 28 } : { duration: 0.35, ease: 'easeOut' }}
              role="dialog"
              aria-modal="true"
              aria-label={title || "Vídeo do projeto"}
            >
              <button
                onClick={onClose}
                aria-label="Fechar vídeo"
                className="group absolute top-2 right-2 z-10 inline-flex items-center justify-center rounded-full h-9 w-9 bg-white/10 hover:bg-white/20 text-white backdrop-blur-md border border-white/15 focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-400/60"
                autoFocus
              >
                <X className="h-5 w-5 group-hover:rotate-90 transition-transform" />
              </button>
              <div className="w-full h-full relative">
                {isYoutube ? (
                  <iframe
                    src={video + (autoPlay ? (video.includes('?') ? '&autoplay=1' : '?autoplay=1') : '')}
                    title={title || "Video"}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen"
                    allowFullScreen
                    className="absolute inset-0 w-full h-full"
                  />
                ) : (
                  <video controls={true} autoPlay={autoPlay} className="absolute inset-0 w-full h-full">
                    <source src={video} />
                    Seu navegador não suporta o elemento de vídeo.
                  </video>
                )}
              </div>
            </motion.div>
        </>
      )}
    </AnimatePresence>
  );

  return createPortal(content, document.body);
}

export default VideoModal;

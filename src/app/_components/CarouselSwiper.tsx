"use client";
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import Image from 'next/image';
import 'swiper/css';
import 'swiper/css/autoplay';
import { carouselImages } from '../_utils/technologies';

function CarouselSwiper() {
	const userInteractingRef = React.useRef(false);
	const lastAnimatedOriginalIndex = React.useRef<number | null>(null);

	const animateIncomingRightSlide = (swiper: any) => {
		if (userInteractingRef.current) return;
		if (!swiper.autoplay || !swiper.autoplay.running) return;

		// slidesPerView efetivo considerando breakpoints / 'auto'
		let spv = swiper.params.slidesPerView;
		if (spv === 'auto') spv = swiper.slidesPerView;
		if (typeof spv !== 'number') return;
		const slidesPerView = spv;

		// Rightmost do novo conjunto (o que está entrando)
		const rightIndex = (swiper.activeIndex + slidesPerView - 1) % swiper.slides.length;
		const slideEl: HTMLElement | undefined = swiper.slides[rightIndex];
		if (!slideEl) return;

		const content = slideEl.querySelector('.slide-anim-target') as HTMLElement | null;
		if (!content) return;

		const originalIndexAttr = content.getAttribute('data-original-index');
		const originalIndex = originalIndexAttr ? parseInt(originalIndexAttr, 10) : null;

		// Evita animar mesma entidade em sequência (clones)
		if (originalIndex !== null && originalIndex === lastAnimatedOriginalIndex.current) return;

		// Remove classe de outras instâncias ainda animando
		document.querySelectorAll('.slide-anim-target.slide-enter-right').forEach(el => {
			if (el !== content) el.classList.remove('slide-enter-right');
		});

		content.classList.remove('slide-enter-right');
		void content.offsetHeight; // reflow para reiniciar
		content.classList.add('slide-enter-right');

		lastAnimatedOriginalIndex.current = originalIndex;

		const onEnd = () => {
			content.classList.remove('slide-enter-right');
			content.removeEventListener('animationend', onEnd);
		};
		content.addEventListener('animationend', onEnd);
	};

	return (
		<div className="max-w-full sm:max-w-full md:max-w-full flex flex-col justify-center py-8" data-aos="fade-up"
			data-aos-delay="900" data-aos-anchor-placement="top-bottom">
			<div className="w-full text-center mb-12">
				<h3 className="text-gray-300 text-sm sm:text-base md:text-xl font-medium font-poppins uppercase 
					relative inline-block before:content-[''] before:absolute before:w-16 before:h-[2px] 
					before:bg-gradient-to-r before:from-blue-500 before:to-purple-600 before:-bottom-3 
					before:left-1/2 before:transform before:-translate-x-1/2 before:rounded-full">
					Tecnologias que utilizo
				</h3>
			</div>
			
			<div className="relative max-w-full sm:max-w-full md:max-w-full">
				<div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-purple-600/5 blur-2xl rounded-2xl"></div>
				
				<Swiper
					modules={[Autoplay]}
					slidesPerView={6}
					spaceBetween={10}
					loop={true}
					autoplay={{
						delay: 0,
						disableOnInteraction: false,
						pauseOnMouseEnter: true,
						waitForTransition: true,
					}}
					speed={1500}
					grabCursor={true}
					allowTouchMove={true}
					breakpoints={{
						320: { slidesPerView: 3 },
						640: { slidesPerView: 4 },
						1024: { slidesPerView: 7 }
					}}
					className="py-6"
					onAfterInit={animateIncomingRightSlide}
					onSlideChangeTransitionStart={animateIncomingRightSlide}
					onTouchStart={() => { userInteractingRef.current = true; }}
					onTouchEnd={() => { userInteractingRef.current = false; }}
				>
					{[...carouselImages, ...carouselImages].map(({ id, tech, alt }, idx) => {
						const originalIndex = idx % carouselImages.length;
						return (
							<SwiperSlide key={id + '-' + idx} >
								<div
									className="slide-anim-target flex flex-col gap-3 items-center p-4 transition-all duration-500 hover:-translate-y-2"
									data-original-index={originalIndex}
								>
									<div className="w-10 h-10 md:w-14 md:h-14 flex items-center justify-center 
										bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-sm
										rounded-xl border border-slate-700/50 shadow-lg
										relative overflow-hidden transition-all duration-500
									">
										<Image width={80} height={80} src={tech} alt={alt} quality={100} 
											className="object-contain w-6 h-6 md:w-10 md:h-10 z-10 transition-all duration-300
											group-hover:drop-shadow-[0_0_8px_rgba(59,130,246,0.6)]" />
									</div>
									<span className="text-xs sm:text-sm md:text-base text-gray-400 font-light 
										tracking-wide text-center whitespace-nowrap group-hover:text-blue-300
										transition-all duration-300 group-hover:drop-shadow-[0_0_10px_rgba(59,130,246,0.5)]">
										{alt}
									</span>
								</div>
							</SwiperSlide>
						);
					})}
				</Swiper>
			</div>
		</div>
	);
}

export default CarouselSwiper;


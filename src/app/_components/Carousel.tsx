import Image from 'next/image'
import React from 'react'
import { carouselImages } from '../_utils/technologies'

function Carousel() {
    return (
        <section className='max-w-96 sm:max-w-[30rem] md:max-w-[51rem] flex flex-col justify-center h-35' data-aos="fade-up"
            data-aos-delay="900" data-aos-anchor-placement="top-bottom">
            <div className='w-full text-center'><p className='text-gray-400 text-sm sm:text-base md:text-lg font-light font-poppins uppercase mb-5'>current technologies</p></div>
            <div className="relative max-w-72 sm:max-w-[30rem] md:max-w-[51rem] overflow-hidden">
                <div className="flex w-max animate-carousel gap-2">
                    {[...carouselImages, ...carouselImages].map(({ id, tech, alt }, idx) => (
                        <div className='
                            flex flex-col gap-1 items-center p-3
                            hover:scale-110 transition-trasnform duration-150 ease-linear'
                            key={id + '-' + idx}>
                            <div className="w-8 h-8 md:w-10 md:h-10 flex items-center justify-center bg-transparent">
                                <Image width={40} height={40} src={tech} alt={alt} quality={100} className="object-contain w-10 h-10" />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Carousel
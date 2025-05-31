import Image from 'next/image'
import React from 'react'
import { FaGithub, FaLinkedin, FaWhatsapp } from 'react-icons/fa'
import { MdOutlineMailOutline } from 'react-icons/md'

function HomeSection() {
    return (
        <section
            id="home"
            className="
                    grid md:grid-cols-[3fr_2fr] w-full 
                    max-w-[51rem] items-center justify-between justify-items-center md:justify-items-start
                    mt-24 md:mt-10 md:py-5
                    "
        >
            <div className="flex flex-col md:max-w-[28rem] lg:max-w-[29rem]" data-aos="fade-down">
                <div className="text-xl sm:text-xl md:text-2xl lg:text-[26px] mb-1 font-poppins text-white font-extralight ">
                    Olá!👋 Eu sou{" "}
                </div>
                <h1 className="text-slate-100 text-xl font-poppins sm:text-xl md:text-2xl lg:text-[28px] font-bold" >
                    Eduardo Matos,
                </h1>
                <h1
                    className="
                text-[22px] sm:text-2xl md:text-3xl lg:text-[32px] font-black font-poppins
                bg-[linear-gradient(to_bottom,_#fff,_#fff,_#fff,_#A6CCF7,_#0055F2,_#003DBF,_#003DBF)] bg-clip-text 
                text-transparent"
                >
                    desenvolvedor de Software!
                </h1>
                <div>
                    <p className="font-extralight font-poppins text-white text-base sm:text-base md:text-base lg:text-lg">
                        Como desenvolvedor Full-Stack e estudante de <b>Sistemas de
                            Informação</b> no CIn/UFPE, meu foco é usar tecnologia para resolver
                        problemas e entregar uma boa solução de impacto real.
                    </p>
                </div>
                <div className="flex mt-2 gap-2 sm:gap-4" >
                    <a
                        href="https://github.com/eduardomatos7"
                        target="_blank"
                        className="
                            flex w-6 h-6 sm:w-7 sm:h-7 p-1 sm:p-0 cursor-pointer rounded-full bg-transparent border-[1px]
                            border-white justify-center items-center" data-aos="flip-left" data-aos-delay="300"
                    >
                        <FaGithub color="#fff" />
                    </a>
                    <a
                        href="https://www.linkedin.com/in/eduardo-matos07"
                        target="_blank"
                        className="
                            flex w-6 h-6 sm:w-7 sm:h-7 p-1 sm:p-0 cursor-pointer rounded-full bg-transparent border-[1px]
                            border-white justify-center items-center" data-aos="flip-left" data-aos-delay="500"
                    >
                        <FaLinkedin color="#fff" />
                    </a>
                    <a
                        href="mailto:emfs@cin.ufpe.br"
                        target="_blank"
                        className="flex w-6 h-6 sm:w-7 sm:h-7 p-1 sm:p-0 cursor-pointer rounded-full bg-transparent border-[1px] border-white justify-center items-center"
                        data-aos="flip-left" data-aos-delay="700">
                        <MdOutlineMailOutline color="#fff" />
                    </a>
                    <a
                        href="https://wa.me/77999759806"
                        target="_blank"
                        className="flex w-6 h-6 sm:w-7 sm:h-7 p-1 sm:p-0 cursor-pointer rounded-full bg-transparent border-[1px] border-white justify-center items-center"
                        data-aos="flip-left" data-aos-delay="900" >
                        <FaWhatsapp color="#fff" />
                    </a>
                </div>
            </div>
            <div className="w-52 sm:w-72 md:w-full" data-aos="fade-right" >
                <Image
                    src="/Photo.png"
                    width={400}
                    height={400}
                    quality={100}
                    priority={true}
                    className="w-full"
                    alt="foto perfil"
                />
            </div>
        </section>
    )
}

export default HomeSection
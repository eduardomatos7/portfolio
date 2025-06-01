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
                    mt-24 md:mt-12 md:py-5
                    "
        >
            <div className="flex flex-col md:max-w-[28rem] lg:max-w-[29rem]" data-aos="fade-down">
                <div className="text-xl sm:text-xl md:text-2xl lg:text-[26px] mb-1 font-poppins text-white font-extralight ">
                    Olá!👋 Eu sou{" "}
                </div>
                <h1 className="text-slate-100 text-[18px] font-poppins sm:text-xl md:text-2xl lg:text-[28px] font-bold" >
                    Eduardo Matos,
                </h1>
                <h1
                    className="
                text-[19.9px] sm:text-2xl md:text-3xl lg:text-[32px] font-black font-poppins
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
            <div className="relative w-52 sm:w-60 md:w-[80%] md:mb-10 md:ml-7" data-aos="fade-right" >
                <div className='absolute h-[40%] w-[40%] blur-3xl  bg-gradient-to-tr from-[#8680C4] from-40% to-transparent  -z-20  top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2'></div>
                <Image
                    src="/ImgHomePortfolio.png"
                    width={1000}
                    height={1000}
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
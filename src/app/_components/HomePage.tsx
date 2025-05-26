import React from "react";
import { FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import { MdOutlineMailOutline } from "react-icons/md";
import Image from "next/image";
import Carousel from "./Carousel";
import SkillsPage from "./SkillsPage";

function HomePage() {
    return (
        <>
            <section
                id="home"
                className="
                    grid md:grid-cols-[3fr_2fr] w-full 
                    max-w-[51rem] items-center justify-between justify-items-center md:justify-items-start
                    pt-10 md:py-5
                    "
            >
                <div className="flex flex-col md:max-w-[28rem] lg:max-w-[29rem]">
                    <div className="text-[17px] sm:text-xl md:text-2xl lg:text-[26px] mb-1 font-poppins text-white font-extralight ">
                        Olá!👋 Eu sou{" "}
                    </div>
                    <h1 className="text-slate-100 text-[17px] font-poppins sm:text-xl md:text-2xl lg:text-[28px] font-bold">
                        Eduardo Matos,
                    </h1>
                    <h1
                        className="
                text-[19px] sm:text-2xl md:text-3xl lg:text-[32px] font-black font-poppins
                bg-[linear-gradient(to_bottom,_#fff,_#fff,_#fff,_#A6CCF7,_#0055F2,_#003DBF,_#003DBF)] bg-clip-text 
                text-transparent"
                    >
                        desenvolvedor de Software!
                    </h1>
                    <div>
                        <p className="font-extralight font-poppins text-white text-justify pr-3 text-[13px] sm:text-base md:text-base lg:text-lg">
                            Como desenvolvedor Full-Stack e estudante de <b>Sistemas de
                                Informação</b> no CIn/UFPE, meu foco é usar tecnologia para resolver
                            problemas e entregar uma boa solução de impacto real.
                        </p>
                    </div>
                    <div className="flex mt-2 gap-2 sm:gap-4">
                        <a
                            href="https://github.com/eduardomatos7"
                            target="_blank"
                            className="
                            flex w-5 h-5 sm:w-7 sm:h-7 p-1 sm:p-0 cursor-pointer rounded-full bg-transparent border-[1px]
                            border-white justify-center items-center"
                        >
                            <FaGithub color="#fff" />
                        </a>
                        <a
                            href="https://www.linkedin.com/in/eduardo-matos07"
                            target="_blank"
                            className="
                            flex w-5 h-5 sm:w-7 sm:h-7 p-1 sm:p-0 cursor-pointer rounded-full bg-transparent border-[1px]
                            border-white justify-center items-center"
                        >
                            <FaLinkedin color="#fff" />
                        </a>
                        <a
                            href="mailto:emfs@cin.ufpe.br"
                            target="_blank"
                            className="flex w-5 h-5 sm:w-7 sm:h-7 p-1 sm:p-0 cursor-pointer rounded-full bg-transparent border-[1px] border-white justify-center items-center"
                        >
                            <MdOutlineMailOutline color="#fff" />
                        </a>
                        <a
                            href="https://wa.me/77999759806"
                            target="_blank"
                            className="flex w-5 h-5 sm:w-7 sm:h-7 p-1 sm:p-0 cursor-pointer rounded-full bg-transparent border-[1px] border-white justify-center items-center"
                        >
                            <FaWhatsapp color="#fff" />
                        </a>
                    </div>
                </div>
                <div className="w-52 sm:w-72 md:w-full">
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
            <Carousel />
            <section id="skills" className=" mt-16 md:mt-32 pb-10 min-h-screen">
                <SkillsPage />
            </section >
        </>
    );
}

export default HomePage;

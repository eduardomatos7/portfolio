import React from 'react'
import { FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import { MdOutlineMailOutline } from "react-icons/md";
import Image from 'next/image';

function HomePage() {
    return (
        <section className="
            grid md:grid-cols-[3fr_2fr] w-full 
            max-w-[51rem] mx-auto items-center justify-between
            pt-10 md:p-5
            ">
            <div className='flex flex-col md:max-w-[28rem] lg:max-w-[29rem]'>
                <div className="text-lg md:text-2xl lg:text-[26px] mb-1 text-white font-extralight tracking-wider ">Olá!👋 Eu sou </div>
                <h1 className='text-slate-100 text-lg md:text-2xl lg:text-[28px] font-bold'>Eduardo Matos,</h1>
                <h1 className='
                text-xl md:text-3xl lg:text-[33px] font-black 
                bg-[linear-gradient(to_bottom,_#fff,_#fff,_#fff,_#A6CCF7,_#0055F2,_#003DBF,_#003DBF)] bg-clip-text 
                text-transparent'>
                    desenvolvedor de Software!
                </h1>
                <div><p className='font-extralight text-white text-justify pr-3 text-sm md:text-base lg:text-lg tracking-wider'>
                    Como desenvolvedor Full-Stack e estudante de Sistemas de Informação no CIn/UFPE, meu foco é usar tecnologia para resolver
                    problemas e entregar uma boa solução de impacto real.
                </p></div>
                <div className='flex mt-2 gap-4'>
                    <a href='https://github.com/eduardomatos7' target='_blank' className='flex w-7 h-7 cursor-pointer rounded-full bg-transparent border-[1px] border-white justify-center items-center'><FaGithub color='#fff' size={16} /></a>
                    <a href='https://www.linkedin.com/in/eduardo-matos07' target='_blank' className='flex w-7 h-7 cursor-pointer rounded-full bg-transparent border-[1px] border-white justify-center items-center'><FaLinkedin color='#fff' size={16} /></a>
                    <a href='mailto:emfs@cin.ufpe.br' target='_blank' className='flex w-7 h-7 cursor-pointer rounded-full bg-transparent border-[1px] border-white justify-center items-center'><MdOutlineMailOutline color='#fff' size={16} /></a>
                    <a href='https://wa.me/77999759806' target='_blank' className='flex w-7 h-7 cursor-pointer rounded-full bg-transparent border-[1px] border-white justify-center items-center'><FaWhatsapp color='#fff' size={16} /></a>
                </div>
            </div>
            <div>
                <Image src="/Photo.png" width={400} height={400} quality={100} priority={true} alt='foto perfil' />
            </div>
        </section>
    )
}

export default HomePage
import Image from 'next/image'
import React from 'react'
import { FaGithub, FaLinkedin, FaWhatsapp } from 'react-icons/fa'
import { MdOutlineMailOutline } from 'react-icons/md'

function HomeSection() {
    return (
        <section
            id="home"
            className="relative w-full mt-28 sm:mt-32 md:mt-32"
        >
            <div className="mx-auto max-w-7xl ">
                <div className="lg:grid gap-y-12 flex flex-col-reverse lg:grid-cols-[4fr_3fr] items-center md:justify-center">
                    {/* Text / Intro */}
                    <div className="flex flex-col" data-aos="fade-down">
                        <div className="inline-flex items-center gap-2 mb-4">
                            <span className="text-sm tracking-wide uppercase text-slate-300/80 font-light border border-slate-600/40 rounded-full px-3 py-1 backdrop-blur-sm bg-white/5">Bem-vindo</span>
                        </div>
                        <p className="font-poppins text-sm sm:text-base tracking-wide text-slate-200/90 mb-1 font-medium">Olá, eu sou</p>
                        <h1 className="font-poppins font-medium leading-tight text-[clamp(1.2rem,2.8vw,2.2rem)] text-white">
                            <span className="relative inline-block">Eduardo Matos</span>
                        </h1>
                        <h2 className=" font-poppins font-extrabold text-[clamp(1.4rem,3.4vw,2.4rem)] leading-snug whitespace-nowrap bg-[linear-gradient(to_bottom,_#fff,_#fff,_#fff,_#A6CCF7,_#0055F2,_#003DBF,_#003DBF)] bg-clip-text  text-transparent">
                            Desenvolvedor de Software
                        </h2>
                        <p className="mt-2 max-w-xl text-base sm:text-lg leading-relaxed font-poppins text-slate-200/90 font-extralight">
                            Desenvolvedor <b>Full-Stack</b> e estudante de <b>Sistemas de Informação</b> no CIn/UFPE. Busco criar soluções digitais
                            que aliem <span className="text-sky-400 font-medium">qualidade</span>, <span className="text-sky-400 font-medium">performance</span> e impacto real.
                        </p>

                        {/* Social */}
                        <div className="mt-3 flex gap-3 sm:gap-4" data-aos="fade-up" data-aos-delay="300">
                            {[
                                { href: 'https://github.com/eduardomatos7', icon: <FaGithub className="w-4 h-4 sm:w-5 sm:h-5" />, label: 'GitHub' },
                                { href: 'https://www.linkedin.com/in/eduardo-matos07', icon: <FaLinkedin className="w-4 h-4 sm:w-5 sm:h-5" />, label: 'LinkedIn' },
                                { href: 'mailto:emfs@cin.ufpe.br', icon: <MdOutlineMailOutline className="w-4 h-4 sm:w-5 sm:h-5" />, label: 'Email' },
                                { href: 'https://wa.me/77999759806', icon: <FaWhatsapp className="w-4 h-4 sm:w-5 sm:h-5" />, label: 'WhatsApp' }
                            ].map((s, i) => (
                                <a
                                    key={s.label}
                                    href={s.href}
                                    target="_blank"
                                    aria-label={s.label}
                                    rel="noopener noreferrer"
                                    className="group flex h-9 w-9 sm:h-10 sm:w-10 items-center justify-center rounded-full border border-white/15 bg-white/5 backdrop-blur-sm text-white transition hover:border-sky-400/60 hover:bg-sky-500/10 hover:shadow-[0_0_0_3px_rgba(56,189,248,0.25)] focus:outline-none focus:ring-2 focus:ring-sky-400/70"
                                    data-aos="flip-left"
                                    data-aos-delay={300 + i * 200}
                                >
                                    {s.icon}
                                    <span className="sr-only">{s.label}</span>
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Image */}
                    <div className="relative order-first md:order-none flex justify-center md:justify-center" data-aos="fade-right">
                        <div className="relative w-52 sm:w-60 md:w-60 xl:w-72 ">
                            <div className='absolute inset-0 -z-10 rounded-3xl bg-gradient-to-tr from-[#4a71ff33] via-[#335cff22] to-transparent blur-2xl' />
                            <div className='absolute -inset-1 -z-10 rounded-3xl bg-[radial-gradient(circle_at_30%_20%,#ffffff10,transparent_70%)]' />
                            <Image
                                src="/assets/images/ImgHomePortfolio.png"
                                width={800}
                                height={800}
                                quality={100}
                                priority
                                className="w-full rounded-3xl border border-white/10 shadow-2xl shadow-sky-900/40 animate-bounce-gentle pb-3 lg:pb-5"
                                alt="Foto de perfil"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default HomeSection
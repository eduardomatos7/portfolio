import Image from 'next/image'
import React from 'react'

const imageTechs = [
    { id: "6", tech: "/techs/logos--react.png", alt: "React" },
    { id: "5", tech: "/techs/javascript.png", alt: "Javascript" },
    { id: "13", tech: "/techs/typescript.png", alt: "Typescript" },
    { id: "12", tech: "/techs/tailwindcss.png", alt: "Tailwindcss" },
    { id: "14", tech: "/techs/logos--react.png", alt: "React native" },
    { id: "7", tech: "/techs/next.js.png", alt: "Nextjs" },
    { id: "4", tech: "/techs/HTML.png", alt: "HTML5" },
    { id: "1", tech: "/techs/css3.png", alt: "CSS3" },
    { id: "3", tech: "/techs/git.png", alt: "Git" },
    { id: "2", tech: "/techs/express.png", alt: "Express" },
    { id: "8", tech: "/techs/node.js.png", alt: "Nodejs" },
    { id: "9", tech: "/techs/postgres.png", alt: "Postgres" },
    { id: "10", tech: "/techs/prisma.png", alt: "Prisma" },
    { id: "11", tech: "/techs/python.png", alt: "python" },
]

function Carousel() {
    return (
        <section className='max-w-96 sm:max-w-[30rem] md:max-w-[51rem] flex flex-col justify-center h-40'>
            <div className='w-full text-center'><p className='text-gray-400 text-sm sm:text-base md:text-lg font-light uppercase mb-5'>Techs I Work</p></div>
            <div className="relative max-w-72 sm:max-w-[30rem] md:max-w-[51rem] overflow-hidden">
                <div className="flex w-max animate-carousel gap-2">
                    {[...imageTechs, ...imageTechs].map(({ id, tech, alt }, idx) => (
                        <div className='
                            flex flex-col gap-1 items-center p-3
                            hover:scale-110 transition-trasnform duration-150 ease-linear'
                            key={id + '-' + idx}>
                            <div className="w-10 h-10 flex items-center justify-center bg-transparent">
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
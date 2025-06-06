import React from 'react'
import Image from 'next/image'
import { IoRocketOutline } from "react-icons/io5";
import { FaGithub } from "react-icons/fa";
import { propsProject } from '../interfaces/projectCards';

function ProjectCard({ project }: { project: propsProject }) {
    const { technologies, title, description, srcImage, github, deploy, platforms } = project
    return (
        <div className=' h-[28rem] w-[85%] sm:w-[60%] lg:max-h-80  md:max-w-[33%] grid grid-rows-[4fr_1fr_4fr] border-[1px] border-gray-50 bg-white/5 rounded-lg overflow-hidden'
            data-aos="fade-up"
            data-aos-anchor-placement="center-bottom">
            <div className='flex border-b-[1px] items-center overflow-hidden'>
                <Image
                    className="w-full h-full object-fill"
                    src={srcImage}
                    priority
                    width={200}
                    height={200}
                    alt={title} />
            </div>
            <div className='border-b-[1px] flex gap-3 p-2 md:gap-5 px-3 justify-center items-center overflow-hidden'>
                {technologies.map(({ tech, width, alt, id }) => (
                    <Image className="object-contain max-h-8 md:max-h-6 w-auto" src={tech} width={width} height={20} alt={alt} key={id} priority />
                ))}
            </div>
            <div className=' flex flex-col justify-between py-2 gap-2 px-4 overflow-hidden'>
                <div className='flex flex-col gap-1'>
                    <h2 className='flex items-center md:items-end font-medium font-inter text-[18px] md:text-[17px]'>{title}<span className='ml-2 text-sm md:text-xs md:mb-[2px] text-[#77A2FF] font-inter font-extralight'>{platforms}</span></h2>

                    <p className='text-base md:text-sm font-inter text-gray-400 font-light'>{description}</p>
                </div>
                <div className='flex gap-4 mb-2'>
                    {deploy &&
                        <button
                            className="relative py-2 px-4 border-[1px] border-[#77A2FF] rounded-md overflow-hidden group transition-all duration-500 hover:scale-105 hover:shadow-[0_0_10px_rgba(27,122,255,0.5)]">
                            <span className="relative">
                                <a target="_blank"
                                    href={deploy} className='flex items-center gap-1 font-poppins text-base md:text-sm text-center'>
                                    Prévia <IoRocketOutline />
                                </a>
                            </span>
                            <span className="pointer-events-none absolute -top-1/2 -left-1/2 w-[200%] h-[300%] 
                            opacity-0 group-hover:opacity-100 transition-all duration-300 before:content-[''] 
                            before:absolute before:inset-0 before:bg-gradient-to-tr before:from-cyan-400
                             before:via-cyan-400/50 before:to-transparent before:rotate-[-45deg] 
                             before:transition-all before:duration-300 group-hover:before:translate-y-full"></span>
                        </button>
                    }

                    <button>
                        <a href={github}
                            target='_blank'
                            className='flex items-center justify-center font-poppins gap-2 text-base md:text-sm text-center'>Github <FaGithub />
                        </a>
                    </button>
                </div>

            </div>
        </div>
    )
}

export default ProjectCard
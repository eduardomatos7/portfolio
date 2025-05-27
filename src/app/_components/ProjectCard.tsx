import React from 'react'
import Image from 'next/image'
import { IoRocketOutline } from "react-icons/io5";
import { FaGithub } from "react-icons/fa";
import { propsProject } from '../interfaces/projectCards';

function ProjectCard({ project }: { project: propsProject }) {
    const { technologies, title, description, srcImage, github, deploy } = project
    return (
        <div className=' max-h-72 lg:max-h-80 max-w-56 md:max-w-[33%] grid grid-rows-[4fr_1fr_4fr] border-[1px] border-gray-50'>
            <div className='flex overflow-hidden border-b-[1px] items-center'>
                <Image
                    className="w-full" src={srcImage}
                    width={200}
                    height={200}
                    alt={title} />
            </div>
            <div className='border-b-[1px] flex gap-3 md:gap-5 px-3 justify-center items-center overflow-hidden'>
                {technologies.map(({ tech, width, alt, id }) => (
                    <Image className="object-contain max-h-4 md:max-h-6" src={tech} width={width} height={20} alt={alt} key={id} />
                ))}
            </div>
            <div className=' flex flex-col justify-between py-2 gap-2 px-4 overflow-hidden'>
                <div className='flex flex-col gap-1'>
                    <h2 className='font-medium font-inter text-base md:text-[17px]'>{title}</h2>
                    <p className='text-xs md:text-sm font-inter text-gray-400 font-light'>{description}</p>
                </div>
                <div className='flex gap-4 mb-2'>
                    <button
                        className='py-1 px-3 border-[1px] border-[#77A2FF] rounded-md' >
                        <a
                            target="_blank"
                            href={deploy} className='flex items-center gap-1 font-poppins text-xs md:text-sm text-center'>Deploy <IoRocketOutline />
                        </a>
                    </button>
                    <button>
                        <a href={github}
                            target='_blank'
                            className='flex items-center justify-center font-poppins gap-1 text-xs md:text-sm text-center'>Github <FaGithub />
                        </a>
                    </button>
                </div>

            </div>
        </div>
    )
}

export default ProjectCard
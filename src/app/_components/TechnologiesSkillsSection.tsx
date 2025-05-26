import { StaticImport } from 'next/dist/shared/lib/get-img-props'
import Image from 'next/image'
import React, { Key } from 'react'

interface props {
    title: String,
    technologies: {
        id: Key,
        tech: string | StaticImport,
        alt: string
    }[]
}

function TechnologiesSkills({ title, technologies }: props) {
    return (
        <div className='flex flex-col gap-4 '>
            <div className='mt-7 sm:mt-12 md:mt-16 flex justify-center'>
                <h1 className='text-white text-lg sm:text-xl md:text-2xl font-medium font-inter'>{title}</h1>
            </div>
            <div className='
            flex flex-wrap w-full justify-center items-center
            overflow-hidden gap-2 lg:gap-4 p-4 h-max
             bg-white bg-opacity-10 rounded-lg'>
                {technologies.map((tech) => (
                    <div className='
                    flex flex-col gap-1 items-center p-2 
                    hover:bg-[#4d79cb] hover:bg-opacity-10 hover:scale-110 rounded-md cursor-pointer
                    transition-all duration-300 ease-in-out'
                        key={tech.id}>
                        <Image className='w-7 sm:w-9 md:w-11' src={tech.tech} width={40} height={40} alt={tech.alt} />
                        <p className='text-white text-xs'>{tech.alt}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default TechnologiesSkills
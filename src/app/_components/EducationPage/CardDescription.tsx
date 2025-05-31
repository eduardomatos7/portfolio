import Image from 'next/image'
import Link from 'next/link';
import React from 'react'
import { CiLocationOn } from 'react-icons/ci';
import { IoMdTime } from "react-icons/io";
import { HiLink } from "react-icons/hi2";
import ButtonLink from './ButtonLink';
import { educationInfo } from '@/app/interfaces/educationCardInterface';
import { GrCertificate } from 'react-icons/gr';


function CardDescription({ educationInfo, certificate }: educationInfo) {
    const { logo, alt, titleAcademic, educationalInstitution, startDate, endDate, location, resume, pageLink, certificateLink } = educationInfo


    return (
        <div className='
        grid relative p-3 overflow-hidden
        border-[1px] border-[#ABB2BF] rounded-lg
        bg-gradient-to-b from-[#0a268b] to-[#343e5d]
        w-[85%] max-h-[35rem] lg:max-h-[31rem]
        '
            data-aos="flip-left" data-aos-anchor-placement="top-bottom" data-aos-once="false" data-aos-duration="2000">
            <div className='flex flex-col font-poppins text-white gap-2'>
                <Image className="h-9 md:h-11 w-9 md:w-11 rounded-md md:rounded-lg object-contain" src={logo} width={100} height={100} alt={alt} />
                <div>
                    <h1 className=' text-base md:text-lg font-poppins font-semibold leading-tight'>{titleAcademic}</h1>
                    <p className=' text-xs md:text-sm font-extralight pb-3 pt-2'>{educationalInstitution}</p>
                </div>
                <div className='w-fill h-[.5px] bg-white bg-opacity-[28%]' />
                <div className='flex items-center gap-1 font-light'>
                    <IoMdTime className="mb-[2px]" size={18} />
                    <p className=' text-xs md:text-sm font-light'>{startDate} - {endDate}</p>
                </div>
                <div className='w-fill h-[.5px] bg-white bg-opacity-[28%]' />
                <div className='flex items-center gap-1 font-light '>
                    <CiLocationOn className="mb-[2px]" size={18} />
                    <p className=' text-xs md:text-sm font-light'>{location}</p>
                </div>
                <div className='w-fill h-[.5px] bg-white bg-opacity-[28%]' />
                <h3 className=' text-sm md:text-base font-semibold'>Resumo</h3>
                <p className=' text-[11px] md:text-[13px] font-extralight '>{resume}</p>
            </div>
            <div className='flex gap-2 justify-end mt-5'>
                {certificate &&
                    <ButtonLink certificate={certificate} certificateLink={certificateLink} >
                        <GrCertificate color='white' size={16} />
                    </ButtonLink>
                }
                <Link target="_blank" href={pageLink}>
                    <ButtonLink>
                        <HiLink color='white' className="h-4 w-4 md:h-auto md:w-auto" size={20} />
                    </ButtonLink>
                </Link>
            </div>
        </div>
    )
}

export default CardDescription
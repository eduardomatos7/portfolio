import { buttonInputs } from '@/app/interfaces/educationCardInterface'
import Link from 'next/link'
import React from 'react'


function ButtonLink({ children, certificate, certificateLink }: buttonInputs) {
    return (
        <div className='
                bg-gradient-to-t from-[#3b82f6] to-white  h-fit
                rounded-md md:rounded-lg cursor-pointer hover:bg-gradient-to-t hover:from-orange-500 hover:to-white 
            '>
            <div className='
                    text-white text-[10px] md:text-xs font-poppins
                    bg-[#33406C] hover:bg-[#404a6c]
                    transition-colors duration-200 ease-out 
                    m-[1px] p-1 md:p-1.5 rounded-md md:rounded-lg cursor-pointer
                    border-2 border-transparent
                '>
                {certificateLink !== undefined ? (
                    <Link target="_blank" href={certificateLink} className='flex gap-1'>
                        {certificate === true && "Certificados"}
                        {children}
                    </Link>)
                    : children
                }
            </div>
        </div>
    )
}

export default ButtonLink
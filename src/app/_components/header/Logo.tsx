import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

function Logo() {
    return (
        <Link href="/">
            <button className='relative w-12 h-5 md:w-14 md:h-6 flex items-center justify-center'>
                <Image src="/assets/images/logo.png" fill alt="" className='object-contain' priority sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" />
            </button>
        </Link>

    )
}

export default Logo
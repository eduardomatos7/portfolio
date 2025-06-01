import React from 'react'
import CardDescription from './CardDescription'
import TitlePage from '../TitlePage'
import { cinInfo, ifInfo, onebitcodeInfo } from '@/app/_utils/education'
import DividerY from './DividerY'


function EducationPage() {
    return (
        <>
            <TitlePage title="Formação" />
            <div className='grid mt-16 gap-y-10 md:gap-y-0 md:grid-cols-[40%,0.1%,40%] items-center md:mt-5 grid-rows-3 grid-cols-1 md:justify-center md:gap-x-10 mb-36'>
                <div className='flex justify-center col-span-1 row-span-1 ' >
                    <CardDescription educationInfo={cinInfo} />
                </div>
                <div className='flex justify-center col-span-1 row-span-1 md:col-start-3 md:row-start-2'>
                    <CardDescription educationInfo={onebitcodeInfo} certificate />
                </div>
                <div className='flex justify-center md:col-span-1 md:row-span-1 md:col-start-1 md:row-start-3'>
                    <CardDescription educationInfo={ifInfo} />
                </div>
                <div className=' hidden justify-center md:flex justify-items-center md:col-start-2 md:col-span-1 md:row-span-3 ' >
                    <DividerY />
                </div>
            </div>
        </>
    )
}

export default EducationPage
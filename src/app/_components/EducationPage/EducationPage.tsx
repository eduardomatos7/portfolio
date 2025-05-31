import React from 'react'
import CardDescription from './CardDescription'
import TitlePage from '../TitlePage'
import { cinInfo, ifInfo, onebitcodeInfo } from '@/app/_utils/education'
import DividerY from './DividerY'


function EducationPage() {
    return (
        <>
            <TitlePage title="Formação" />
            <div className='grid mt-16 gap-y-10 lg:gap-y-0 lg:grid-cols-[40%,0.1%,40%] items-center lg:mt-5 grid-rows-3 grid-cols-1 md:justify-center lg:gap-x-10 mb-36'>
                <div className='flex justify-center col-span-1 row-span-1 ' >
                    <CardDescription educationInfo={cinInfo} />
                </div>
                <div className='flex justify-center col-span-1 row-span-1 lg:col-start-3 lg:row-start-2'>
                    <CardDescription educationInfo={onebitcodeInfo} certificate />
                </div>
                <div className='flex justify-center lg:col-span-1 lg:row-span-1 lg:col-start-1 lg:row-start-3'>
                    <CardDescription educationInfo={ifInfo} />
                </div>
                <div className=' hidden justify-center lg:flex justify-items-center lg:col-start-2 lg:col-span-1 lg:row-span-3 ' >
                    <DividerY />
                </div>
            </div>
        </>
    )
}

export default EducationPage
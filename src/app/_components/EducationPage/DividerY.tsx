import React from 'react'
import { LuDiamondPlus } from "react-icons/lu";

function DividerY() {
    return (
        <div className='flex flex-col items-center gap-y-2'>
            <div className='lg:h-[19rem] bg-gradient-to-b from-transparent to-white w-[1px]'></div>
            <div><LuDiamondPlus color='white' size={14} /></div>
            <div className='lg:h-[19rem] bg-white w-[1px]'></div>
            <div><LuDiamondPlus color='white' size={14} /></div>
            <div className='lg:h-[19rem] bg-white w-[1px]'></div>
            <div><LuDiamondPlus color='white' size={14} /></div>
            <div className='lg:h-[19rem] bg-white w-[1px]'></div>
            <div><LuDiamondPlus color='white' size={14} /></div>
            <div className='lg:h-[19rem] bg-gradient-to-t from-transparent to-white w-[1px]'></div>

        </div>
    )
}

export default DividerY
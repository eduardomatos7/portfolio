import React from 'react'

interface ButtonProps {
    children: React.ReactNode;
}

function ButtonDownloadCV({ children }: ButtonProps) {
    return (
        <div className='flex items-center h-full'>
            <div className='relative bg-gradient-to-t from-[#3b82f6] to-white rounded-lg'>
                <button className="
                    relative
                    flex flex-row gap-1 
                    items-center justify-center
                    border-2 border-transparent
                    bg-[#2B2C4F]
                    px-2 py-1 m-[1px]
                    rounded-lg
                    hover:bg-[#353660]
                    font-poppins font-medium text-xs md:text-sm text-white
                    transition-all duration-300 ease-linear">
                    {children}
                </button>
            </div>
        </div>
    )
}

export default ButtonDownloadCV
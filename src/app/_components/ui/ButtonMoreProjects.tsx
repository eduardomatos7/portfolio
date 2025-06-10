import React from 'react'

interface ButtonProps {
    children: React.ReactNode;
}

function ButtonMoreProjects({ children }: ButtonProps) {
    return (
        <div className='flex items-center h-full' data-aos="fade-up" data-aos-duration="1500">
            <button className="
                    border-[1px] border-blue-500
                    bg-[#2B2C4F]
                    px-3 py-2 m-[1px]
                    rounded-md
                    hover:bg-[#353660] hover:shadow-[0_1px_20px_rgba(27,122,255,0.5)]
                    font-poppins font-medium text-xs md:text-sm text-white
                    transition-all duration-300 ease-linear">
                {children}
            </button>
        </div>
    )
}

export default ButtonMoreProjects
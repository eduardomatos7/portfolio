import React from 'react'

interface ButtonProps {
    children: React.ReactNode;
}

function ButtonDownloadCV({ children }: ButtonProps) {
    return (
        <div className="flex items-center h-full">
            <div className="group relative p-[2px] rounded-md bg-gradient-to-r from-blue-500 via-indigo-700 to-blue-800 shadow-[0_0_12px_-2px_rgba(79,70,229,0.5)] hover:shadow-[0_0_18px_-2px_rgba(99,102,241,0.65)] transition-shadow duration-500">
                <button
                    className="relative flex flex-row gap-2 items-center justify-center rounded-[5px] px-3 py-2 bg-[#1f2247]/90 backdrop-blur-sm text-white font-poppins font-medium text-xs md:text-xs tracking-wide overflow-hidden transition-all duration-300
                    before:absolute before:inset-0 before:bg-[radial-gradient(circle_at_20%_20%,rgba(99,102,241,0.25),transparent_60%)] before:opacity-0 group-hover:before:opacity-100
                    hover:bg-[#2a2f5a]/90 focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400/70">
                    <span className="pointer-events-none absolute bottom-0 left-0 h-[2px] w-0 bg-gradient-to-r from-transparent via-blue-600 to-transparent group-hover:w-full transition-all duration-500" />
                    {children}
                </button>
            </div>
        </div>
    )
}

export default ButtonDownloadCV
"use client"
import { Box, CodeXml, Download, FileUser, GraduationCap, Wrench } from 'lucide-react'
import React from 'react'
import ButtonDownloadCV from './ButtonDownloadCV'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

function Header() {
    const pathname = usePathname();

    const navItems = [
        { path: '/', label: 'Início', icon: <CodeXml size={20} /> },
        { path: '/skills', label: 'Habilidades', icon: <Wrench size={20} /> },
        { path: '/projects', label: 'Projetos', icon: <Box size={20} /> },
        { path: '/education', label: 'Formação', icon: <GraduationCap size={20} /> },
        { path: '/resume', label: 'Resumo', icon: <FileUser size={20} /> },
    ];

    return (
        <div className="flex justify-center">
            <header>
                <nav className="
                h-16 min-w-fit px-8 flex
                gap-[35px] justify-center  
                bg-[#121237] text-white font-poppins
                rounded-b-xl animated-border">
                    {navItems.map((item) => (
                        <Link
                            key={item.path}
                            href={item.path}
                            className={`
                                flex flex-row gap-2 items-center 
                                font-poppins font-light text-sm 
                                ${pathname === item.path ? "text-[#5C96FF]" : ""} 
                                hover:text-[#5C96FF] transition-colors duration-150 ease
                            `}
                        >
                            {item.icon} {item.label}
                        </Link>
                    ))}
                    <ButtonDownloadCV>
                        <Download size={18} className="mr-1" />
                        Baixar CV
                    </ButtonDownloadCV>
                </nav>
            </header>
        </div>
    )
}

export default Header
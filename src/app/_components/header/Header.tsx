import { Box, CodeXml, Download, FileUser, GraduationCap, Wrench } from 'lucide-react'
import React from 'react'
import ButtonDownloadCV from './ButtonDownloadCV'
import Link from 'next/link'
function Header() {
    return (
        <div className="flex justify-center">
            <header>
                <nav className="
                h-16 min-w-fit px-8 flex 
                gap-[35px] justify-center  
                bg-[#121237] text-white font-poppins
                rounded-b-xl animated-border">
                    <Link href="/" className="flex flex-row gap-2 items-center font-poppins font-light text-sm"><CodeXml size={20} /> Início</Link>
                    <Link href="/" className="flex flex-row gap-2 items-center font-poppins font-light text-sm"><Wrench size={20} /> Habilidades</Link>
                    <Link href="/" className="flex flex-row gap-2 items-center font-poppins font-light text-sm"> <Box size={20} />Projetos</Link>
                    <Link href="/" className="flex flex-row gap-2 items-center font-poppins font-light text-sm"> <GraduationCap size={20} />Formação</Link>
                    <Link href="/" className="flex flex-row gap-2 items-center font-poppins font-light text-sm"> <FileUser size={20} />Resumo</Link>
                    <ButtonDownloadCV >
                        <Download size={18} className="mr-1" />
                        Baixar CV
                    </ButtonDownloadCV>
                </nav>
            </header>
        </div>
    )
}

export default Header
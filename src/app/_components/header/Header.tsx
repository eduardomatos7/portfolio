"use client"
import { Box, CodeXml, Download, FileUser, GraduationCap, Wrench, Menu, X } from 'lucide-react'
import React, { useEffect, useState } from 'react'
import ButtonDownloadCV from './ButtonDownloadCV'
import Link from 'next/link'
import { useAnimation, motion } from 'motion/react'
import Logo from './Logo'

function Header() {
    const [openMenu, setOpenMenu] = useState<boolean>(false)
    const delayItemsMenu = `transform transition-all duration-300 ease-out ${openMenu ? 'translate-x-0 opacity-100' : 'translate-x-8 opacity-0'}`

    const navItems = [
        { path: '/#projects', label: 'Projetos', icon: <Box size={20} /> },
        { path: '/#skills', label: 'Habilidades', icon: <Wrench size={20} /> },
        { path: '/#education', label: 'Formação', icon: <GraduationCap size={20} /> },
        { path: '/#resume', label: 'Sobre mim', icon: <FileUser size={20} /> },
    ];
    function handleMenu() {
        setOpenMenu(!openMenu)
    }
    const controls = useAnimation();
    const [lastScrollY, setLastScrollY] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY;


            if (currentScrollY > lastScrollY) {
                controls.start({ y: "-110%" });
            } else {
                controls.start({ y: "0%" });
            }

            setLastScrollY(currentScrollY);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, [lastScrollY, controls]);



    return (
        <div className='fixed top-0 w-[90%] z-10 md:w-[51rem]'>
            <div className="flex justify-center relative">
                {openMenu && (
                    <div
                        className="fixed inset-0 bg-black bg-opacity-50 z-10 md:hidden transition-opacity duration-300"
                        onClick={() => setOpenMenu(false)}
                    ></div>
                )}
                <motion.header
                    animate={controls}
                    initial={{ y: 0 }}
                    transition={{ duration: 0.25 }}
                    className="
                h-16 w-full
                gap-[35px] justify-center
                bg-[#121237] text-white font-poppins
                rounded-b-xl animated-border">
                    <nav className="
                        hidden md:flex
                        h-16 min-w-fit px-10
                        gap-[35px] justify-between items-center 
                        bg-[#121237] text-white font-poppins
                        rounded-b-xl ">
                        <Logo />
                        <div className='flex gap-9'>
                            {navItems.map((item) => (
                                <Link
                                    key={item.path}
                                    href={item.path}
                                    className={`
                                flex flex-row gap-2 items-center 
                                font-poppins font-light text-sm  
                                hoverUnderline
                            `}
                                >
                                    {item.label}
                                </Link>
                            ))}
                        </div>
                        <Link href="/assets/pdf/curriculo_att.pdf" target='_blank'>
                            <ButtonDownloadCV>
                                <Download size={18} className="text-white" />
                                Baixar CV
                            </ButtonDownloadCV>
                        </Link>
                    </nav>

                    <nav
                        className='flex justify-between bg-[#121237] h-16 items-center w-full md:hidden px-6 rounded-b-xl' >
                        <div className='md:hidden flex gap-2 text-white justify-center items-center '>
                            <Logo />
                        </div>
                        <button className='flex text-[14px] items-center gap-1 cursor-pointer font-light'
                            onClick={() => handleMenu()}>
                            <Menu size={24} />
                        </button>
                    </nav>

                </motion.header>

            </div>
            <div className={`
                bg-[#121237] h-screen w-48 fixed right-0 top-0 md:hidden z-30
                transform transition-transform duration-300 ease-in-out overflow-x-hidden
                ${openMenu ? 'translate-x-0' : 'translate-x-full'}
            `}>
                <div className="flex justify-end p-4">
                    <button
                        className={`text-white hover:text-[#5C96FF] transition-all duration-300 ease-out
                                  ${openMenu ? 'opacity-100 rotate-0' : 'opacity-0 rotate-90'}`}
                        onClick={() => setOpenMenu(false)}
                    >
                        <X size={24} />
                    </button>
                </div>
                <ul className='flex flex-col gap-6 w-full px-4 mb-6'>
                    <li key="home" className={delayItemsMenu} style={{ transitionDelay: "100ms" }}>
                        <Link
                            href="/"
                            className={`flex gap-2 
                                font-light text-sm text-white
                                hover:text-[#5C96FF] transition-colors
                                 duration-150 ease`}
                            onClick={() => setOpenMenu(false)}
                        >
                            <CodeXml size={20} />
                            Início
                        </Link>


                    </li>
                    {navItems.map((item, index) => (
                        <li key={item.path}
                            className={delayItemsMenu}
                            style={{ transitionDelay: `${100 + index * 100}ms` }}
                        >
                            <Link
                                href={item.path}
                                className={`flex gap-2 
                                font-light text-sm text-white 
                                hover:text-[#5C96FF] transition-colors
                                 duration-150 ease`}
                                onClick={() => setOpenMenu(false)}
                            >
                                {item.icon} {item.label}
                            </Link>
                        </li>
                    ))}
                    <div
                        onClick={() => setOpenMenu(false)}
                        className={delayItemsMenu}
                        style={{ transitionDelay: `${100 + navItems.length * 100}ms` }}
                    >
                        <Link href="/assets/pdf/curriculo_att.pdf" target='_blank'>
                            <ButtonDownloadCV>
                                <Download size={18} className="text-white" />
                                Baixar CV
                            </ButtonDownloadCV>
                        </Link>
                    </div>
                </ul>
            </div>
        </div >
    )
}

export default Header
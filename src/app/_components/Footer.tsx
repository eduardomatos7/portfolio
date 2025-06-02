import React from 'react'
import { FaGithub, FaLinkedin, FaWhatsapp } from 'react-icons/fa'
import { IoLocationOutline } from 'react-icons/io5'
import { MdCopyright, MdOutlineLocalPhone, MdOutlineMailOutline } from 'react-icons/md'

function Footer() {
    const styleContact = `flex gap-2 items-center text-sm md:text-base`
    const styleSocialIcons = `
                            flex w-7 h-7 sm:w-9 sm:h-9 p-1 
                            sm:p-0 cursor-pointer hover:transform hover:scale-110 
                            transition-transform duration-300 ease-out hover:bg-white/25 
                            bg-white/10 justify-center items-center
                            `
    return (
        <footer className='flex flex-col gap-3 px-3 md:px-10 py-5 sm:grid sm:grid-cols-3 h-max w-full bg-[#161654] font-poppins text-white'>
            <div className='sm:flex justify-center md:h-[84px] hidden'>
                <p className={styleContact}><IoLocationOutline /> Recife, Pernambuco</p>
            </div>
            <div className='flex justify-center'>
                <div className='flex flex-col gap-2 items-center'>
                    <p className='text-base md:text-lg font-extrabold '>Contato</p>
                    <div className='flex flex-col gap-2 justify-center '>
                        <p className={styleContact}><MdOutlineMailOutline color="#fff" />emfs@cin.ufpe.br</p>
                        <p className={styleContact}><MdOutlineLocalPhone />{`+55 (77) 9 9975-9806`}</p>
                    </div>
                </div>
            </div>
            <div className='flex flex-col gap-2  md:h-[84px] items-center'>
                <p className='text-base md:text-lg font-extrabold'>Redes sociais</p>
                <div className='flex gap-2 '>
                    <a
                        href="https://github.com/eduardomatos7" target="_blank" className={styleSocialIcons}>
                        <FaGithub color="#fff" size={20} />
                    </a>
                    <a href="https://www.linkedin.com/in/eduardo-matos07" target="_blank" className={styleSocialIcons}>
                        <FaLinkedin color="#fff" size={20} />
                    </a>
                    <a href="https://wa.me/77999759806" target="_blank" className={styleSocialIcons}
                    >
                        <FaWhatsapp color="#fff" size={20} />
                    </a>
                </div>
            </div>
            <div className='h-[1px] w-full col-span-3 bg-gray-400 my-5' />
            <div className='flex sm:col-span-3 justify-center px-3 sm:px-auto'>
                <p className='flex gap-1 justify-center md:items-center text-xs md:text-sm'>
                    <MdCopyright className='mt-[1px] md:mb-[2px]' />
                    2025 Eduardo Matos | Todos os direitos reservados.
                </p>
            </div>
        </footer>
    )
}

export default Footer
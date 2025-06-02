import React from 'react'

function ResumePage() {
    return (
        <section className='flex flex-col items-center gap-6 min-h-screen max-w-[90%] mx-auto justify-center text-white font-poppins py-20 '>
            <h1 className='text-3xl font-poppins font-bold text-center my-2 tracking-wide' data-aos="fade-down">
                <span className='text-white'>Sobre mim</span>
            </h1>
            <div className='flex flex-col md:flex-row items-center gap-6 w-full' data-aos="fade-right" data-aos-easing="linear" data-aos-delay="500">
                <div className='flex flex-col gap-4 border-l-4 border-blue-600 bg-white/5 p-6 rounded-lg shadow-md w-full text-[15px] font-light'>
                    <div className='flex items-center gap-2 mb-1'>
                        <span className='text-blueborder-blue-600 text-xl'>😁</span>
                        <span className='font-semibold text-white'>Destaco meu resumo em algumas frases </span>
                    </div>
                    <p>
                        Tenho <span className='text-blue-300 font-semibold'>21 anos</span>, sou estudante do <span className='text-blue-300 font-semibold'>5ª período</span> de Sistemas de Informação no CIn/UFPE e apaixonado por tecnologia (no geral) desde o ensino médio integrado, quando tive o contato com a área durante o curso técnico em Informática.
                    </p>
                    <p>
                        Possuo mais de <span className='text-blue-300 font-semibold'>2 anos de experiência</span> com <span className='font-semibold'>JavaScript</span>, <span className='font-semibold'>Python</span> e frameworks modernos (atualmente usando Next, React, Expres...), desenvolvendo sites e aplicativos com foco em boas práticas.
                    </p>
                    <p>
                        Atualmente, em paralelo com a faculdade, faço o curso da <span className='font-semibold text-blue-300'>OneBitCode</span> para me especializar ainda mais. No tempo livre, gosto de esportes como <span className='font-semibold'>futebol</span>, <span className='font-semibold'>corrida</span>, <span className='font-semibold'>academia</span> e de jogos — especialmente os clássicos ou com amigos.<br />
                        Meu objetivo atual é criar <span className='font-semibold underline'>soluções de qualidade</span>, tanto para web quanto para mobile.
                    </p>
                </div>
            </div>
        </section >
    )
}

export default ResumePage
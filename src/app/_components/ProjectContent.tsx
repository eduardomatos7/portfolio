import React from 'react'
import TitlePage from './TitlePage'
import ProjectCard from './ProjectCard'
import { medicAppProject, KanbanProject, StockItems, LeadsAPI, LibraryWitAuth } from '../_utils/projects';

function Projects() {

    return (
        <div>
            <TitlePage title="Projetos" />
            <p className='text-gray-400 text-base md:text-base font-light font-inter mt-5 text-left' data-aos="fade-up">
                Confira meus principais projetos desenvolvidos,
                tanto no front-end quanto no back-end. Ao clicar no card, você terá acesso a mais detalhes sobre cada projeto.
            </p>

            <div className='flex flex-wrap gap-y-8 md:gap-y-20 gap-x-5 md:gap-x-10 w-full justify-center items-center mt-10 text-white '>
                <ProjectCard project={medicAppProject} />
                <ProjectCard project={KanbanProject} />
                <ProjectCard project={LeadsAPI} />
                <ProjectCard project={LibraryWitAuth} />
                <ProjectCard project={StockItems} />
            </div>
        </div>
    )
}

export default Projects
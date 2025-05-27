import React from 'react'
import TitlePage from './TitlePage'
import ProjectCard from './ProjectCard'
import { medicAppProject, KanbanProject } from '../_utils/projects';

function Projects() {

    return (
        <div>
            <TitlePage title="Projetos" />
            <div className='flex flex-wrap gap-y-8 md:gap-y-20 gap-x-5 md:gap-x-10 w-full justify-center items-center mt-10 text-white '>
                <ProjectCard project={medicAppProject} />
                <ProjectCard project={KanbanProject} />
                <ProjectCard project={KanbanProject} />
                <ProjectCard project={medicAppProject} />
                <ProjectCard project={medicAppProject} />
                <ProjectCard project={KanbanProject} />
            </div>
        </div>
    )
}

export default Projects
import { FaGithub } from "react-icons/fa";
import {
  LeadsAPI,
  LeveSaude,
  LibraryWitAuth,
  medicAppProject,
  TnSeq,
} from "../_utils/projects";
import ProjectCard from "./ProjectCard";
import TitlePage from "./TitlePage";
import ButtonMoreProjects from "./ui/ButtonMoreProjects";

function Projects() {
  return (
    <div>
      <TitlePage title="Projetos" />
      <p
        className="text-gray-400 text-base md:text-base font-light font-inter mt-5 text-left"
        data-aos="fade-up"
      >
        Confira meus principais projetos desenvolvidos, tanto no front-end
        quanto no back-end. Ao clicar no card, você terá acesso a mais detalhes
        sobre cada projeto.
      </p>
      <div className="flex flex-col gap-16 items-center">
        <div className="flex flex-wrap gap-y-8 md:gap-y-20 gap-x-5 md:gap-x-5 w-full justify-center items-center mt-10 text-white ">
          <ProjectCard project={LeveSaude} />
          <ProjectCard project={medicAppProject} />
          <ProjectCard project={TnSeq} />
          <ProjectCard project={LibraryWitAuth} />
          <ProjectCard project={LeadsAPI} />
        </div>
        <ButtonMoreProjects>
          <a
            href="https://github.com/eduardomatos7?tab=repositories"
            target="_blank"
            className="flex flex-row gap-2 items-center justify-center"
          >
            Ver todos os projetos <FaGithub size={16} />
          </a>
        </ButtonMoreProjects>
      </div>
    </div>
  );
}

export default Projects;

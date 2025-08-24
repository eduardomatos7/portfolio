import { FaGithub } from "react-icons/fa";
import {
  KanbanProject,
  LeadsAPI,
  LeveSaude,
  LibraryWitAuth,
  medicAppProject,
  TnSeq,
} from "../_utils/projects";
import TitlePage from "./TitlePage";
import Card from "./Card";

function Projects() {
  return (
    <div>
      <TitlePage title="Projetos" />
      <p
        className="text-gray-400 text-base md:text-base font-light font-inter mt-5 text-left"
        data-aos="fade-up"
      >
        Confira meus principais projetos desenvolvidos, tanto no front-end
        quanto no back-end. Você pode ver vídeos demonstrando o uso da aplicação na prática, testar você mesmo por meio do deploy (previa) e também pode acessar o github para ver
        mais detalhes sobre cada projeto.
      </p>
      <div className="flex flex-col gap-16 items-center">
        <div className="flex flex-wrap gap-y-8 md:gap-y-20 gap-x-5 w-full justify-center items-center mt-10 text-white ">
          <Card project={LeveSaude} />
          <Card project={TnSeq} />
          <Card project={medicAppProject} />
          <Card project={KanbanProject} />
          <Card project={LibraryWitAuth} />
          <Card project={LeadsAPI} />
        </div>
        <div className="flex items-center h-full" data-aos="fade-up">
          <div
            className="group relative p-[1px] rounded-md bg-gradient-to-r from-blue-900 via-sky-800 to-blue-500 
          shadow-[0_0_12px_-2px_rgba(56,189,248,0.45)] transition-shadow duration-500"
          >
            <a
              href="https://github.com/eduardomatos7?tab=repositories"
              target="_blank"
              rel="noopener noreferrer"
              className="relative flex flex-row gap-2 items-center justify-center rounded-[5px] px-4 py-3 bg-[#142a4d]/90 backdrop-blur-sm text-white 
              font-poppins font-medium text-xs sm:text-sm tracking-wide overflow-hidden transition-all duration-300
              
              before:opacity-0 group-hover:before:opacity-100
              hover:bg-[#1b3a66]/90 "
            >
              <span
                className="pointer-events-none absolute bottom-0 left-0 h-[2px] w-0 
              bg-gradient-to-r from-transparent via-cyan-300 to-transparent group-hover:w-full transition-all duration-500"
              />
              Ver todos os projetos
              <FaGithub
                size={16}
                className="transition-transform group-hover:translate-x-1"
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;

import React from 'react'
import TitlePage from './TitlePage'
import TechnologiesSkills from './TechnologiesSkillsSection'
import { backend, frontend, toolsPlatform } from '../_utils/technologies'

function SkillsPage() {
  return (
    <>
      <div>
        <TitlePage title="Habilidades" />
        <p className='text-gray-400 text-sm md:text-lg font-light font-inter mt-5'>Para as habilidades técnicas e ferramentas eu utilizo:  </p>
      </div>
      <TechnologiesSkills title="Front-end" technologies={frontend} />
      <TechnologiesSkills title="Back-end" technologies={backend} />
      <TechnologiesSkills title="Ferramentas" technologies={toolsPlatform} />
    </>
  )
}

export default SkillsPage
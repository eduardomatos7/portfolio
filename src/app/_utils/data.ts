export interface StatItem {
  label: string;
  value: string;
  hint: string;
}

export const stats: StatItem[] = [
  { label: "Idade", value: "22", hint: "anos" },
  { label: "Período", value: "6º", hint: "Sistemas de Informação" },
  { label: "Experiência", value: "2+", hint: "anos coding" },
  { label: "Stack", value: "JS / PY", hint: "Fullstack" },
];

export const hobbies = ["Futebol", "Corrida", "Academia", "Jogos", '"Codar"'];

export const bioParagraphs: string[] = [
  "Tenho 22 anos, curso o 6º período de Sistemas de Informação no CIn/UFPE e sou apaixonado por tecnologia (no geral) desde o ensino médio integrado, quando tive o contato com a área durante o curso técnico em Informática.",
  "+2 anos com JavaScript, Python e Frameworks e libs (Next, React, Express...). Foco em animações, clean code e boas práticas de Engenharia de Software.",
  "Paralelo à faculdade, às vezes faço alguns cursos na OneBitCode. Nos tempos livres pratico esportes e jogos com amigos.",
];

export interface TimelinePoint {
  year: string;
  title: string;
  desc: string;
}

export const timeline: TimelinePoint[] = [
  {
    year: "2023",
    title: "Início da faculdade",
    desc: "Entrada no CIn/UFPE e aprendizado voltado a teoria, lógica e bases.",
  },
  {
    year: "2023",
    title: "Primeiros projetos",
    desc: "Fullstack com React, Next, Typescript, Node, Python, FastAPI, SQL etc",
  },
  {
    year: "2024",
    title: "Cursos",
    desc: "Aprofundando os conhecimentos para front e backend",
  },
  {
    year: "2025",
    title: "Construindo produtos",
    desc: "Refinando experiência e contribuindo em projetos open-source e freelas.",
  },
];

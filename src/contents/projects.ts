const projects = [
  {
    id: 'cotemig',
    image: '/images/cotemig.webp',
    alt: 'Logo COTEMIG',
    title: 'COTEMIG',
    subtitle: 'Aplicativo 2021',
    description: 'Desenvolvimento do novo aplicativo do colégio e faculdade COTEMIG para alunos e professores.',
  },
  {
    id: 'task',
    image: '/images/task.webp',
    alt: 'Logo Task Internet',
    title: 'Task Internet',
    subtitle: 'Website 2021',
    description: 'Novo website da Task Internet, empresa líder em hospedagem de sites de Belo Horizonte.',
  },
  {
    id: 'discord',
    image: '/images/discord.webp',
    alt: 'Logo Discord',
    title: 'Captain Thorpe',
    subtitle: 'Bot para Discord',
    description: 'Bot responsável por otimizar o desempenho de jogadores de New World que utilizam Discord.',
  },
  {
    id: 'prodabel',
    image: '/images/prefeitura.webp',
    alt: 'Logo Prefeitura de Belo Horizonte',
    title: 'Uai Resolve',
    subtitle: 'Hackathon COTEMIG - SIMI - PRODABEL',
    description: 'Protótipo funcional apresentado no Hackathon organizado por COTEMIG, SIMI, PRODABEL.',
  },
];

export interface ProjectDTO {
  id: string,
  image: string,
  alt: string,
  title: string,
  subtitle: string,
  description: string,
};

export default projects;
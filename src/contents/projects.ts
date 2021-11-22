const projects = [
  {
    id: 'cotemig',
    image: '/images/cotemig.jpg',
    title: 'COTEMIG',
    subtitle: 'Desenvolvimento aplicativo 2021',
    description: 'Desenvolvimento do novo aplicativo do colégio e faculdade COTEMIG para alunos e professores.',
  },
  {
    id: 'task',
    image: '/images/task.jpg',
    title: 'Task Internet',
    subtitle: 'Desenvolvimento Website 2021',
    description: 'Novo website da Task Internet, empresa líder em hospedagem de sites de Belo Horizonte.',
  },
  {
    id: 'discord',
    image: '/images/discord.jpg',
    title: 'Captain Thorpe',
    subtitle: 'Bot para Discord',
    description: 'Bot responsável por otimizar o desempenho de jogadores de New World que utilizam Discord.',
  },
  {
    id: 'prodabel',
    image: '/images/prefeitura.png',
    title: 'Uai Resolve',
    subtitle: 'Hackathon COTEMIG - SIMI - PRODABEL',
    description: 'Ideia de aplicativo apresentada durante a participação no Hackathon COTEMIG - SIMI - PRODABEL.',
  },
];

export interface ProjectDTO {
  id: string,
  image: string,
  title: string,
  subtitle: string,
  description: string,
};

export default projects;
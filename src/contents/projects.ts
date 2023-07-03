const projects = [
  {
    id: "alpargatas",
    image: "/images/alpargatas.webp",
    alt: "Logo Alpargatas",
    title: "Alpargatas <small>(ioasys)</small>",
    subtitle: "Site Institucional / Portal de vendas B2B",
    description:
      "Participação no desenvolvimento do portal de vendas B2B e manutenções no site institucional da empresa Alpargatas.",
  },
  {
    id: "cvc",
    image: "/images/cvc.webp",
    alt: "Logo CVC",
    title: "CVC <small>(ioasys)</small>",
    subtitle: "Sistema de E-mails",
    description:
      "Participação no desenvolvimento do portal responsável por gerir templates de e-mails para a comunicação da empresa com seus clientes.",
  },
  {
    id: "suvinil",
    image: "/images/suvinil.webp",
    alt: "Logo Suvinil",
    title: "Suvinil <small>(ioasys)</small>",
    subtitle: "E-Commerce",
    description:
      "Participação no desenvolvimento de novas funcionalidades do e-commerce da Suvinil, uma das maiores empresas de tinta no Brasil.",
  },
  {
    id: "cotemig",
    image: "/images/cotemig.webp",
    alt: "Logo COTEMIG",
    title: "COTEMIG",
    subtitle: "Aplicativo 2023",
    description:
      "Desenvolvimento do novo aplicativo do colégio e faculdade COTEMIG para alunos e professores como trabalho de conclusão de curso.",
  },
];

export interface ProjectDTO {
  id: string;
  image: string;
  alt: string;
  title: string;
  subtitle: string;
  description: string;
}

export default projects;

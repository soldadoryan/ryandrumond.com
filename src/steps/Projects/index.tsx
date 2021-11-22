import React from 'react';
import { RiArrowLeftLine } from 'react-icons/ri';
import Navigation from '../../components/Navigation';
import ProjectsList from '../../components/ProjectsList';
import { TContent } from '../../components/Structure';
import * as S from './styles';

interface Props {
  animation: TContent;
  setContent: (value: TContent) => void;
}

const Projects: React.FC<Props> = ({ animation, setContent }) => {
  const buttons = [
    {
      id: 'btn_about',
      title: (<><RiArrowLeftLine /> Voltar</>),
      setContent: () => setContent('exit_projects'),
    },
    {
      id: 'btn_contact',
      title: (<>Entre em contato</>),
      setContent: () => setContent('enter_contact'),
    },
  ]

  return (
    <S.Container animation={animation}>
      <Navigation buttons={buttons} theme="darken" />
      <S.WrapTitle>
        <S.Title>Meus projetos</S.Title>
        <S.Subtitle>Projetos relevantes que desenvolvi</S.Subtitle>
      </S.WrapTitle>
      <ProjectsList />
    </S.Container>
  );
}

export default Projects;
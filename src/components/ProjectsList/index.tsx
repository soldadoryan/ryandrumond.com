import React from 'react';
import * as S from './styles';
import Projects from '../../contents/projects';
import ProjectItem from '../ProjectItem';

const ProjectsList: React.FC = () => {
  return (
    <S.Container>
      {Projects.map(item => <ProjectItem key={item.id} data={item} />)}
    </S.Container>
  );
}

export default ProjectsList;
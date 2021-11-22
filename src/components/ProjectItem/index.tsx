import React from 'react';
import { ProjectDTO } from '../../contents/projects';
import Link from 'next/link';
import * as S from './styles';

interface Props {
  data: ProjectDTO
}

const ProjectItem: React.FC<Props> = ({ data }) => {
  return (
    <S.Shadow>
      <S.Container>
        <S.Image src={data.image} width="125" height="125" />
        <S.WrapInfo>
          <S.Title>{data.title}</S.Title>
          <S.Subtitle>{data.subtitle}</S.Subtitle>
          <S.Description>{data.description}</S.Description>
        </S.WrapInfo>
      </S.Container>
    </S.Shadow>
  );
}

export default ProjectItem;
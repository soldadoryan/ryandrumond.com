import React from "react";
import { ProjectDTO } from "../../contents/projects";
import Link from "next/link";
import * as S from "./styles";

interface Props {
  data: ProjectDTO;
}

const ProjectItem: React.FC<Props> = ({ data }) => {
  return (
    <S.Shadow>
      <S.Container>
        <S.Image
          src={data.image}
          width="100"
          height="100"
          loading="lazy"
          alt={data.alt}
          title={data.title}
        />
        <S.WrapInfo>
          <S.Title dangerouslySetInnerHTML={{ __html: data.title }}></S.Title>
          <S.Subtitle>{data.subtitle}</S.Subtitle>
          <S.Description>{data.description}</S.Description>
        </S.WrapInfo>
      </S.Container>
    </S.Shadow>
  );
};

export default ProjectItem;

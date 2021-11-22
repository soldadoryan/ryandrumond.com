import React from 'react';
import { TContent } from '../../components/Structure';
import * as S from './styles';
import Link from 'next/link';
import Navigation from '../../components/Navigation';

import {
  RiLinkedinLine,
  RiGithubLine,
  RiYoutubeLine,
  RiFileDownloadLine,
  RiArrowDownLine,
  RiArrowLeftLine
} from 'react-icons/ri';

interface Props {
  animation: TContent;
  setContent: (value: TContent) => void;
}

const About: React.FC<Props> = ({ animation, setContent }) => {
  const buttons = [
    {
      id: 'btn_initial',
      title: (<><RiArrowLeftLine /> Voltar</>),
      setContent: () => setContent('exit_about'),
    },
    {
      id: 'btn_projects',
      title: (<>Meus projetos</>),
      setContent: () => setContent('enter_projects'),
    },
  ];

  return (
    <S.Container animation={animation}>
      <Navigation buttons={buttons} theme="lighter" />
      <S.ProfileImageWrap>
        <S.ProfileImage src="/images/me.jpeg" width="500" height="666" />
      </S.ProfileImageWrap>
      <S.Description>
        <S.Title>Ryan Drumond</S.Title>
        <S.Subtitle>Desenvolvedor Front-End / Mobile</S.Subtitle>
        <S.Paragraph>
          Trabalho atualmente como desenvolvedor front-end
          na <Link href="https://ioasys.com.br">
            <a target="_blank">
              ioasys
            </a>
          </Link> mas possuo experiência
          de mais de 6 anos em desenvolvimento back-end.
          Sou estudante de Sistemas de Informação pela Faculdade COTEMIG e
          possuo especializações em ReactJS, NodeJS e React Native pela Rocketseat.
        </S.Paragraph>
        <S.Paragraph>
          Trabalho atualmente como desenvolvedor front-end
          na <Link href="https://ioasys.com.br">
            <a target="_blank">
              ioasys
            </a>
          </Link> mas possuo experiência
          de mais de 6 anos em desenvolvimento back-end.
          Sou estudante de Sistemas de Informação pela Faculdade COTEMIG e
          possuo especializações em ReactJS, NodeJS e React Native pela Rocketseat.
        </S.Paragraph>
        <S.WrapActions>
          <li>
            <Link href="https://ioasys.com.br">
              <a>
                <S.WrapIcon>
                  <RiFileDownloadLine />
                </S.WrapIcon>
                Currículo
              </a>
            </Link>
          </li>
          <li>
            <Link href="https://github.com/soldadoryan">
              <a target="_blank">
                <S.WrapIcon>
                  <RiYoutubeLine />
                </S.WrapIcon>
                /ryandrumond
              </a>
            </Link>
          </li>
          <li>
            <Link href="https://ioasys.com.br">
              <a target="_blank">
                <S.WrapIcon>
                  <RiLinkedinLine />
                </S.WrapIcon>
                /ryandrumond
              </a>
            </Link>
          </li>
          <li>
            <Link href="https://github.com/soldadoryan">
              <a target="_blank">
                <S.WrapIcon>
                  <RiGithubLine />
                </S.WrapIcon>
                @soldadoryan
              </a>
            </Link>
          </li>
        </S.WrapActions>
      </S.Description>
    </S.Container>
  );
}

export default About;
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
        <S.ProfileImage
          src="/images/me.webp"
          width="500"
          height="666"
          layout="fill"
          loading="lazy"
          alt="Imagem Ryan Drumond"
          title="Ryan Drumond"
        />
      </S.ProfileImageWrap>
      <S.Description>
        <S.Title>Ryan Drumond</S.Title>
        <S.Subtitle>Desenvolvedor Front-End / Mobile</S.Subtitle>
        <S.Paragraph>
          Sou mineiro de BH, tenho 23 anos e 10 anos de experiência em desenvolvimento de aplicações.
          Atualmente, atuo como desenvolvedor front-end na {' '}
          <Link href="https://ioasys.com.br">
            <a target="_blank">
              ioasys
            </a>
          </Link> - empresa brasileira de inovação tecnológica especializada na criação e desenvolvimento de aplicativos e demais componentes do universo digital.
        </S.Paragraph>
        <S.Paragraph>
          Tenho mais de <strong>seis anos</strong> de experiência em desenvolvimento back-end,
          possuo especialização em ReactJS, NodeJS e React Native pela Rocketseat e,
          além disso, sou graduando de Sistemas de Informação pela Faculdade Cotemig.
        </S.Paragraph>
        <S.Paragraph>
          Empreendo no setor de tecnologia desde a adolescência e, enquanto estudante de
          Sistemas de Informação, conquistei <strong>o primeiro lugar no Hackathon COTEMIG -
            PRODABEL - SIMI</strong>. Como recompensa, ganhei o passaporte para a Campus Party SP,
          tive o privilégio de conhecer as instalações da Microsoft Brasil e participar
          de uma reunião com os líderes dessa multinacional.
        </S.Paragraph>
        <S.WrapActions>
          <li>
            <Link href="/ryan_drumond.pdf">
              <a target="_blank">
                <S.WrapIcon>
                  <RiFileDownloadLine />
                </S.WrapIcon>
                Currículo
              </a>
            </Link>
          </li>
          {/* <li>
            <Link href="https://github.com/soldadoryan">
              <a target="_blank">
                <S.WrapIcon>
                  <RiYoutubeLine />
                </S.WrapIcon>
                /ryandrumond
              </a>
            </Link>
          </li> */}
          <li>
            <Link href="https://www.linkedin.com/in/ryandrumond/">
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
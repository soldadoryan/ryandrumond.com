import React from 'react';
import * as S from './styles';
import NavButton from '../../components/NavButton';
import { TContent } from '../../components/Structure';

interface Props {
  setContent: (value: TContent) => void;
}

const Banner: React.FC<Props> = ({ setContent }) => {
  return (
    <S.Container>
      <S.Filter>
        <S.Logo src="/images/logo.png" alt="" title="" width={400} height={200} />
        <S.LogoDescription>
          Desenvolvedor Front-End / Mobile
        </S.LogoDescription>
        <NavButton theme="lighter" setContent={() => setContent('enter_about')}>
          Sobre mim
        </NavButton>
      </S.Filter>
    </S.Container>
  );
}

export default Banner;
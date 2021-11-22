import React from 'react';
import * as S from './styles';

interface Props {
  setContent: () => void;
  theme: 'darken' | 'lighter';
}

const NavButton: React.FC<Props> = ({ setContent, children, theme }) => {
  return (
    <S.Container buttonTheme={theme} onClick={() => setContent()}>
      {children}
    </S.Container>
  );
}

export default NavButton;
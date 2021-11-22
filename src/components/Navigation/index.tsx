import React from 'react';
import * as S from './styles';
import NavButton from '../NavButton';
import { TContent } from '../Structure';

interface IButton {
  id: string,
  title: React.ReactNode,
  setContent: () => void;
}

interface Props {
  buttons: IButton[];
  theme: 'darken' | 'lighter';
}

const Navigation: React.FC<Props> = ({ buttons, theme }) => {
  return (
    <S.Container>
      {buttons.map(item => (
        <NavButton key={item.id} theme={theme} setContent={item.setContent}>
          {item.title}
        </NavButton>
      ))}
    </S.Container>
  );
}

export default Navigation;
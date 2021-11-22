import React from 'react';
import { RiArrowLeftLine } from 'react-icons/ri';
import Navigation from '../../components/Navigation';
import { TContent } from '../../components/Structure';
import * as S from './styles';

interface Props {
  animation: TContent;
  setContent: (value: TContent) => void;
}

const Contact: React.FC<Props> = ({ animation, setContent }) => {
  const buttons = [
    {
      id: 'btn_initial',
      title: (<><RiArrowLeftLine /> Voltar</>),
      setContent: () => setContent('exit_contact'),
    },
  ];

  return (
    <S.Wrap animation={animation}>
      <S.Container onClick={() => window.open('https://api.whatsapp.com/send?phone=5531992547014')}>
        <S.Title>
          (31) 99254-7014
        </S.Title>
      </S.Container>
      <Navigation buttons={buttons} theme="darken" />
    </S.Wrap>
  );
}

export default Contact;
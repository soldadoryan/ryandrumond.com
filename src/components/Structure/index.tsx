import React, { useState } from 'react';
import Banner from '../../steps/Banner';
import About from '../../steps/About';
import * as S from './styles';
import Projects from '../../steps/Projects';
import Contact from '../../steps/Contact';

export type TContent = 'none' | 'enter_about' | 'exit_about' |
  'enter_projects' | 'exit_projects' | 'enter_contact' | 'exit_contact';

const Structure: React.FC = () => {
  const [content, setContent] = useState<TContent>('none');

  return (
    <S.Container animation={content}>
      {(content === 'none' || content === 'enter_about'
        || content === 'exit_about') && (
          <Banner setContent={(value: TContent) => setContent(value)} />
        )
      }
      <About animation={content} setContent={(value: TContent) => setContent(value)} />
      <Projects animation={content} setContent={(value: TContent) => setContent(value)} />
      <Contact animation={content} setContent={(value: TContent) => setContent(value)} />
    </S.Container>
  );
}

export default Structure;
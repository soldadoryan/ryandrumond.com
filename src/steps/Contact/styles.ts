import styled, { css } from 'styled-components';
import { TContent } from '../../components/Structure';

interface AnimationProps {
  animation: TContent
}

export const Wrap = styled.section<AnimationProps>`
  @keyframes enterContactTransition {
    0% { bottom: -100%;}
    100% {bottom: 0;}
  }

  @keyframes exitContactTransition {
    0% {bottom: 0;}
    100% {bottom: -100%;}
  }

  ${({ theme, animation }) => css`
    
    width: 100vw;
    height: 100vh;
    position: absolute;
    bottom: -100%;
    left: 0;
    cursor: pointer;

    ${(animation === 'enter_contact') && css`
      animation-name: enterContactTransition;
    `};

    ${(animation === 'exit_contact') && css`
      animation-name: exitContactTransition;
    `};

    animation-duration: 1s;
    animation-fill-mode: forwards; 
  `};

`;

export const Container = styled.div`
  ${({ theme }) => css`
    background-color: ${theme.colors.primary};
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  `};
`;

export const Title = styled.strong`
  ${({ theme }) => css`
    color: ${theme.colors.shape};
    font-size: 60px;
  `};
`;

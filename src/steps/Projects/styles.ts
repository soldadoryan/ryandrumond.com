import styled, { css } from 'styled-components';
import { TContent } from '../../components/Structure';

interface AnimationProps {
  animation: TContent
}

export const Container = styled.section<AnimationProps>`
  @keyframes enterProjectsTransition {
    0% {bottom: -100%;}
    100% {bottom: 0%;}
  }

  @keyframes exitProjectsTransition {
    0% {bottom: 0%;}
    100% {bottom: -100%;}
  }

  ${({ theme, animation }) => css`
    background-color: ${theme.colors.shape};
    width: 100vw;
    height: 100vh;
    position: absolute;
    bottom: -100%;
    left: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1052;

    ${(animation === 'enter_projects' || animation === 'exit_contact') && css`
      animation-name: enterProjectsTransition;
    `};

    ${(animation === 'exit_projects' || animation === 'enter_contact') && css`
      animation-name: exitProjectsTransition;
    `};

    animation-duration: 1s;
    animation-fill-mode: forwards; 
  `};
`;

export const WrapTitle = styled.div`
  width: 40%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  margin-bottom: 50px;
`;

export const Title = styled.h2`
  ${({ theme }) => css`
    font-size: 60px;
    text-transform: uppercase;
    color: ${theme.colors.text};
    font-weight: 700;
  `};
`;

export const Subtitle = styled.h3`
  ${({ theme }) => css`
    color: ${theme.colors.primary};
    font-size: 25px;
    text-transform: uppercase;
    letter-spacing: 2px;
  `}
`;

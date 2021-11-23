import { darken } from 'polished';
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

    @media (max-width: 450px) {
      flex-direction: column;
      justify-items: center;
      align-items: center;
    }

    @media (max-width: 768px) {
      flex-direction: column;
      justify-items: center;
      align-items: center;
    }

    @media (max-width: 1024px) {
      flex-direction: column;
      justify-items: center;
      align-items: center;
    }
  `};
`;

export const WrapTitle = styled.div`
  width: 40%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  margin-bottom: 50px;

  @media (max-width: 1024px) {
    justify-content: flex-end;
    align-items: center;
    width: 100%;
    padding: 0 15px;
    flex: 1;
    margin-bottom: 0;
  }

  @media (max-width: 768px) {
    justify-content: flex-end;
    align-items: center;
    width: 100%;
    padding: 0 15px;
    flex: 1;
    margin-bottom: 0;
  }
  
  @media (max-width: 450px) {
    width: 100%;
    justify-content: flex-end;
    align-items: center;
    flex: 1;
    margin-bottom: 25px;
  }
`;

export const Title = styled.h2`
  ${({ theme }) => css`
    font-size: 60px;
    text-transform: uppercase;
    color: ${theme.colors.text};
    font-weight: 700;

    @media (max-width: 1440px) {
      font-size: 50px;
    }

    @media (max-width: 1024px) {
      font-size: 40px;
    }

    @media (max-width: 768px) {
      font-size: 40px;
    }

    @media (max-width: 450px) {
      font-size: 30px;
    }
  `};
`;

export const Subtitle = styled.h3`
  ${({ theme }) => css`
    color: ${theme.colors.primary};
    font-size: 25px;
    text-transform: uppercase;
    letter-spacing: 2px;

    @media (max-width: 1440px) {
      font-size: 20px;
    }

    @media (max-width: 1024px) {
      font-size: 20px;
    }

    @media (max-width: 768px) {
      font-size: 20px;
    }

    @media (max-width: 450px) {
      font-size: 12px;
      text-align: center;
      letter-spacing: 1px;
    }
  `}
`;

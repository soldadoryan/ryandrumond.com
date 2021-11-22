import styled, { css } from 'styled-components';
import Image from 'next/image';
import { TContent } from '../../components/Structure';

interface AnimationProps {
  animation: TContent
}

export const Container = styled.div<AnimationProps>`
  @keyframes enterAboutTransition {
    0% {right: -100%;}
    100% {right: 0%;}
  }

  @keyframes exitAboutTransition {
    0% {right: 0%;}
    100% {right: -100%;}
  }

  ${({ theme, animation }) => css`
    background-color: ${theme.colors.dark_shape};
    width: 100vw;
    height: 100vh;
    position: absolute;
    top: 0;
    right: -100%;
    z-index: 1050;
    display: flex;
    justify-content: space-around;
    align-items: center;

    ${(animation === 'enter_about' || animation === 'exit_projects') && css`
      animation-name: enterAboutTransition;
    `};

    ${(animation === 'exit_about' || animation === 'enter_projects') && css`
      animation-name: exitAboutTransition;
    `};

    animation-duration: 1s;
    animation-fill-mode: forwards; 
  `}
`;

export const ProfileImageWrap = styled.div`
  background-color: ${({ theme }) => theme.colors.shape};
  padding: 10px 10px 8px;
`;

export const ProfileImage = styled(Image)`
  ${({ theme }) => css`
    width: 100%;
    height: 100%;
    box-shadow: ${theme.effects.shadow};
    filter: ${theme.effects.grayscale};
  `};
`;

export const Description = styled.div`
  width: 50%;
`;

export const Title = styled.h1`
  ${({ theme }) => css`
    color: ${theme.colors.shape};
    font-size: 75px;
    text-transform: uppercase;
    letter-spacing: 2px;
  `}
`;

export const Subtitle = styled.h2`
  ${({ theme }) => css`
    color: ${theme.colors.primary};
    font-size: 25px;
    text-transform: uppercase;
    letter-spacing: 2px;
    margin-bottom: 50px;
  `}
`;

export const Paragraph = styled.p`
  ${({ theme }) => css`
    color: ${theme.colors.muted_text};
    font-size: 20px;
    line-height: 30px;
    margin-bottom: 25px;

    a {
      color: ${theme.colors.shape};
      text-decoration: none;
      transition: color 1s;

      &:hover {
        color: ${theme.colors.primary};
      }
    }
  `}
`;

export const WrapActions = styled.ul`
  ${({ theme }) => css`
    list-style: none;
    padding: 0;
    margin-top: 50px;
    display: flex;

    li {
      font-size: 18px;
      color: ${theme.colors.shape};
      font-weight: 100;
      margin-right: 30px;
      
      a {
        display: flex;
        align-items: center;
        text-decoration: none;
        color: ${theme.colors.shape};
        
        svg {
          color: ${theme.colors.primary};
          font-size: 20px;
        }
      }
    }
  `};
`;

export const WrapIcon = styled.div`
  ${({ theme }) => css`
    background-color: ${theme.colors.text};
    display: flex;
    justify-content: center;
    align-items: center;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    box-shadow: ${theme.effects.shadow};
    margin-right: 10px;
  `};
`;

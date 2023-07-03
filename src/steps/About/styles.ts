import styled, { css } from "styled-components";
import Image from "next/image";
import { TContent } from "../../components/Structure";

interface AnimationProps {
  animation: TContent;
}

export const Container = styled.div<AnimationProps>`
  @keyframes enterAboutTransition {
    0% {
      right: -100%;
    }
    100% {
      right: 0%;
    }
  }

  @keyframes exitAboutTransition {
    0% {
      right: 0%;
    }
    100% {
      right: -100%;
    }
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

    ${(animation === "enter_about" || animation === "exit_projects") &&
    css`
      animation-name: enterAboutTransition;
    `};

    ${(animation === "exit_about" || animation === "enter_projects") &&
    css`
      animation-name: exitAboutTransition;
    `};

    animation-duration: 1s;
    animation-fill-mode: forwards;

    @media (max-width: 450px) {
      flex-direction: column;
      justify-content: center;
    }
  `}
`;

export const ProfileImageWrap = styled.div`
  background-color: ${({ theme }) => theme.colors.shape};
  width: 500px;
  height: 666px;
  position: relative;
  border: 10px solid ${({ theme }) => theme.colors.shape};
  box-shadow: 3px 3px 3px #000;

  @media (max-width: 1600px) {
    width: 375px;
    height: 500px;
  }

  @media (max-width: 1024px) {
    display: none;
  }

  @media (max-width: 768px) {
    display: none;
  }

  @media (max-width: 450px) {
    display: none;
  }
`;

export const ProfileImage = styled(Image)`
  ${({ theme }) => css`
    box-shadow: ${theme.effects.shadow};
    filter: ${theme.effects.grayscale};
  `};
`;

export const Description = styled.div`
  width: 50%;

  @media (max-width: 1024px) {
    width: 100%;
    padding: 0 50px 30px;
    margin-top: 100px;
    overflow-x: hidden;
    overflow-y: auto;
  }

  @media (max-width: 768px) {
    width: 100%;
    padding: 0 30px 30px;
    margin-top: 100px;
    overflow-x: hidden;
    overflow-y: auto;
  }

  @media (max-width: 450px) {
    width: 100%;
    padding: 0 20px 30px;
    margin-top: 100px;
    overflow-x: hidden;
    overflow-y: auto;
  }
`;

export const Title = styled.h1`
  ${({ theme }) => css`
    color: ${theme.colors.shape};
    font-size: 75px;
    text-transform: uppercase;
    letter-spacing: 2px;

    @media (max-width: 1600px) {
      font-size: 45px;
    }

    @media (max-width: 1024px) {
      text-align: center;
      font-size: 40px;
    }

    @media (max-width: 768px) {
      text-align: center;
      font-size: 40px;
    }

    @media (max-width: 450px) {
      text-align: center;
      font-size: 30px;
    }
  `}
`;

export const Subtitle = styled.h2`
  ${({ theme }) => css`
    color: ${theme.colors.primary};
    font-size: 25px;
    text-transform: uppercase;
    letter-spacing: 2px;
    margin-bottom: 50px;

    @media (max-width: 1600px) {
      font-size: 20px;
    }

    @media (max-width: 1024px) {
      font-size: 20px;
      text-align: center;
    }

    @media (max-width: 768px) {
      font-size: 20px;
      text-align: center;
    }

    @media (max-width: 450px) {
      font-size: 12px;
      text-align: center;
      letter-spacing: 1px;
    }
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

    strong {
      color: ${theme.colors.shape};
    }

    @media (max-width: 1600px) {
      font-size: 16px;
      line-height: 25px;
      text-align: justify;
      margin-bottom: 10px;
    }

    @media (max-width: 1024px) {
      font-size: 20px;
      text-align: justify;
    }

    @media (max-width: 768px) {
      font-size: 18px;
      text-align: justify;
    }

    @media (max-width: 450px) {
      font-size: 14px;
      text-align: justify;
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

    @media (max-width: 1600px) {
      margin-right: 0;
      margin-top: 25px;

      li {
        margin-bottom: 15px;
        font-size: 16px;
        padding: 10px 0;
      }
    }

    @media (max-width: 450px) {
      flex-direction: column;
      margin-right: 0;

      li {
        width: 100%;
        background-color: ${theme.colors.text};
        margin-bottom: 15px;
        font-size: 14px;
        padding: 10px 0;
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

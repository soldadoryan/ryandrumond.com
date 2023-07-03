import styled, { css } from "styled-components";
import image from "next/image";
import { darken } from "polished";

export const Shadow = styled.div`
  ${({ theme }) => css`
    background-color: ${theme.colors.lighter_shape};
    width: 100%;
    border-radius: 25px;
    box-shadow: ${theme.effects.shadow};
    transform: rotate(0deg);
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 15px 0;
    padding: 5px;

    @media (max-width: 1600px) {
      margin: 10px 0;
    }

    @media (max-width: 450px) {
      margin: 0 0 30px;
    }
  `};
`;

export const Container = styled.div`
  ${({ theme }) => css`
    background-color: ${theme.colors.shape};
    width: 100%;
    height: 100%;
    border-radius: 25px;
    transform: rotate(0deg);
    box-shadow: ${theme.effects.shadow};
    display: flex;
    justify-content: flex-start;
    align-items: center;
    padding: 20px 40px;

    @media (max-width: 1600px) {
      padding: 10px 20px;
    }

    @media (max-width: 450px) {
      flex-direction: column;
      align-items: center;
      padding: 20px 20px;
    }
  `};
`;

export const Image = styled(image)`
  ${({ theme }) => css`
    border-radius: 50%;
    object-fit: cover;
    object-position: center;
  `};
`;

export const WrapInfo = styled.div`
  margin-left: 25px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  @media (max-width: 450px) {
    align-items: center;
    margin-left: 0;
    margin-top: 30px;
  }
`;

export const Title = styled.strong`
  ${({ theme }) => css`
    font-size: 18px;
    text-transform: uppercase;
    color: ${theme.colors.text};

    & > small {
      font-size: 14px;
    }

    @media (max-width: 1600px) {
      font-size: 14px;

      & > small {
        font-size: 12px;
      }
    }
  `};
`;

export const Subtitle = styled.strong`
  ${({ theme }) => css`
    font-size: 12px;
    margin-top: 5px;
    text-transform: uppercase;
    color: ${theme.colors.primary};

    @media (max-width: 450px) {
      text-align: center;
      font-size: 12px;
    }
  `};
`;

export const Description = styled.p`
  ${({ theme }) => css`
    margin-top: 10px;
    color: ${theme.colors.muted_text};
    letter-spacing: 1px;

    @media (max-width: 1600px) {
      font-size: 13px;
      margin-top: 5px;
    }

    @media (max-width: 450px) {
      text-align: center;
      font-size: 14px;
    }
  `};
`;

import styled, { css } from 'styled-components';
import image from 'next/image';

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
    justify-content: center;
    align-items: center;
    padding: 20px 40px;
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
`;

export const Title = styled.strong`
  ${({ theme }) => css`
    font-size: 18px;
    text-transform: uppercase;
    color: ${theme.colors.text};
  `};
`;

export const Subtitle = styled.strong`
  ${({ theme }) => css`
    font-size: 12px;
    margin-top: 5px;
    text-transform: uppercase;
    color: ${theme.colors.primary};
  `};
`;

export const Description = styled.p`
  ${({ theme }) => css`
    margin-top: 10px;
    color: ${theme.colors.muted_text};
    letter-spacing: 1px;
  `};
  
`;

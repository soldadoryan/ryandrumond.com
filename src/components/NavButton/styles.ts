import styled, { css } from 'styled-components';

interface ContainerProps {
  buttonTheme: 'darken' | 'lighter'
}

export const Container = styled.div<ContainerProps>`
  ${({ theme, buttonTheme }) => css`
    height: 35px;
    padding: 0 20px;
    display: flex;
    align-items: center;
    cursor: pointer;
    font-size: 15px;
    font-weight: 700;
    border: 0;
    letter-spacing: 1px;
    border-radius: 20px;
    box-shadow: ${theme.effects.shadow};
    opacity: 1;
    margin: 0 5px;
    transition: background-color 0.5s;
  
    ${buttonTheme === 'lighter' && css`
      background-color: ${theme.colors.shape};
      color: ${theme.colors.text};
    
      &:hover {
        background-color: ${theme.colors.primary};
        color: ${theme.colors.shape};
      }
    `};

    ${buttonTheme === 'darken' && css`
      background-color: ${theme.colors.dark_shape};
      color: ${theme.colors.shape};
    
      &:hover {
        background-color: ${theme.colors.shape};
        color: ${theme.colors.text};
      }
    `};

    svg {
      font-size: 20px;
      margin-right: 10px;
    }
  `};
`;

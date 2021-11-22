import styled, { css } from 'styled-components';
import { TContent } from '.';

interface ContainerProps {
  animation: TContent;
}

export const Container = styled.section<ContainerProps>`
  ${({ theme, animation }) => css`
    width: 100vw;
    height: 100vh;
    overflow-x: hidden;
    overflow-y: hidden;
    position: relative;
    
    ${(animation === 'enter_projects' || animation === 'exit_projects') && css`
      background-color: ${theme.colors.dark_shape};
    `}

    ${(animation === 'enter_contact' || animation === 'exit_contact') && css`
      background-color: ${theme.colors.primary};
    `}
  `};
`;

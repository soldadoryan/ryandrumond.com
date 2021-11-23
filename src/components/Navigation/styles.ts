import styled from 'styled-components';

export const Container = styled.div`
  position: absolute;
  top: 20px;
  right: 20px;
  display: flex;
  align-items: center;

  @media (max-width: 450px) {
    width: 100%;
    justify-content: center;
    left: 0;
  }
`;
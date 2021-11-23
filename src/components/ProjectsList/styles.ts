import styled from 'styled-components';

export const Container = styled.div`
  width: 40%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;

  @media (max-width: 1024px) {
    width: 100%;
    flex: 4;
    padding: 30px 30px;
    overflow-x: hidden;
    overflow-y: auto;
  }

  @media (max-width: 768px) {
    width: 100%;
    flex: 4;
    padding: 30px 15px;
    overflow-x: hidden;
    overflow-y: auto;
  }

  @media (max-width: 450px) {
    width: 100%;
    flex: 4;
    padding: 30px 15px;
    overflow-x: hidden;
    overflow-y: auto;
  }
`;


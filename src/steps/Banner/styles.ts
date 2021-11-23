import styled from 'styled-components';
import Image from 'next/image';
import { TContent } from '../../components/Structure';


export const Container = styled.div`
  background: url('/images/bg.webp');
  background-size: cover;
  filter: blur(100%);
  background-position: center;
  width: 100%;
  height: 100vh;
`;

export const Filter = styled.div`
  background-image: ${({ theme }) => theme.effects.gradient};
  backdrop-filter: blur(5px);
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Logo = styled(Image)``;

export const LogoDescription = styled.h2`
  color: ${({ theme }) => theme.colors.shape};
  letter-spacing: 3px;
  font-weight: 700;
  font-size: 16px;
  text-transform: uppercase;
  margin-bottom: 50px;
  text-align: center;

  @media (max-width: 450px) {
    font-size: 12px;
    letter-spacing: 1px;
  }
`;
import styled from 'styled-components';
import Image from 'next/image';
import { TContent } from '../../components/Structure';


export const Container = styled.div`
  background: url('/images/bgteste.jpg');
  background-size: cover;
  filter: blur(100%);
  background-position: center;
  width: 100%;
  height: 100vh;
`;

export const Filter = styled.div`
  background-image: ${({ theme }) => theme.effects.gradient};
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
  font-size: 20px;
  text-transform: uppercase;
  margin-bottom: 50px;
`;
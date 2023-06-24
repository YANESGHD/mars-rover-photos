import { FC } from 'react';
import { Header } from '../Header';
import { Outlet } from 'react-router-dom';
import styled from '@emotion/styled';
import favicon from '../../assets/stars.jpg';

export const Layout: FC = () => {
  return (
    <Container>
      <Header />
      <Outlet />
    </Container>
  );
};

const Container = styled.div`
  background-image: url(${favicon});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  height: 100vh;
`;

import { FC } from 'react';
import { Header } from '../Header';
import { Outlet } from 'react-router-dom';
import styled from '@emotion/styled';
import { Landing } from '../Landing';

export const Layout: FC = () => {
  return (
    <Container>
      <Header />
      <Landing />
      <Outlet />
    </Container>
  );
};

const Container = styled.div`
  padding: 0 0px;
`;

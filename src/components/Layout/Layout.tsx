import { FC } from 'react';
import { Header } from '../Header';
import { Outlet } from 'react-router-dom';
import styled from '@emotion/styled';

export const Layout: FC = () => {
  return (
    <Container>
      <Header />
      <Outlet />
    </Container>
  );
};

const Container = styled.div`
  padding: 0 0px;
`;

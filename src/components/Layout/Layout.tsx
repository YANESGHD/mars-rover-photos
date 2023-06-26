import { FC } from 'react';
import { Outlet } from 'react-router-dom';
import { Header, Landing } from '../';

export const Layout: FC = () => {
  return (
    <>
      <Header />
      <Landing />
      <Outlet />
    </>
  );
};

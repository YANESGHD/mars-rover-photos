import { FC } from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import { Home, Bookmarks } from '../../containers';
import { Layout } from '../';

export const Router: FC = () => {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path='/home' element={<Home />} />
        <Route path='/bookmarks' element={<Bookmarks />} />
        <Route path='*' element={<Navigate replace to='/home' />} />
      </Route>
    </Routes>
  );
};

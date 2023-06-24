import { FC } from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import { Home, Curiosity, Opportunity, Spirit } from '../../pages';
import { Layout } from '../Layout';

export const Router: FC = () => {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path='/home' element={<Home />} />
        <Route path='/curiosity' element={<Curiosity />} />
        <Route path='/opportunity' element={<Opportunity />} />
        <Route path='/spirit' element={<Spirit />} />
        <Route path='*' element={<Navigate replace to='/home' />} />
      </Route> 
    </Routes>
  );
};

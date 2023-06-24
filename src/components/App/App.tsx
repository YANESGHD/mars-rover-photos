import { FC } from 'react';
import { ThemeProvider } from '@mui/material';
import theme from '../../themes';
import { Router } from '../';

export const App: FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <Router />
    </ThemeProvider>
  );
};

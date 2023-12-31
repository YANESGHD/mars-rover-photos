import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from '@mui/material';
import { App } from './components';
import { RoverProvider, BookmarkProvider, FilterProvider } from './contexts';
import { theme, GlobalStyles } from './themes';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <BrowserRouter>
    <ThemeProvider theme={theme}>
      <FilterProvider>
        <RoverProvider>
          <BookmarkProvider>
            <GlobalStyles />
            <App />
          </BookmarkProvider>
        </RoverProvider>
      </FilterProvider>
    </ThemeProvider>
  </BrowserRouter>
);

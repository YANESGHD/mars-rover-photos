import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from '@mui/material';
import { App } from './components';
import { RoverProvider, BookmarkProvider, FilterProvider } from './contexts';
import './index.css';
import theme from './themes';
import { QueryClient, QueryClientProvider } from 'react-query';

const queryClient = new QueryClient();

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <BrowserRouter>
    <ThemeProvider theme={theme}>
      <QueryClientProvider client={queryClient}>
        <FilterProvider>
          <RoverProvider>
            <BookmarkProvider>
              <App />
            </BookmarkProvider>
          </RoverProvider>
        </FilterProvider>
      </QueryClientProvider>
    </ThemeProvider>
  </BrowserRouter>
);

import { FC } from 'react';
import { AppBar, Toolbar, IconButton, Typography } from '@mui/material';
import styled from '@emotion/styled';
import { Bookmarks, Menu } from '@mui/icons-material';
import favicon from '../../assets/nasa-logo.svg';

export const Header: FC = () => {
  return (
    <AppBar position='static' color='primary' sx={{  padding: { xs: '0 10px', md: '0 70px' } }}>
      <Toolbar>
        <IconButton>
          <Logo src={favicon} alt='logo' />
        </IconButton>
        <Typography
          variant='h6'
          component='a'
          sx={{
            textAlign: 'center',
            flexGrow: 1,
            letterSpacing: '.3rem',
            textDecoration: 'none',
          }}
        >
          NASA Explore
        </Typography>
        <IconButton>
          <Menu sx={{ color: 'white', fontSize: '30px' }} />
        </IconButton>
      </Toolbar>
    </AppBar>
  );
}

const Logo = styled.img`
  width: 60px;
`;

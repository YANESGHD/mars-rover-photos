import { FC, useState } from 'react';
import styled from '@emotion/styled';
import { AppBar, Toolbar, IconButton, Typography } from '@mui/material';
import { Menu } from '@mui/icons-material';
import { HamburguerMenu } from './HamburguerMenu';
import logo from '../../assets/nasa-logo.svg';

export const Header: FC = () => {
  const [anchorElUser, setAnchorElUser] = useState<null | HTMLElement>(null);

  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  return (
    <AppBar position='static' color='primary' sx={{ padding: { xs: '0 10px', md: '0 70px' } }}>
      <Toolbar>
        <IconButton>
          <Logo src={logo} alt='logo' />
        </IconButton>
        <Typography
          variant='h6'
          component='a'
          sx={{
            textAlign: 'center',
            flexGrow: 1,
            letterSpacing: '.3rem',
            textDecoration: 'none'
          }}
        >
          NASA Explore
        </Typography>
        <IconButton onClick={handleOpenUserMenu}>
          <Menu sx={{ color: 'white', fontSize: '30px' }} />
        </IconButton>
        <HamburguerMenu anchorElUser={anchorElUser} setAnchorElUser={setAnchorElUser} />
      </Toolbar>
    </AppBar>
  );
};

const Logo = styled.img`
  width: 60px;
`;

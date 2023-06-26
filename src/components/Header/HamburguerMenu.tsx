import { FC } from 'react';
import { Menu, MenuItem, Typography } from '@mui/material';
import { Link } from 'react-router-dom';

interface HamburguerMenuProps {
  anchorElUser: any;
  setAnchorElUser: any
}

const sections = [{ key: 'home', label: 'Home' },
  { key: 'bookmarks', label: 'Bookmarks' }
];

export const HamburguerMenu: FC<HamburguerMenuProps> = ({ anchorElUser, setAnchorElUser }) => {
  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <Menu
      sx={{ mt: '45px' }}
      id='menu-appbar'
      anchorEl={anchorElUser}
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'right'
      }}
      keepMounted
      transformOrigin={{
        vertical: 'top',
        horizontal: 'right'
      }}
      open={Boolean(anchorElUser)}
      onClose={handleCloseUserMenu}
    >
      {sections.map((section) => (
        <Link to={`/${section.key}`} key={section.key} style={{ textDecoration: 'none' }}>
          <MenuItem onClick={handleCloseUserMenu}>
            <Typography textAlign='center' sx={{ color: 'black' }}>{section.label}</Typography>
          </MenuItem>
        </Link>
      ))}
    </Menu>
  );
};

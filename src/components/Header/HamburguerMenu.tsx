import { FC } from 'react';
import { Link } from 'react-router-dom';
import { Menu, MenuItem, Typography } from '@mui/material';
import { sections } from '../../constants';

interface HamburguerMenuProps {
  anchorElUser: HTMLElement | null;
  setAnchorElUser: React.Dispatch<React.SetStateAction<HTMLElement | null>>
}

export const HamburguerMenu: FC<HamburguerMenuProps> = ({ anchorElUser, setAnchorElUser }) => {
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
      onClose={() => setAnchorElUser(null)}
    >
      {sections.map((section) => (
        <Link to={`/${section.key}`} key={section.key} style={{ textDecoration: 'none' }}>
          <MenuItem onClick={() => setAnchorElUser(null)}>
            <Typography textAlign='center' sx={{ color: 'black' }}>{section.label}</Typography>
          </MenuItem>
        </Link>
      ))}
    </Menu>
  );
};

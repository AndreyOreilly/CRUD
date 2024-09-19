import { AppBar, Box, Link } from '@mui/material';
import Toolbar from '@mui/material/Toolbar';
import React from 'react';
import { Link as NavLink } from 'react-router-dom';

export default function Navbar(): JSX.Element {
  const links = [
    { to: '/cards', name: 'My Cards' },
  ];

  return (
    <Box sx={{ flexGrow: 1, typography: 'body1' }}>
      <AppBar position="static" sx={{ background: '#008080' }}>
        <Toolbar>
          {links.map((link) => (
            <Link
              component={NavLink}
              key={link.name}
              to={link.to}
              sx={{ color: 'white', mr: 2, textDecoration: 'none' }}
            >
              {link.name}
            </Link>
          ))}
        </Toolbar>
      </AppBar>
    </Box>
  );
}

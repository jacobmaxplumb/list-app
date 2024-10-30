import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { MenuButton } from './MenuButton';

export function MenuBar({setIsTodoOpen}) {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <MenuButton setIsTodoOpen={setIsTodoOpen} />
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            List App
          </Typography>
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
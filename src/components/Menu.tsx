import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import DrawerMenu from './DrawerMenu';

export const Menu: React.FC = () => {

	return (
        <AppBar position="static">
        <Toolbar>
          <DrawerMenu />
          <Typography variant="h6">
            Space Launches
          </Typography>
        </Toolbar>
      </AppBar>
	);
}
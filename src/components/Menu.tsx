import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import DrawerMenu from './DrawerMenu';
import { Search } from './Search';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import HomeIcon from '@material-ui/icons/Home';

export const Menu: React.FC = () => {

  const isMobile = window.innerWidth < 630;

	return (
        <AppBar position="static" >
        <Toolbar className="menu">
          {isMobile && <DrawerMenu />}
          <Typography variant="h5" className="header-txt">
            SPACE LAUNCHES
          </Typography>
          {!isMobile && <><Search /> <HomeIcon className="home-icon"/></>}
        </Toolbar>
      </AppBar>
	);
}
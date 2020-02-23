import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import List from '@material-ui/core/List';
import { Search } from './Search';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import HomeIcon from '@material-ui/icons/Home';

const useStyles = makeStyles({
  list: {
    width: 250,
  },
  fullList: {
    width: 'auto',
  },
});

export default function DrawerMenu() {
  const classes = useStyles();
  const [state, setState] = React.useState({
    left: false,
  });

  const onClick = () => {
    toggleDrawer("left", false)
    window.location.reload();
  }

  const toggleDrawer = (side: 'left', open: boolean) => (
    event: React.KeyboardEvent | React.MouseEvent,
  ) => {
    if (
      event &&
      event.type === 'keydown' &&
      ((event as React.KeyboardEvent).key === 'Tab' ||
        (event as React.KeyboardEvent).key === 'Shift')
    ) {
      return;
    }

    setState({ ...state, [side]: open });

  };

  const sideList = () => (
    <div
      className={classes.list}
      role="presentation"
    >
      <List>
      <ListItem button key="Home" onClick={onClick}>
            <ListItemIcon><HomeIcon /></ListItemIcon>
      <ListItemText primary="Home" />
          </ListItem>
        <Search toggle={toggleDrawer("left", false)}/>
      </List>
    </div>
  );
  return (
    <div>
        <IconButton edge="start" color="inherit" aria-label="menu" onClick={toggleDrawer('left', true)}>
            <MenuIcon />
          </IconButton>
      <SwipeableDrawer
        open={state.left}
        onClose={toggleDrawer('left', false)}
        onOpen={toggleDrawer('left', true)}
      >
        {sideList()}
      </SwipeableDrawer>
    </div>
  );
}

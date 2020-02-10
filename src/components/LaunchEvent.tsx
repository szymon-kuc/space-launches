import React from 'react';
//import {I_Launches, I_Launch } from '../interfaces';
//import { useSelector } from 'react-redux';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';

interface I_Props {
    index: number,
    name: any,
    location: any,
    date: any
}

export const LaunchEvent: React.FC<I_Props> = ({index, name, location, date}) => {

    //const launches = useSelector((state: I_Launches) => state.launches);
    //const name = launches.map((el: I_Launch) => (el.name))[index];
    // const location = launches.map((el: I_Launch) => (el.location.name))[index];
    // const date = launches.map((el: I_Launch) => (el.windowstart))[index];
	return (
        <article className="events">
            <List>
                <ListItem>
                    <ListItemText primary={name}/>
                </ListItem>
                <Divider variant="middle" component="li" />
                <ListItem>
                    <ListItemText primary="Start" secondary={date} />
                </ListItem>
                <Divider variant="middle" component="li" />
                <ListItem>
                    <ListItemText primary="Location" secondary={location} />
                </ListItem>
            </List>
            {(index > 0 && index < 4) && <div className="divider"></div>}
        </article>
	);
}
import React from 'react';
//import {I_Launches, I_Launch } from '../interfaces';
//import { useSelector } from 'react-redux';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';

interface I_Props {
    index: number;
    maxIndex: number;
    name: any,
    location: any,
    date: any,
    id?: string
}

export const LaunchEvent: React.FC<I_Props> = ({ index, maxIndex, name, location, date, id}) => {

	return (
        <article className="events" id={id}>
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
            {index != maxIndex-1 && <div className="divider"></div>}
        </article>
	);
}
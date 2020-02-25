import React from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import { makeStyles } from '@material-ui/core/styles';

interface I_Props {
    index: number;
    maxIndex: number;
    name: any,
    location: any,
    date: any,
    id?: string
}
const useStyles = makeStyles({
    root: {
        backgroundColor: "white"
    }
  });

export const LaunchEvent: React.FC<I_Props> = ({name, location, date, id}) => {
    const classes = useStyles();
	return (
        <article className="events" id={id}>
            <List>
                <ListItem>
                    <ListItemText primary={name}/>
                </ListItem>
                <Divider variant="middle" component="li" classes={{root: classes.root}}/>
                <ListItem>
                    <ListItemText primary="Start" secondary={date} />
                </ListItem>
                <Divider variant="middle" component="li" classes={{root: classes.root}} />
                <ListItem>
                    <ListItemText primary="Location" secondary={location} />
                </ListItem>
            </List>
        </article>
	);
}
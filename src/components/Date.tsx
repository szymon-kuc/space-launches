import React, { useState } from 'react';
import Calendar from 'react-calendar';
import Typography from '@material-ui/core/Typography';
import { useDispatch, useSelector } from 'react-redux';
import { fetchLaunchesByDate } from '../actions/getLaunchesAction';
import { I_Launches } from 'interfaces';

export const Date: React.FC = () => {
    
    const [date, setDate] = useState();

    const dispatch = useDispatch();
    const launchesAction = (formatted_date: any) => dispatch(fetchLaunchesByDate(formatted_date));

    const launches = useSelector((state: I_Launches) => state.date);

    console.log(launches);

    const onChange = (e: any) => {
        let month = (e.getMonth()+1) < 10 ? ('0' + (e.getMonth()+1)) : e.getMonth()+1;
        let date = e.getDate < 10 ? ('0' + e.getDate()) : e.getDate();
        launchesAction(e.getFullYear() + "-" + month + "-" + date);
        setDate(e);
    } 

    return (
            <section>
                 <Typography variant="h4" gutterBottom className="section-heading">
                        SEARCH
                  </Typography>
                <Calendar onChange={onChange} value={date}/>
            </section>
	);
}
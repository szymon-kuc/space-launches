import React, { useState } from 'react';
import Calendar from 'react-calendar';
import Typography from '@material-ui/core/Typography';
import { useDispatch, useSelector } from 'react-redux';
import { fetchLaunchesByDate } from '../actions/getLaunchesAction';
import { I_Launches, I_Launch } from 'interfaces';
import { LaunchEvent } from './LaunchEvent';

export const Date: React.FC = () => {
    
    const [date, setDate] = useState();

    const dispatch = useDispatch();
    const launchesAction = (formatted_date: any) => dispatch(fetchLaunchesByDate(formatted_date));

    const launches = useSelector((state: I_Launches) => state.date);

    let name: Array<string> = [];
    let location: Array<string> = [];
    let launchDate: Array<string> = [];

    for(let i=0; i<=launches.length; i++){
        name[i] = launches.map((el: I_Launch) => (el.name))[i];
        location[i] = launches.map((el: I_Launch) => (el.location.name))[i];
        launchDate[i] = launches.map((el: I_Launch) => (el.windowstart))[i];
    }

    const onChange = (e: any) => {
        let month = (e.getMonth()+1) < 10 ? ('0' + (e.getMonth()+1)) : e.getMonth()+1;
        let date = e.getDate() < 10 ? ('0' + e.getDate()) : e.getDate();
        launchesAction(e.getFullYear() + "-" + month + "-" + date);
        setDate(e);
    } 

    return (
            <section>
                 <Typography variant="h4" gutterBottom className="section-heading">
                        SEARCH
                  </Typography>
                <a href="#space-event"><Calendar onChange={onChange} value={date}/></a>
                {launches.map((_el:any, index: number) => (<LaunchEvent key={index} index={index} maxIndex={launches.length} name={name[index]} location={location[index]} date={launchDate[index]} id="space-event"/>))}
            </section>
            
	);
}
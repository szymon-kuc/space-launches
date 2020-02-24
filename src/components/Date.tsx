import React, { useState, useEffect } from 'react';
import Calendar from 'react-calendar';
import Typography from '@material-ui/core/Typography';
import { useDispatch } from 'react-redux';
import { fetchLaunchesByDate } from '../actions/getLaunchesAction';
import { DateSearchResults } from './DateSearchResults'

export const Date_Calendar: React.FC = () => {
    
    const [date, setDate] = useState();
    let newTime = new Date().toLocaleString(navigator.language, {hour: '2-digit', minute:'2-digit'});
    const [time, setTime] = useState(newTime);
    const [isMobile, setIsMobile] = useState(window.innerWidth < 630);

    useEffect(() => {
            setInterval(() => {
                setTime(new Date().toLocaleString(navigator.language, {hour: '2-digit', minute:'2-digit', second:'2-digit'}));
            }, 1000);
            window.addEventListener("resize", () => setIsMobile(window.innerWidth < 630));
            return () => window.removeEventListener("resize", () => setIsMobile(window.innerWidth < 630));
      });

    const dispatch = useDispatch();
    const launchesAction = (formatted_date: any) => dispatch(fetchLaunchesByDate(formatted_date));

    const onChange = (e: any) => {
        let month = (e.getMonth()+1) < 10 ? ('0' + (e.getMonth()+1)) : e.getMonth()+1;
        let date = e.getDate() < 10 ? ('0' + e.getDate()) : e.getDate();
        launchesAction(e.getFullYear() + "-" + month + "-" + date);
        setDate(e);
    } 

    return (
            <section className="date">
                {isMobile && 
                 <Typography variant="h4" gutterBottom className="section-heading">
                        SEARCH
                  </Typography>}
                  {!isMobile && 
                 <Typography variant="h4" gutterBottom className="section-heading">
                    {time}
                  </Typography>}
                <a href="#space-event"><Calendar className="calendar" onChange={onChange} value={date}/></a>
                {isMobile && <DateSearchResults />}
            </section>
            
	);
}
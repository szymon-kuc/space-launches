import React from 'react';
import Typography from '@material-ui/core/Typography';
import { LaunchEvent } from './LaunchEvent';
import {I_Launches, I_Launch } from '../interfaces';
import { useSelector } from 'react-redux';

export const Upcoming: React.FC = () => {

    const index = [1,2,3,4];
    const launches = useSelector((state: I_Launches) => state.launches);
    const name = index.map((i: number) => launches.map((el: I_Launch) => (el.name))[i]);
    const location = index.map((i: number) => launches.map((el: I_Launch) => (el.location.name))[i]);
    const date = index.map((i: number) => launches.map((el: I_Launch) => (el.windowstart))[i]);
	return (
            <section>
                  <Typography variant="h4" gutterBottom className="section-heading">
                        UPCOMING
                  </Typography>
                  {index.map((i: number) => (<LaunchEvent key={i} index={i} maxIndex={launches.length} name={name[i-1]} location={location[i-1]} date={date[i-1]} />))}
            </section>
	);
}
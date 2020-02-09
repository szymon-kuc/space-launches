import React from 'react';
import Typography from '@material-ui/core/Typography';
import { LaunchEvent } from './LaunchEvent';

export const Upcoming: React.FC = () => {

    const launches = [1,2,3,4];

	return (
            <section>
                  <Typography variant="h4" gutterBottom className="live-heading">
                        UPCOMING
                  </Typography>
                  {launches.map((index: number) => (<LaunchEvent index={index}/>))}
            </section>
	);
}
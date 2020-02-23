import React from 'react';
import { useSelector} from 'react-redux';
import {I_Launches } from '../interfaces';
import { Date_Calendar } from './Date';
import { Live } from './Live';
import { Upcoming } from './Upcoming';



export const Main: React.FC = () => {

    const isMobile = window.innerWidth < 930;
    const launches = useSelector((state: I_Launches) => state.name);


	return (
        <>
        {launches.length == 0 && 
            <div>
                {isMobile && <> 
                    <Live />
                    <Upcoming />
                    <Date_Calendar />
                </>}
                {!isMobile && <>
                    <div className="live-date">
                        <Live />
                        <Date_Calendar />
                    </div>
                    <Upcoming />
                </>}
            </div>
        }
        </>
	);
}
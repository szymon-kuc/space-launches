import React from 'react';
import { useSelector} from 'react-redux';
import {I_Launches } from '../interfaces';
import { Date } from './Date';
import { Live } from './Live';
import { Upcoming } from './Upcoming';



export const Main: React.FC = () => {


    const launches = useSelector((state: I_Launches) => state.name);


	return (
        <>
        {launches.length == 0 && 
            <div>
                <Live />
                <Upcoming />
                <Date />
            </div>
        }
        </>
	);
}
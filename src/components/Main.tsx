import React, {useState, useEffect} from 'react';
import { useSelector} from 'react-redux';
import {I_Launches } from '../interfaces';
import { Date_Calendar } from './Date';
import { Live } from './Live';
import { Upcoming } from './Upcoming';
import { DateSearchResults } from './DateSearchResults';



export const Main: React.FC = () => {

    const [isMobile, setIsMobile] = useState(window.innerWidth < 1000);

    useEffect(() => {
        window.addEventListener("resize", () => setIsMobile(window.innerWidth < 1000));
        return () => window.removeEventListener("resize", () => setIsMobile(window.innerWidth < 1000));
      });
    const launches = useSelector((state: I_Launches) => state.name);
    const launchesDate = useSelector((state: I_Launches) => state.date);


	return (
        <>
        {launches.length == 0 && 
            <div>
                {isMobile ? <> 
                    <Live />
                    <Upcoming />
                    <Date_Calendar />
                </>: <>
                    <div className="live-date">
                        <Live />
                        <Date_Calendar />
                    </div>
                    {launchesDate.length == 0 ? <Upcoming /> : <DateSearchResults />}
                    
                </>}
            </div>
        }
        </>
	);
}
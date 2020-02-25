import React, {useState, useEffect} from 'react';
import { useSelector } from 'react-redux';
import { I_Launches, I_Launch } from '../interfaces';
import { LaunchEvent } from './LaunchEvent';
import Typography from '@material-ui/core/Typography';


export const DateSearchResults: React.FC = () => {

    const launches = useSelector((state: I_Launches) => state.date);
    const [isMobile, setIsMobile] = useState(window.innerWidth < 630);

    useEffect(() => {
            window.addEventListener("resize", () => setIsMobile(window.innerWidth < 630));
            return () => window.removeEventListener("resize", () => setIsMobile(window.innerWidth < 630));
      });

    let name: Array<string> = [];
    let location: Array<string> = [];
    let launchDate: Array<string> = [];

    for(let i=0; i<=launches.length; i++){
        name[i] = launches.map((el: I_Launch) => (el.name))[i];
        location[i] = launches.map((el: I_Launch) => (el.location.name))[i];
        launchDate[i] = launches.map((el: I_Launch) => (el.windowstart))[i];
    }
    return (
        <>
        {!isMobile &&
        <Typography variant="h4" gutterBottom className="section-heading">
            Launches at {launchDate[0].split(",")[0]}
        </Typography>}
            <section className="search-results">
                {launches.map((_el:any, index: number) => (<LaunchEvent key={index} index={index} maxIndex={launches.length} name={name[index]} location={location[index]} date={launchDate[index]} id="space-event"/>))}
            </section>
            </>
	);
}
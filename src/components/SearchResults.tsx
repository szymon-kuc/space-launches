import React from 'react';
import { useSelector} from 'react-redux';
import {I_Launches, I_Launch } from '../interfaces';
import { LaunchEvent } from './LaunchEvent';

export const SearchResults: React.FC = () => {

    let name: Array<string> = [];
    let location: Array<string> = [];
    let launchDate: Array<string> = [];

    const launches = useSelector((state: I_Launches) => state.name);

    for(let i=0; i<=launches.length; i++){
        name[i] = launches.map((el: I_Launch) => (el.name))[i];
        location[i] = launches.map((el: I_Launch) => (el.location.name))[i];
        launchDate[i] = launches.map((el: I_Launch) => (el.windowstart))[i];
    }

	return (
        <section className="search-results">
            {launches.map((_el:any, index: number) => (<LaunchEvent key={index} index={index} maxIndex={launches.length} name={name[index]} location={location[index]} date={launchDate[index]} />))}
        </section>
	);
}
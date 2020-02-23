import React, { useState } from 'react';
import { useDispatch, useSelector} from 'react-redux';
import InputAdornment from '@material-ui/core/InputAdornment';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import SearchIcon from '@material-ui/icons/Search';
import { fetchLaunchesByName } from '../actions/getLaunchesAction';
import {I_Launches } from '../interfaces';

interface I_Props {
    toggle?: Function;
}

export const Search: React.FC<I_Props> = ({toggle}) => {
    const [txt, setTxt] = useState("");
    const dispatch = useDispatch();
    const launchesAction = (name: string) => dispatch(fetchLaunchesByName(name));

    const launches = useSelector((state: I_Launches) => state.name);

    console.log(launches);
    const onClick = () => {
        launchesAction(txt);
        if(toggle != undefined){
            toggle();
        }
    }

    const onChange = (e: any) => {
        setTxt(e.target.value);
    }

	return (
        <div className="search">
            <OutlinedInput className="search-input" placeholder="Search…" inputProps={{ 'aria-label': 'description' }} endAdornment={
                <InputAdornment position="end" >
                <SearchIcon className="search-icon" onClick={onClick}/>
                </InputAdornment>
            } onChange={onChange}/>
            </div>
	);
}
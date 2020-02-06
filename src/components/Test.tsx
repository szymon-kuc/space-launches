import React from 'react';
import { useSelector, useDispatch} from 'react-redux';
import { fetchLaunches } from '../actions/getLaunchesAction';
import { useEffect } from 'react';

export const Launch: React.FC = () => {

    const dispatch = useDispatch();
    const launchesAction = () => dispatch(fetchLaunches())
    useEffect(()=> {
        launchesAction();
    }, [])

    const launches = useSelector((state: any) => state.launches);
    console.log(launches);
	return (
        <h1>LOLZ</h1>
	);
}
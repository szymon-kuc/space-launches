import React from 'react';
import { useDispatch} from 'react-redux';
import { fetchLaunches } from '../actions/getLaunchesAction';
import { useEffect } from 'react';

export const Data: React.FC = () => {

    const dispatch = useDispatch();
    const launchesAction = () => dispatch(fetchLaunches())
    useEffect(()=> {
        launchesAction();
    }, [])
	return (
        <></>
	);
}
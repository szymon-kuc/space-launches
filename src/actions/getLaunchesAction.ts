import { FETCH_LAUNCHES, FETCH_LAUNCHES_BY_DATE } from './types';

export const fetchLaunches = () => {
    return (dispatch: any) => {
        fetch('https://launchlibrary.net/1.3/launch/next/5')
        .then(res => res.json())
        .then(res => dispatch({
            type: FETCH_LAUNCHES,
            payload: res.launches
        }))
    }
}

export const fetchLaunchesByDate = (date: any) => {
    return (dispatch: any) => {
        fetch('https://launchlibrary.net/1.3/launch/'+date+"/"+date)
        .then(res => res.json())
        .then(res => dispatch({
            type: FETCH_LAUNCHES_BY_DATE,
            payload: res.launches
        }))
    }
}
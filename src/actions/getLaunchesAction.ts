import { FETCH_LAUNCHES } from './types';

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


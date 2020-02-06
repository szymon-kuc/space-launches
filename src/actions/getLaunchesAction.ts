import { FETCH_LAUNCHES } from './types';


export const fetchLaunches = () => {
    fetch('https://launchlibrary.net/1.3/launch/next/5')
        .then(res => res.json())
        .then(launches => ({
            type: FETCH_LAUNCHES,
            payload: launches
        }))
}



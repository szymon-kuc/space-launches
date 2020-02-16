import { FETCH_LAUNCHES, FETCH_LAUNCHES_BY_DATE, FETCH_LAUNCHES_BY_NAME } from '../actions/types';

export default function reducer(state: any ={launches: [], date: [], name: []} , { type, payload}: any){
    switch(type){
        case FETCH_LAUNCHES:
            return {
                ...state,
                launches: payload
            };
        case FETCH_LAUNCHES_BY_DATE:
            return {
                ...state,
                date: payload
            };
        case FETCH_LAUNCHES_BY_NAME:
            return {
                ...state,
                name: payload
            }
        default:
            return state;
    }
}
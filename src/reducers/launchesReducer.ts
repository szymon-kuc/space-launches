import { FETCH_LAUNCHES, FETCH_LAUNCHES_BY_DATE } from '../actions/types';

export default function reducer(state: any ={launches: [], date: []} , { type, payload}: any){
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
            }
        default:
            return state;
    }
}
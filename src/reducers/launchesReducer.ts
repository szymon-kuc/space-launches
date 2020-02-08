import { FETCH_LAUNCHES } from '../actions/types';

export default function reducer(state: any ={launches: []} , { type, payload}: any){
    switch(type){
        case FETCH_LAUNCHES:
            return {
                ...state,
                launches: payload
            };
        default:
            return state;
    }
}
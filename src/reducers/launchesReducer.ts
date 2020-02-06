import { FETCH_LAUNCHES } from '../actions/types';

export default function reducer(state: any, { type, payload}: any){
    switch(type){
        case FETCH_LAUNCHES:
            return {
                launches: payload
            };
        default:
            return state;
    }
}
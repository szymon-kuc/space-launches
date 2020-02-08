import { createStore, applyMiddleware } from 'redux';
import reducer from '../reducers/launchesReducer';
import thunk from 'redux-thunk';

declare global {
    interface Window { devToolsExtension: any; }
}

// const initialState = {
//     launches: [

//     ]
// }

export const store = createStore(
    reducer,
    applyMiddleware(thunk)
);
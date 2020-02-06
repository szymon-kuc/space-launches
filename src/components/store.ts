import { createStore } from 'redux';
import reducer from '../reducers/launchesReducer';

declare global {
    interface Window { devToolsExtension: any; }
}

const initialState = {
    launches: [

    ]
}

export const store = createStore(
    reducer,
    initialState,
    window.devToolsExtension && window.devToolsExtension()
);
import { devToolsEnhancer } from '@redux-devtools/extension';
import { createStore } from 'redux';
import { rootReducer } from './reducer';

// createStore(reducer, preloadedState, enhancer)

// const initialState = {
//     contacts: [],
//     filter: ""
//   }

// const rootReducer = (state = initialState, action) => {
//     return state;
// }

const enhancer = devToolsEnhancer();

export const store = createStore(rootReducer, enhancer);
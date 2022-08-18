import {createStore, applyMiddleware} from 'redux';
import reduxPromise from 'redux-promise';

import rootReducer from './reducers';

const createStoreWithMiddleware = applyMiddleware(reduxPromise)(createStore);

export type RootState = ReturnType<typeof createStoreWithMiddleware>;

export default createStoreWithMiddleware(rootReducer);

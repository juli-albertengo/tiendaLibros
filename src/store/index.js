import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import bookReducer from './reducers/bookReducer';

const rootReducer = combineReducers({
    books: bookReducer,
});

export default createStore(rootReducer, applyMiddleware(thunk));

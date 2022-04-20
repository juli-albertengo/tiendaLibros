import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import bookReducer from './reducers/bookReducer';
import cartReducer from './reducers/cartReducer';

const rootReducer = combineReducers({
    books: bookReducer,
    cart: cartReducer,
});

export default createStore(rootReducer, applyMiddleware(thunk));

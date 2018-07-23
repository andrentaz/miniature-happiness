import createHistory from 'history/createBrowserHistory';
import { applyMiddleware, createStore } from 'redux';
import { routerMiddleware } from 'react-router-redux';
import thunk from 'redux-thunk';

import rootReducer from '../reducers';

// configure history and apply middlewares to the dispatch inside actions for example
export const history = createHistory();
const middlewares = [thunk, routerMiddleware(history)];

export function configureStore(initialState) {
    return createStore(
        rootReducer,
        initialState,
        applyMiddleware(...middlewares),
    );
}

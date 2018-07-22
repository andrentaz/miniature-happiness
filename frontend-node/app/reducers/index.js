import { routerReducer as routing } from 'react-router-redux';
import { combineReducers } from 'redux';
import * as types from '../actions/types';

const filter = (state = '', action) => {
    switch (action.type) {
        case types.FILTER:
            return action.filter;
        default:
            return state;
    }
};

const defaultExchangeState = {
    fetching: false,
    products: [],
    error: {},
};

const exchange = (state = defaultExchangeState, action) => {
    switch(action.type) {
        case types.FETCHING_PRODUCTS:
            return {
                ...state,
                fetching: true,
            };
        case types.RECEIVED_PRODUCTS:
            return {
                ...state,
                fetching: false,
                products: action.products,
            };
        case types.FAILED_FETCH_PRODUCTS:
            return {
                ...state,
                fetching: false,
                error: action.error,
            };
        default:
            return state;
    }
};

const rootReducer = combineReducers({
    exchange,
    filter,
    routing
});

export default rootReducer;

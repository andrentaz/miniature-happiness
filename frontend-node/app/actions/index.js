import * as types from './types';

import ExchangeApi from '../api/ExchangeApi';

/**
 * Action that filters available products
 * @param {string} filter - string used as filter to available products list
 */
const filterTable = (filter) => {
    return {
        type: types.FILTER,
        filter
    };
};

/**
 * Action that fetches the available products
 */
const fetchProducts = () => async dispatch => {
    dispatch({ type: types.FETCHING_PRODUCTS });

    try {
        const products = await ExchangeApi.getProducts();

        dispatch({
            type: types.RECEIVED_PRODUCTS,
            products,
        });
    } catch (error) {
        dispatch({
            type: types.FAILED_FETCH_PRODUCTS,
            error,
        });
    }
};

export { filterTable, fetchProducts };

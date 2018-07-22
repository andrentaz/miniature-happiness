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

/**
 * Action that fetches the available product prices
 * @param {string} productId - selected product id
 */
const fetchProductPrices = (productId) => async dispatch => {
    dispatch({ type: types.FETCHING_PRODUCT_PRICES });

    try {
        const productPrices = await ExchangeApi.getProductPrices(productId);

        dispatch({
            type: types.RECEIVED_PRODUCT_PRICES,
            productPrices,
            productId,
        });
    } catch (error) {
        dispatch({
            type: types.FAILED_FETCH_PRODUCT_PRICES,
            error,
        });
    }
};

const resetProductId = () => dispatch => {
    dispatch({ type: types.RESET_PRODUCT_ID });
};

export { fetchProducts, fetchProductPrices, filterTable, resetProductId };

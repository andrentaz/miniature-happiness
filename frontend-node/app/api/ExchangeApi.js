import { xhr } from '../utils/web';

import { ProductVO, ProductPriceVO } from './vo';

// Setup of the basic configuration
const BASE_URL = 'http://localhost:5000';
const ApiRoutes = {
    products: BASE_URL + '/products',
    productPrices: BASE_URL + '/products/<product_id>/prices',
};

/**
 * Api object to handle client-server communication
 */
const ExchangeApi = {
    getProducts: async () => {
        const url = ApiRoutes.products;

        const productsDTO = await xhr(url, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                Accept: 'application/json',
            }
        });

        return productsDTO.map(dto => ProductVO.fromServerDTO(dto));
    },

    getProductPrices: async (productId) => {
        const url = ApiRoutes.productPrices.replace('<product_id>', productId);

        const productPricesDTO = await xhr(url, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                Accept: 'application/json',
            }
        });

        return productPricesDTO.map(dto => ProductPriceVO.fromServerDTO(dto));
    }
};

export default ExchangeApi;

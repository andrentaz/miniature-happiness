import { xhr } from '../utils/web';

import { ProductVO } from './vo';

// Setup of the basic configuration
const BASE_URL = 'http://localhost:5000';
const ApiRoutes = {
    products: BASE_URL + '/products',
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
};

export default ExchangeApi;

import BaseVO from './BaseVO';

/**
 * VO to products DTOs
 */
class ProductVO extends BaseVO {
    static fields = [
        { name: 'baseCurrency', dtoName: 'base_currency' },
        { name: 'baseMaxSize', dtoName: 'base_max_size' },
        { name: 'baseMinSize', dtoName: 'base_min_size' },
        { name: 'id', dtoName: 'id' },
        { name: 'originalId', dtoName: 'originalId' },
        { name: 'quoteCurrency', dtoName: 'quote_currency' },
        { name: 'quoteDecimalPrecision', dtoName: 'quote_decimal_precision' },
    ]
}

/**
 * VO to product prices DTOs
 */
class ProductPriceVO extends BaseVO {
    static fields = [
        { name: 'exchange', dtoName: 'exchange' },
        { name: 'price', dtoName: 'price' },
        { name: 'productId', dtoName: 'product_id' },
    ]
}

export { ProductVO, ProductPriceVO };

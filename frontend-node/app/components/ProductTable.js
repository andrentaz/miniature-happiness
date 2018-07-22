import PropTypes from 'prop-types';
import React from 'react';
import ProductRow from './ProductRow';

const products = [
    {baseCurrency: 'BAT', baseMaxSize: 1000000000000, baseMinSize: 1, id: 'BTC-BAT', originalId: 'BATBTC', quoteCurrency: 'BTC', quoteDecimalPrecision: 0},
    {baseCurrency: 'BTG', baseMaxSize: 1000000000000, baseMinSize: 0.01, id: 'BTC-BTG', originalId: 'BTGBTC', quoteCurrency: 'BTC', quoteDecimalPrecision: 2},
    {baseCurrency: 'ETC', baseMaxSize: 1000000000000, baseMinSize: 0.01, id: 'BTC-ETC', originalId: 'ETCBTC', quoteCurrency: 'BTC', quoteDecimalPrecision: 2},
    {baseCurrency: 'ETH', baseMaxSize: 1000000000000, baseMinSize: 0.001, id: 'BTC-ETH', originalId: 'ETHBTC', quoteCurrency: 'BTC', quoteDecimalPrecision: 3},
    {baseCurrency: 'GNT', baseMaxSize: 1000000000000, baseMinSize: 1, id: 'BTC-GNT', originalId: 'GNTBTC', quoteCurrency: 'BTC', quoteDecimalPrecision: 0},
    {baseCurrency: 'LRC', baseMaxSize: 1000000000000, baseMinSize: 1, id: 'BTC-LRC', originalId: 'LRCBTC', quoteCurrency: 'BTC', quoteDecimalPrecision: 0},
    {baseCurrency: 'LTC', baseMaxSize: 1000000000000, baseMinSize: 0.01, id: 'BTC-LTC', originalId: 'LTCBTC', quoteCurrency: 'BTC', quoteDecimalPrecision: 2},
    {baseCurrency: 'NEO', baseMaxSize: 1000000000000, baseMinSize: 0.01, id: 'BTC-NEO', originalId: 'NEOBTC', quoteCurrency: 'BTC', quoteDecimalPrecision: 2},
    {baseCurrency: 'OMG', baseMaxSize: 1000000000000, baseMinSize: 0.01, id: 'BTC-OMG', originalId: 'OMGBTC', quoteCurrency: 'BTC', quoteDecimalPrecision: 2},
    {baseCurrency: 'RCN', baseMaxSize: 1000000000000, baseMinSize: 1, id: 'BTC-RCN', originalId: 'RCNBTC', quoteCurrency: 'BTC', quoteDecimalPrecision: 0},
    {baseCurrency: 'REP', baseMaxSize: 1000000000000, baseMinSize: 0.001, id: 'BTC-REP', originalId: 'REPBTC', quoteCurrency: 'BTC', quoteDecimalPrecision: 3},
    {baseCurrency: 'RLC', baseMaxSize: 1000000000000, baseMinSize: 0.01, id: 'BTC-RLC', originalId: 'RLCBTC', quoteCurrency: 'BTC', quoteDecimalPrecision: 2},
    {baseCurrency: 'SNT', baseMaxSize: 1000000000000, baseMinSize: 1, id: 'BTC-SNT', originalId: 'SNTBTC', quoteCurrency: 'BTC', quoteDecimalPrecision: 0},
    {baseCurrency: 'TRX', baseMaxSize: 1000000000000, baseMinSize: 1, id: 'BTC-TRX', originalId: 'TRXBTC', quoteCurrency: 'BTC', quoteDecimalPrecision: 0},
    {baseCurrency: 'XLM', baseMaxSize: 1000000000000, baseMinSize: 1, id: 'BTC-XLM', originalId: 'XLMBTC', quoteCurrency: 'BTC', quoteDecimalPrecision: 0},
    {baseCurrency: 'XMR', baseMaxSize: 1000000000000, baseMinSize: 0.001, id: 'BTC-XMR', originalId: 'XMRBTC', quoteCurrency: 'BTC', quoteDecimalPrecision: 3},
    {baseCurrency: 'XRP', baseMaxSize: 1000000000000, baseMinSize: 1, id: 'BTC-XRP', originalId: 'XRPBTC', quoteCurrency: 'BTC', quoteDecimalPrecision: 0},
    {baseCurrency: 'XVG', baseMaxSize: 1000000000000, baseMinSize: 1, id: 'BTC-XVG', originalId: 'XVGBTC', quoteCurrency: 'BTC', quoteDecimalPrecision: 0},
    {baseCurrency: 'ZEC', baseMaxSize: 1000000000000, baseMinSize: 0.001, id: 'BTC-ZEC', originalId: 'ZECBTC', quoteCurrency: 'BTC', quoteDecimalPrecision: 3},
    {baseCurrency: 'ZRX', baseMaxSize: 1000000000000, baseMinSize: 1, id: 'BTC-ZRX', originalId: 'ZRXBTC', quoteCurrency: 'BTC', quoteDecimalPrecision: 0},
    {baseCurrency: 'BAT', baseMaxSize: 1000000000000, baseMinSize: 1, id: 'ETH-BAT', originalId: 'BATETH', quoteCurrency: 'ETH', quoteDecimalPrecision: 0},
    {baseCurrency: 'GNT', baseMaxSize: 1000000000000, baseMinSize: 1, id: 'ETH-GNT', originalId: 'GNTETH', quoteCurrency: 'ETH', quoteDecimalPrecision: 0},
    {baseCurrency: 'LRC', baseMaxSize: 1000000000000, baseMinSize: 1, id: 'ETH-LRC', originalId: 'LRCETH', quoteCurrency: 'ETH', quoteDecimalPrecision: 0},
    {baseCurrency: 'NEO', baseMaxSize: 1000000000000, baseMinSize: 0.01, id: 'ETH-NEO', originalId: 'NEOETH', quoteCurrency: 'ETH', quoteDecimalPrecision: 2},
    {baseCurrency: 'OMG', baseMaxSize: 1000000000000, baseMinSize: 0.01, id: 'ETH-OMG', originalId: 'OMGETH', quoteCurrency: 'ETH', quoteDecimalPrecision: 2},
    {baseCurrency: 'RCN', baseMaxSize: 1000000000000, baseMinSize: 1, id: 'ETH-RCN', originalId: 'RCNETH', quoteCurrency: 'ETH', quoteDecimalPrecision: 0},
    {baseCurrency: 'REP', baseMaxSize: 1000000000000, baseMinSize: 0.001, id: 'ETH-REP', originalId: 'REPETH', quoteCurrency: 'ETH', quoteDecimalPrecision: 3},
    {baseCurrency: 'RLC', baseMaxSize: 1000000000000, baseMinSize: 0.01, id: 'ETH-RLC', originalId: 'RLCETH', quoteCurrency: 'ETH', quoteDecimalPrecision: 2},
    {baseCurrency: 'SNT', baseMaxSize: 1000000000000, baseMinSize: 1, id: 'ETH-SNT', originalId: 'SNTETH', quoteCurrency: 'ETH', quoteDecimalPrecision: 0},
    {baseCurrency: 'TRX', baseMaxSize: 1000000000000, baseMinSize: 1, id: 'ETH-TRX', originalId: 'TRXETH', quoteCurrency: 'ETH', quoteDecimalPrecision: 0},
    {baseCurrency: 'XLM', baseMaxSize: 1000000000000, baseMinSize: 1, id: 'ETH-XLM', originalId: 'XLMETH', quoteCurrency: 'ETH', quoteDecimalPrecision: 0},
    {baseCurrency: 'ZRX', baseMaxSize: 1000000000000, baseMinSize: 1, id: 'ETH-ZRX', originalId: 'ZRXETH', quoteCurrency: 'ETH', quoteDecimalPrecision: 0},
];

const ProductTable = ({ filter }) => {
    let rows = [];

    products.forEach(p => {
        const productId = p.id.toLowerCase();
        const filterLC = filter.toLowerCase();

        if (productId.indexOf(filterLC) !== -1) {
            rows.push(
                <ProductRow key={p.id} data={p} />
            );
        }
    });

    return <div> {rows} </div>;
};

ProductTable.propTypes = {
    filter: PropTypes.string
};

export default ProductTable;

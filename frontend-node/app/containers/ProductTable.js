import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';

import ProductCard from './ProductCard';
import ProductPriceCard from '../components/ProductPriceCard';
import style from '../styles/product.scss';


class ProductTable extends Component {
    static propTypes = {
        filter: PropTypes.string,
        products: PropTypes.array,
        productId: PropTypes.string,
        productPrices: PropTypes.array,
    }

    render() {
        const { filter, products, productId, productPrices } = this.props;
        let content;

        if (productId === '') {
            const rows = [];

            products.map(prod => {
                const pId = prod.id.toLowerCase();
                const filterLC = filter.toLowerCase();

                if (pId.indexOf(filterLC) !== -1) {
                    rows.push(
                        <ProductCard key={prod.id} data={prod} />
                    );
                }
            });
            content = rows;
        } else {
            const prices = productPrices.map(price => price.price);
            const max = Math.max(...prices);
            const min = Math.min(...prices);
            content = productPrices.map(price => (
                <ProductPriceCard
                    key={price.exchange}
                    max={price.price === max}
                    min={price.price === min}
                    data={price} />
            ));
        }

        return <div className={style.productTable}> {content} </div>;
    }
}

const mapStateToProps = state => {
    return {
        products: state.exchange.products,
        productId: state.exchange.productId,
        productPrices: state.exchange.productPrices,
    };
};

export default connect(
    mapStateToProps,
    undefined
)(ProductTable);

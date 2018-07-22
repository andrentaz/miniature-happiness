import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';

import { fetchProductPrices } from '../actions';

import style from '../styles/product.scss';


class ProductCard extends Component {
    static propTypes = {
        data: PropTypes.object,
        onSelectProduct: PropTypes.func,
    };

    render() {
        const { data, onSelectProduct } = this.props;
        return (
            <div className={style.productRow} onClick={() => onSelectProduct(data.id)}>
                <p className={style.productRowText}>{data.id}</p>
            </div>
        );
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onSelectProduct: (productId) => {
            dispatch(fetchProductPrices(productId));
        }
    };
};

export default connect(
    undefined,
    mapDispatchToProps
)(ProductCard);

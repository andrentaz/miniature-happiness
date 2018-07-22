import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';

import { fetchProductPrices } from '../actions';


class ProductRow extends Component {
    static propTypes = {
        data: PropTypes.object,
        onSelectProduct: PropTypes.func,
    };

    render() {
        const { data, onSelectProduct } = this.props;
        return (
            <div onClick={() => onSelectProduct(data.id)}>
                <p>{data.id} = {data.baseMinSize} </p>
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
)(ProductRow);

import PropTypes from 'prop-types';
import React, { Component } from 'react';

import style from '../styles/product.scss';

export default class ProductPriceCard extends Component {
    static propTypes = {
        data: PropTypes.object.isRequired,
        max: PropTypes.bool,
        min: PropTypes.bool,
    }

    render() {
        const { data, max, min } = this.props;
        let cardStyle = min
            ? style.productPriceCardMin
            : style.productPriceCard;
        cardStyle = max ? style.productPriceCardMax : cardStyle;

        return (
            <div className={cardStyle}>
                <p>
                    {data.productId}
                </p>
                <p>
                    {data.exchange}
                </p>
                <p>
                    {data.price}
                </p>
            </div>
        );
    }
}

import PropTypes from 'prop-types';
import React, { Component } from 'react';

import style from '../styles/product.scss';


/**
 * ProductPriceCard is the only pure component in the application, it simply handle the layout
 */
export default class ProductPriceCard extends Component {
    static propTypes = {
        data: PropTypes.object.isRequired,
        max: PropTypes.bool,
        min: PropTypes.bool,
    }

    render() {
        const { data, max, min } = this.props;

        // maximum has precedence over minimum, so if all the cards have the same price, they
        // will all have the green color
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

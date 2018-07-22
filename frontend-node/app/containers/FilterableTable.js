import Loading from 'react-loading-animation';
import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';

import { filterTable, resetProductId } from '../actions';

import ProductTable from './ProductTable';
import style from '../styles/filterableTable.scss';


class FilterableTable extends Component {
    static propTypes = {
        fetching: PropTypes.bool,
        filter: PropTypes.string,
        onFilter: PropTypes.func,
        productId: PropTypes.string,
        resetSelection: PropTypes.func,
    };

    render() {
        let input;
        const { fetching, filter, onFilter, productId, resetSelection } = this.props;

        const headerText = productId === ''
            ? 'Click on a product card to check the price! You can also filter products using the box below :)'
            : 'Click on reset button to select a Product again';

        return (
            <div className={style.filterableTable}>
                <Loading isLoading={fetching}>
                    <div className={style.productCtas}>
                        <p className={style.productField}>
                            {headerText}
                        </p>
                        {
                            productId === '' ? (
                                <input
                                    className={style.textBox}
                                    value={filter}
                                    ref={node => {input = node;}}
                                    onChange={() => onFilter(input.value)}
                                    placeholder="Product Name..."
                                    size="50"/>
                            ) : (
                                <button className={style.resetButton} onClick={resetSelection}>RESET</button>
                            )
                        }
                    </div>

                    <div className={style.productsContainer}>
                        <ProductTable filter={filter} />
                    </div>
                </Loading>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        fetching: state.exchange.fetching,
        filter: state.filter,
        productId: state.exchange.productId,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        onFilter: filterText => dispatch(filterTable(filterText)),
        resetSelection: () => dispatch(resetProductId())
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(FilterableTable);

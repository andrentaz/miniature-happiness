import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';

import { filterTable, resetProductId } from '../actions';

import ProductTable from './ProductTable';
import style from '../styles/filterableTable.scss';


class FilterableTable extends Component {
    render() {
        let input;
        const { filter, onFilter, productId, resetSelection } = this.props;

        const headerText = productId === ''
            ? 'Click on a product card to check the price!'
            : 'Click on reset button to select a Product again';

        return (
            <div className={style.filterableTable}>
                <div className={style.productCtas}>
                    <p className={style.productField}>
                        {headerText}
                    </p>
                    {
                        productId === '' ? (
                            <input
                                value={filter}
                                ref={node => {input = node;}}
                                onChange={() => onFilter(input.value)} />
                        ) : (
                            <button className={style.resetButton} onClick={resetSelection}>RESET</button>
                        )
                    }
                </div>

                <div className={style.productsContainer}>
                    <ProductTable filter={filter} />
                </div>
            </div>
        );
    }
}

FilterableTable.propTypes = {
    filter: PropTypes.string,
    onFilter: PropTypes.func,
    productId: PropTypes.string,
    resetSelection: PropTypes.func,
};

const mapStateToProps = (state) => {
    return {
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

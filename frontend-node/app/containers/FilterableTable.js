import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import { filterTable } from '../actions';
import ProductTable from '../components/ProductTable';
import style from '../styles/filterableTable.scss';

const FilterableTable = ({ filter, onFilter }) => {
    let input;

    return (
        <div className={style.filterableTable}>
            <div>
                <p className={style.productField}>
                    Product
                </p>
                <input
                    value={filter}
                    ref={node => {input = node;}}
                    onChange={() => onFilter(input.value)} />
            </div>

            <div className={style.productsContainer}>
                <ProductTable filter={filter} />
            </div>
        </div>
    );
};

FilterableTable.propTypes = {
    filter: PropTypes.string,
    onFilter: PropTypes.func
};

const mapStateToProps = (state) => {
    return {
        filter: state.filter
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        onFilter: filterText => dispatch(filterTable(filterText))
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(FilterableTable);

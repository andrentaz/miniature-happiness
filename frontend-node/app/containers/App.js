import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';

import { fetchProducts } from '../actions';

import FilterableTable from './FilterableTable';
import style from '../styles/appContainer.scss';


class AppContainer extends Component {
    static propTypes = {
        onConstruct: PropTypes.func.isRequired,
    }

    constructor(props) {
        super(props);
        const { onConstruct } = props;
        onConstruct();
    }

    render() {
        return (
            <div className={style.appContainer}>
                <h1 className={style.title}>Available Exchanges</h1>
                <FilterableTable />
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        products: state.exchange.products,
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onConstruct: () => {
            dispatch(fetchProducts());
        }
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(AppContainer);

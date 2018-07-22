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
                <div className={style.header}>
                    <div className={style.exchangeImage} />
                    <h1 className={style.title}>Available Exchanges</h1>
                </div>
                <FilterableTable />
            </div>
        );
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onConstruct: () => {
            dispatch(fetchProducts());
        }
    };
};

export default connect(
    undefined,
    mapDispatchToProps
)(AppContainer);

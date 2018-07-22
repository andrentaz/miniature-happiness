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
                    <h1 className={style.title}>Exchanger</h1>
                </div>
                <div className={style.explanation}>
                    <p>
                        Welcome My Master :)
                        <br />My name is Exchanger, and my honor and duty in life is support you with the wonderful taks of showing some exchanges products and prices!
                        <br />It's always an honor to serve you :)
                        <br /> Have a nice day.
                    </p>
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

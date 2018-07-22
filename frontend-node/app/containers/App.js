// import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';

import Routes from '../routes';
import style from '../styles/appContainer.scss';


class AppContainer extends Component {
    render() {
        return (
            <div className={style.appContainer}>
                <h1 className={style.title}>Available Exchanges</h1>
                { Routes }
            </div>
        );
    }
}

const mapStateToProps = () => {
    return {};
};

const mapDispatchToProps = () => {
    return {};
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(AppContainer);

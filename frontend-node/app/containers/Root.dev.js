import PropTypes from 'prop-types';
import React from 'react';
import {Provider} from 'react-redux';
import {Route} from 'react-router-dom';
import {ConnectedRouter} from 'react-router-redux';

import App from './App';
import DevTools from './DevTools';

/**
 * This component makes the routing of the app, it can be extended to deal with more
 * routes in the future.
 * @param {prop} param0 component props
 */
export default function Root({store, history}) {
    return (
        <Provider store={store}>
            <div>
                <ConnectedRouter history={history}>
                    <Route path="/" component={App}/>
                </ConnectedRouter>
                <DevTools />
            </div>
        </Provider>
    );
}

Root.propTypes = {
    store: PropTypes.object.isRequired,
    history: PropTypes.object.isRequired
};

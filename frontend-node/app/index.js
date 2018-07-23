import React from 'react';
import ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import { configureStore, history } from './store/configureStore';
import Root from './containers/Root';

// Create the store
const store = configureStore();

// Use the react dom to render the react application in the right spot in the html
ReactDOM.render(
    <AppContainer>
        <Root store={store} history={history} />
    </AppContainer>,
    document.getElementById('root')
);

// Setup hot loader
if (module.hot) {
    module.hot.accept('./containers/Root', () => {
        const newConfigureStore = require('./store/configureStore');
        const newStore = newConfigureStore.configureStore();
        const newHistory = newConfigureStore.history;
        const NewRoot = require('./containers/Root').default;
        ReactDOM.render(
            <AppContainer>
                <NewRoot store={newStore} history={newHistory} />
            </AppContainer>,
            document.getElementById('root')
        );
    });
}

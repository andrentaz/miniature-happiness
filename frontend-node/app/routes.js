import React from 'react';
import { Route, Switch } from 'react-router-dom';
import FilterableTable from './containers/FilterableTable';

export default (
	<Switch>
		<Route exact path="/" component={FilterableTable} />
	</Switch>
);

import React from 'react';

import { Route, Redirect } from 'react-router-dom';
const SuperRoute = ({ component: Component, isAuthenticated, ...rest }) => {
	return <Route {...rest} element={<Component />}></Route>;
};

export default SuperRoute;

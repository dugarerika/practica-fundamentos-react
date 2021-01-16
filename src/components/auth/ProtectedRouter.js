import React from 'react';
import { Redirect, Route } from 'react-router-dom';

const ProtectedRouter = ({ isLogged, ...props }) =>

		isLogged ? <Route {...props} /> :
		<Redirect to='/login' />;

export default ProtectedRouter;

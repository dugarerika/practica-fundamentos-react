import React from 'react';
import { Redirect, Route } from 'react-router-dom';

const ProtectedRouter = ({ islogged, ...props }) =>

		islogged ? <Route {...props} /> :
		<Redirect to='/login' />;

export default ProtectedRouter;

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import storage from './utils/storage';
import { configuraClient } from './API/client';

const auth = storage.get('auth') || { ok: false, token: null };

configuraClient(auth.token);

ReactDOM.render(
	<App initialLogged={auth.ok} />,
	document.getElementById('root')
);

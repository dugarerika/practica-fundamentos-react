import React from 'react';
import AnunciosPage from '../anuncios/AnunciosPage';
import LoginPage from '../auth/LoginPage';
import T from 'prop-types';
import { Redirect, Route, Switch } from 'react-router-dom';
import AnuncioPage from '../anuncios/AnuncioPage';
import NewAnuncioPage from '../anuncios/NewAnuncioPage';
import ProtectedRoute from '../auth/ProtectedRouter';

class App extends React.Component {
	anunciosPageRef = React.createRef();
	loginPageRef = React.createRef();
	state = {
		loggedUser: this.props.initialLogged
	};

	handleLogout = () => this.state({ loggedUser: false });
	handleLogin = (loggedUser, cb) => this.setState({ loggedUser }, cb);

	componentDidMount() {}

	render() {
		const { loggedUser } = this.state;
		return (
			<div className='App'>
				<Switch>
					<Route path='/' exact>
						{({ history }) => (
							<AnunciosPage
								isLogged={loggedUser}
								onLogout={this.handleLogout}
								history={history}
							/>
						)}
					</Route>
					<ProtectedRoute path='/anuncio' exact isLogged={loggedUser}>
						<NewAnuncioPage />
					</ProtectedRoute>
					<Route path='/anuncio/:anuncioID' exact component={AnuncioPage} />
					<Route path='/login' exact>
						{({ history }) => (
							<LoginPage onLogin={this.handleLogin} history={history} />
						)}
					</Route>
					<Route path='/404' exact>
						<div style={{ textAlign: 'center', fontSize: 48, fontWeight: 3 }}>
							404 Not Found
						</div>
					</Route>
					<Route>
						<Redirect to='/404' />
					</Route>
				</Switch>
			</div>
		);
	}
}

App.propTypes = {
	initialLogged: T.bool
};

export default App;

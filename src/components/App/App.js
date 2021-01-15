import React from 'react';
import AnunciosPage from '../anuncios/AnunciosPage';
import LoginPage from '../auth/LoginPage';
import T from 'prop-types';
import { Redirect, Route, Switch } from 'react-router-dom';
import AnuncioPage from '../anuncios/AnuncioPage';
class App extends React.Component {
	state = {
		loggedUser: this.props.initialLogged
	};

	handleLogin = (loggedUser) => this.setState({ loggedUser });

	componentDidMount() {}

	render() {
		const { loggedUser } = this.state;
		return (
			<div className='App'>
				<Switch>
					<Route path='/' exact component={AnunciosPage} />
					<Route path='/anuncio' exact>
						Anuncio
					</Route>
					<Route path='/anuncio/:anuncioID' exact component={AnuncioPage} />
					<Route path='/login' exact>
						{() => <LoginPage onLogin={this.handleLogin} />}
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

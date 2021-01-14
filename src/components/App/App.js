import React from 'react';
import AnunciosPage from '../anuncios/AnunciosPage';
import LoginPage from '../auth/LoginPage';
import T from 'prop-types';
import { Route } from 'react-router-dom';

class App extends React.Component {
	state = {
		loggedUser: this.props.initialLogged
	};

	handleLogin = (loggedUser) => this.setState({ loggedUser });

	componentDidMount() {}

	render() {
		// const { loggedUser } = this.state;
		return (
			<div className='App'>
				<Route path='/' exact>
					<AnunciosPage />
				</Route>
				<Route path='/login'>
					<LoginPage onLogin={this.handleLogin} />
				</Route>
			</div>
		);
	}
}

App.propTypes = {
	initialLogged: T.bool
};

export default App;

import React from 'react';
import AnunciosPage from '../anuncios/AnunciosPage';
import LoginPage from '../auth/LoginPage';
import T from 'prop-types';

class App extends React.Component {
	state = {
		loggedUser: this.props.initialLogged
	};

	handleLogin = (loggedUser) => this.setState({ loggedUser });

	render() {
		const { loggedUser } = this.state;
		return (
			<div className='App'>
				{
					loggedUser ? <AnunciosPage /> :
					<LoginPage onLogin={this.handleLogin} />}
			</div>
		);
	}
}

App.propTypes = {
	initialLogged: T.bool
};

export default App;

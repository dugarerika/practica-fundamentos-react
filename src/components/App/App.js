import React from 'react';
import AnunciosPage from '../anuncios/AnunciosPage';
import LoginPage from '../auth/LoginPage';

class App extends React.Component {
	state = {
		loggedUser: false
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

export default App;

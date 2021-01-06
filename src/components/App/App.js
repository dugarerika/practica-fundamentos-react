import React from 'react';
import AnunciosPage from '../anuncios/AnunciosPage';
import LoginPage from '../auth/LoginPage';

class App extends React.Component {
	render() {
		return (
			<div className='App'>
				{/* <AnunciosPage /> */}
				<LoginPage />
			</div>
		);
	}
}

export default App;

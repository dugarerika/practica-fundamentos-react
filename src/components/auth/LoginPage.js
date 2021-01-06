import React from 'react';
import './LoginPage.css';

class LoginPage extends React.Component {
	render() {
		return (
			<div className='LoginPage'>
				<h1 className='LoginPage-tittle'>Log in the Twitter</h1>
				<form>
					<input type='text' />
					<input type='password' />
					<input type='submit' value='Log in' />
				</form>
			</div>
		);
	}
}

export default LoginPage;

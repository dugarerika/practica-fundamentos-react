import React from 'react';
import './LoginPage.css';
import Button from '../shared/Button';

class LoginPage extends React.Component {
	render() {
		return (
			<div className='LoginPage'>
				<h1 className='LoginPage-tittle'>Log in the Twitter</h1>
				<form>
					<input type='text' />
					<input type='password' />
					<Button type='submit' className='loginPage-button' variant='primary'>
						Log In
					</Button>
				</form>
			</div>
		);
	}
}

export default LoginPage;

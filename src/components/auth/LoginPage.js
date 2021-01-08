import React from 'react';
import './LoginPage.css';
import Button from '../shared/Button';

class LoginPage extends React.Component {
	state = {
		form: {
			email: '',
			password: ''
		}
	};

	haddleChange = (event) => {
		console.log(event.target.value);
		this.setState((state) => ({
			form: { ...state.form, [event.target.name]: event.target.value }
		}));
	};

	couldSubmit = () => {
		const { form: { email, password } } = this.state;
		return email && password;
	};

	render() {
		const { form: { email, password } } = this.state;

		return (
			<div className='LoginPage'>
				<h1 className='LoginPage-tittle'>Log in the Twitter</h1>
				<form>
					<input
						name='email'
						type='text'
						value={email}
						onChange={this.haddleChange}
					/>
					<input
						name='password'
						type='password'
						value={password}
						onChange={this.haddleChange}
					/>
					<Button
						type='submit'
						className='loginPage-button'
						variant='primary'
						disabled={!this.couldSubmit()}>
						Log In
					</Button>
				</form>
			</div>
		);
	}
}

export default LoginPage;

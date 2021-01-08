import React from 'react';
import './LoginPage.css';
import Button from '../shared/Button';
import FormInput from '../shared/FormInput';

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
				<h1 className='LoginPage-tittle'>Log in Nodepop</h1>
				<form>
					<FormInput
						name='email'
						type='text'
						label='phone, email or username'
						className='loginPage-field'
						value={email}
						onChange={this.haddleChange}
					/>
					<FormInput
						name='password'
						type='password'
						label='password'
						value={password}
						className='loginPage-field'
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

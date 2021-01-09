import React from 'react';
import './LoginPage.css';
import Button from '../shared/Button';
import FormInput from '../shared/FormInput';
import { login } from '../../API/auth';

class LoginPage extends React.Component {
	state = {
		form: {
			email: '',
			password: ''
		},
		submmiting: false,
		error: null
	};

	handleSubmit = async (event) => {
		const { form: credentials } = this.state;
		event.preventDefault();
		console.log(event);
		this.setState({ submmiting: true });

		try {
			const usuarioID = await login(credentials);
			this.setState({ submmiting: false, error: null });
			console.log(credentials);
		} catch (error) {
			this.setState({ submmiting: false, error });
		}
	};

	// handleSubmit = (event) => {
	// 	const { form: credentials } = this.setState;
	// 	event.preventDefault();
	// 	login(credentials);
	// 	console.log(event);
	// };

	handleChange = (event) => {
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
				<form onSubmit={this.handleSubmit}>
					<FormInput
						name='email'
						type='text'
						label='phone, email or username'
						className='loginPage-field'
						value={email}
						onChange={this.handleChange}
					/>
					<FormInput
						name='password'
						type='password'
						label='password'
						value={password}
						className='loginPage-field'
						onChange={this.handleChange}
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

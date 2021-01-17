import React from 'react';
import Layout from '../layout';
import { AnuncioInput, Button } from '../shared/index';

class NewAnuncioPage extends React.Component {
	state = {
		form: {
			nombre: '',
			compraventa: '',
			tags: '',
			precio: ''
		},
		submmiting: false,
		error: null
	};

	handleSubmit = async (event) => {
		try {
		} catch (error) {}
	};

	handleChange = (event) => {
		console.log(event.target.value);
		this.setState((state) => ({
			form: { ...state.form, [event.target.name]: event.target.value }
		}));
	};

	couldSubmit = () => {
		const { form: { nombre, compraventa, tags, precio } } = this.state;
		return nombre && compraventa && tags && precio;
	};

	render() {
		const { form: { nombre, compraventa, tags, precio } } = this.state;
		return (
			<Layout title='Crea un nuevo anuncio'>
				<div>
					<form className='form-new-anuncio'>
						<AnuncioInput
							className='input-new-anuncio'
							name='nombre'
							type='text'
							label='Nombre'
							value={nombre}
							onChange={this.handleChange}
						/>
						<AnuncioInput
							className='input-new-anuncio'
							name='compra-venta'
							type='text'
							label='Compra/Venta'
							value={compraventa}
							onChange={this.handleChange}
						/>
						<AnuncioInput
							className='input-new-anuncio'
							name='tags'
							type='text'
							label='tags'
							value={tags}
							onChange={this.handleChange}
						/>
						<AnuncioInput
							className='input-new-anuncio'
							name='precio'
							type='text'
							label='precio'
							value={precio}
							onChange={this.handleChange}
						/>
						<div id='loweranuncio'>
							<Button
								type='submit'
								className='new-anuncio-button'
								Log
								In
								disabled={!this.couldSubmit()}>
								Crear
							</Button>
						</div>
					</form>
				</div>
			</Layout>
		);
	}
}

export default NewAnuncioPage;

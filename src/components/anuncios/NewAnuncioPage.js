import React from 'react';
import Layout from '../layout';
import { AnuncioInput, Button } from '../shared/index';
import { createAnuncio } from '../../API/anuncios';

class NewAnuncioPage extends React.Component {
	state = {
		form: {
			name: '',
			price: '',
			tag: [],
			sale: false,
			photo: 'foto.png'
		}
	};

	handleSubmit = async (event) => {
		const { form: credentials } = this.state;
		event.preventDefault();
		console.log(event);
		try {
			const createdAnuncio = await createAnuncio(credentials);
			console.log(createdAnuncio);
		} catch (error) {
			console.log('memandaron al error');
		}
	};

	handleChange = async (event) => {
		console.log(event.target.value);
		this.setState((state) => ({
			form: { ...state.form, [event.target.name]: event.target.value }
		}));
	};

	couldSubmit = () => {
		const { form: { name, price, tags, sale, photo } } = this.state;
		return name && price && tags && sale && photo;
	};

	render() {
		const { form: { name, price, sale, tags, photo } } = this.state;
		return (
			<Layout title='Crea un nuevo anuncio'>
				<div className='form-new-anuncio'>
					<form onSubmit={this.handleSubmit}>
						<AnuncioInput
							className='input-new-anuncio'
							name='name'
							type='text'
							label='Nombre'
							value={name}
							onChange={this.handleChange}
						/>
						<div
							className='radio-input-new-anuncio'
							onChange={this.handleChange}>
							<input type='radio' value={false} name='sale' /> Compra
							<input type='radio' value={true} name='sale' /> Venta
						</div>
						<AnuncioInput
							className='input-new-anuncio'
							name='tags'
							type='text'
							label='Tags'
							value={tags}
							onChange={this.handleChange}
						/>
						<AnuncioInput
							className='input-new-anuncio'
							name='photo'
							type='text'
							label='Foto'
							value={photo}
							onChange={this.handleChange}
						/>
						<AnuncioInput
							className='input-new-anuncio'
							name='price'
							type='number'
							label='precio'
							value={price}
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

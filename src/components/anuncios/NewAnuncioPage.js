import React from 'react';
import Layout from '../layout';
import { AnuncioInput, Button } from '../shared/index';
import { createAnuncio } from '../../API/anuncios';
import FormCheckboxes from '../shared/FormCheckboxes';

class NewAnuncioPage extends React.Component {
	state = {
		form: {
			name: '',
			price: '',
			sale: false,
			photo: 'foto.png',
			tags: []
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
		console.log(event.target);
		const target = event.target;
		const value =

				target.type === 'checkbox' ? target.checked :
				target.value;
		const name = target.name;
		this.setState((state) => ({
			form: { ...state.form, [name]: value }
		}));
	};

	couldSubmit = () => {
		const { form: { name, price, sale, photo } } = this.state;
		return name && price && sale && photo;
	};

	render() {
		const { form: { name, price, sale, photo, tags } } = this.state;
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
						<div className='checkbox-input-new-anuncio'>
							<FormCheckboxes
								name={tags}
								label={tags}
								checked={this.state.tags}
							/>
							{tags}
						</div>
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

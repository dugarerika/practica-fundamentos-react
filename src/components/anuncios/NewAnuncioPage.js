import React from 'react';
import Layout from '../layout';
import { AnuncioInput, Button, FormCheckboxes } from '../shared/index';
import { createAnuncio } from '../../API/anuncios';

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
		const { history } = this.props;
		const { form: credentials } = this.state;
		event.preventDefault();
		console.log(event);

		try {
			const createdAnuncio = await createAnuncio(credentials);
			console.log(createdAnuncio.result._id);
			history.push(`/anuncio/${createdAnuncio.result._id}`);
		} catch (error) {
			console.log('memandaron al error');
		}
	};

	handleCheck = (event) => {
		console.log(event.target);
		const { form: { tags } } = this.state;
		const target = event.target;
		const value = target.value;
		console.log(target.checked);
		if (target.checked) {
			this.setState((state) => ({
				form: { ...state.form, tags: tags.concat(value) }
			}));
		}
		else {
			console.log(tags);
			const id = tags.indexOf(value);
			console.log(id);
			this.setState((state) => ({
				form: { ...state.form, tags: tags.filter((item) => item !== value) }
			}));
		}
		console.log(tags);
	};

	handleChange = async (event) => {
		console.log(event.target);
		const target = event.target;
		const value = target.value;
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
		const { form: { name, price, photo } } = this.state;
		return (
			<Layout title='Crea un nuevo anuncio'>
				<div className='form-new-anuncio'>
					<form onSubmit={this.handleSubmit}>
						<AnuncioInput
							className='input-new-anuncio'
							name='name'
							label='name'
							type='text'
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
							name='photo'
							type='text'
							label='Foto'
							value={photo}
							onChange={this.handleChange}
						/>
						<div>
							<AnuncioInput
								min={0}
								className='input-new-anuncio'
								name='price'
								type='number'
								label='price €  Euro '
								value={price}
								onChange={this.handleChange}
							/>
						</div>

						<div className='checkboxs-new-anuncio '>
							<FormCheckboxes
								className='checkbox-input-new-anuncio'
								name='tags'
								label='tags'
								onChange={this.handleCheck}
							/>
						</div>
						<div id='loweranuncio'>
							<Button
								type='submit'
								className='new-anuncio-button'
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

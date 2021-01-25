import React from 'react';
import { AnuncioInput, Button, FormCheckboxes } from '../shared/index';
import '../anuncios/Filtro.css';

class Filtro extends React.Component {
	state = {
		query: {
			name: '',
			price: '',
			sale: false,
			photo: 'foto.png',
			tags: []
		}
	};

	handleCheck = (event) => {
		console.log(event.target);
		const { query: { tags } } = this.state;
		const target = event.target;
		const value = target.value;
		console.log(target.checked);
		if (target.checked) {
			this.setState((state) => ({
				query: { ...state.form, tags: tags.concat(value) }
			}));
		}
		else {
			console.log(tags);
			const id = tags.indexOf(value);
			console.log(id);
			this.setState((state) => ({
				query: { ...state.form, tags: tags.filter((item) => item !== value) }
			}));
		}
		console.log(tags);
	};

	render() {
		const { query: { name, price, photo } } = this.state;
		return (
			<div>
				<form
					className='container-consultar-anuncio'
					onSubmit={this.handleSubmit}>
					<div className='input-consulta-name'>
						<AnuncioInput
							className='input-new-anuncio'
							name='name'
							label='name'
							type='text'
							value={name}
							onChange={this.handleChange}
						/>
					</div>
					<div className='input-consulta-name'>
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
					<div className='radio-input-new-anuncio' onChange={this.handleChange}>
						<input type='radio' value={false} name='sale' /> Compra
						<input type='radio' value={true} name='sale' /> Venta
					</div>
					<div className='checkboxs-new-anuncio '>
						<FormCheckboxes
							className='checkbox-input-new-anuncio'
							name='tags'
							label='tags'
							onChange={this.handleCheck}
						/>
					</div>

					<div id='lowerconsultaanuncio'>
						<button type='submit' className='consulta-anuncio-button'>
							Crear
						</button>
					</div>
				</form>
			</div>
		);
	}
}

export default Filtro;

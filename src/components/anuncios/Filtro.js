import React from 'react';
import { AnuncioInput, FormCheckboxes } from '../shared/index';
import '../anuncios/Filtro.css';
import 'rc-slider/assets/index.css';
import 'rc-tooltip/assets/bootstrap.css';
import Slider from 'rc-slider';
const createSliderWithTooltip = Slider.createSliderWithTooltip;
const Range = createSliderWithTooltip(Slider.Range);

class Filtro extends React.Component {
	state = {
		query: {
			name: '',
			price: [
				0,
				3000
			],
			sale: false,
			photo: 'foto.png',
			tags: []
		}
	};

	handleSlider = (price) => {
		this.setState({ price });
		console.log(price);
	};

	handleChange = async (event) => {
		console.log(event.target);
		const target = event.target;
		const value = target.value;
		const name = target.name;
		this.setState((state) => ({
			query: { ...state.query, [name]: value }
		}));
	};

	handleCheck = (event) => {
		console.log(event.target);
		const { query: { tags } } = this.state;
		const target = event.target;
		const value = target.value;
		console.log(target.checked);
		if (target.checked) {
			this.setState((state) => ({
				query: { ...state.query, tags: tags.concat(value) }
			}));
		}
		else {
			console.log(tags);
			const id = tags.indexOf(value);
			console.log(id);
			this.setState((state) => ({
				query: { ...state.query, tags: tags.filter((item) => item !== value) }
			}));
		}
		console.log(tags);
	};

	render() {
		const { query: { name, price } } = this.state;
		return (
			<div>
				<form
					className='container-consultar-anuncio'
					onSubmit={this.handleSubmit}>
					Filtrar Anuncios
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
					<div className='radio-input-new-anuncio' onChange={this.handleChange}>
						<input type='radio' value={false} name='sale' /> Compra
						<input type='radio' value={true} name='sale' /> Venta
					</div>
					<div className='input-consulta-price'>
						{price[0]} - {price[1]}
						<Range
							min={0}
							max={10000}
							onChange={this.handleSlider}
							defaultValue={price}
							tipFormatter={(value) => (
								<span className='tooltip'>{value}€</span>
							)}
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
					<div id='lowerconsultaanuncio'>
						<button type='submit' className='consulta-anuncio-button'>
							consultar
						</button>
					</div>
				</form>
			</div>
		);
	}
}

export default Filtro;

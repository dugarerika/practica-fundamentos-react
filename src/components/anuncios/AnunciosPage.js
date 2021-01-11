import React from 'react';

import { getAllAnuncios } from '../../API/anuncios';

// import Anuncio from '../anuncios/Anuncio';

class AnunciosPage extends React.Component {
	state = {
		anuncios: null
	};

	async componentDidMount() {
		// const anuncios = await getAllAnuncios();
		// this.state.anuncios = anuncios.result;
		// console.log(this.state);

		const resp = await getAllAnuncios();
		this.setState({ anuncios: resp.result.rows });
	}

	render() {
		console.log(this.state);
		const { anuncios } = this.state;
		return (
			<div>
				resultado
				<div className='AnunciosPage'>{JSON.stringify(anuncios)}</div>
			</div>
		);
	}
}

export default AnunciosPage;

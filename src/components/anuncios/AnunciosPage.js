import React from 'react';

import { getAnuncios } from '../../API/anuncios';

import Anuncio from '../anuncios/Anuncio';

class AnunciosPage extends React.Component {
	state = {
		anuncio: null
	};

	async componentDidMount() {
		const anuncios = await getAnuncios();
		this.setState({ anuncios });
	}

	render() {
		console.log(this.state);
		const { anuncios } = this.state;
		return (
			anuncios && (
				<ul>
					{anuncios.map((anuncio) => (
						<Anuncio key={anuncio.result.rows._id} anuncio={anuncio} />
					))}
				</ul>
			)
		);
	}
}

export default AnunciosPage;

import React from 'react';

import { getAllAnuncios } from '../../API/anuncios';

import Anuncio from '../anuncios/Anuncio';

// const Anuncio = ({ anuncio }) => <li>{JSON.stringify(anuncio)}</li>;

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
				<div className='AnunciosPage'>
					{anuncios && (
						<ul>
							{anuncios.map((anuncio) => (
								<Anuncio key={anuncio._id} anuncio={anuncio} />
							))}
						</ul>
					)}
				</div>
			</div>
		);
	}
}

export default AnunciosPage;

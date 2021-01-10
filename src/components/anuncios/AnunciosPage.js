import React from 'react';

import { getAnuncios } from '../../API/anuncios';

import Anuncio from '../anuncios/Anuncio';

class AnunciosPage extends React.Component {
	state = {
		anuncios: null
	};

	async componentDidMount() {
		const info = await getAnuncios();
		this.setState({ anuncios: info.rows });
		console.log(info.rows);
	}

	render() {
		console.log(this.state);
		const { anuncios } = this.state;
		return <div>{anuncios}</div>;
	}
}

export default AnunciosPage;

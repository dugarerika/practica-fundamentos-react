import React from 'react';

import { getAllAnuncios } from '../../API/anuncios';

import Anuncio from '../anuncios/Anuncio';
import Layout from '../layout/Layout';
class AnunciosPage extends React.Component {
	state = {
		anuncios: null
	};

	getAnuncios = async () => {
		const resp = await getAllAnuncios();
		this.setState({ anuncios: resp.result.rows });
	};

	async componentDidMount() {
		this.getAnuncios();
	}

	renderContent() {
		const { history } = this.props;
		const { anuncios } = this.state;

		if (!anuncios) {
			return null;
		}

		return anuncios.map((anuncio) => (
			<Anuncio key={anuncio._id} anuncio={anuncio} history={history} />
		));
	}

	render() {
		console.log(this.state);
		return (
			<Layout title='Lista de Anuncios'>
				<div className='AnunciosPage'>{this.renderContent()}</div>
			</Layout>
		);
	}
}

export default AnunciosPage;

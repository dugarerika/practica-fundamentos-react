import React from 'react';

import { getAllAnuncios } from '../../API/anuncios';

import Anuncio from '../anuncios/Anuncio';
import Layout from '../layout/Layout';

// const Anuncio = ({ anuncio }) => <li>{JSON.stringify(anuncio)}</li>;

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
		const { anuncios } = this.state;

		if (!anuncios) {
			return null;
		}

		return anuncios.map((anuncio) => (
			<Anuncio key={anuncio._id} anuncio={anuncio} />
		));
	}

	render() {
		console.log(this.state);

		return (
			<div>
				<Layout title='NodePop'>
					<div className='layout-main'>{this.renderContent()}</div>
				</Layout>
			</div>
		);
	}
}

export default AnunciosPage;

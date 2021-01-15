import React from 'react';
import { Redirect } from 'react-router-dom';
import { getDetalleAnuncio } from '../../API/anuncios';
import Layout from '../layout/Layout';

class AnuncioPage extends React.Component {
	state = {
		anuncio: null,
		error: null
	};

	getDetalle = async () => {
		const { anuncioID } = this.props.match.params;
		getDetalleAnuncio(anuncioID)
			.then((anuncio) => this.setState({ anuncio }))
			.catch((error) => this.setState({ error }));
	};

	componentDidMount() {
		this.getDetalle();
	}

	renderContent() {
		const { anuncio, error } = this.state;
		if (error) {
			return <Redirect to='/404' />;
		}
		if (!anuncio) {
			return null;
		}
		return JSON.stringify(anuncio.result);
	}

	render() {
		return (
			<Layout title='Anuncio Detalle'>
				<div className='AnuncioPage'>{this.renderContent()}</div>
			</Layout>
		);
	}
}

export default AnuncioPage;

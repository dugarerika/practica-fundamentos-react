import React from 'react';
import { Redirect } from 'react-router-dom';
import { deleteDetalleAnuncio, getDetalleAnuncio } from '../../API/anuncios';
import Layout from '../layout/Layout';
import Anuncio from '../anuncios/Anuncio';
import Imagen from '../shared/Imagen';
import './Anuncio.css';
import ConfirmButton from '../shared/ConfirmButton';

class AnuncioPage extends React.Component {
	state = {
		anuncio: null,
		error: null
	};

	deleteDetalle = () => {
		const { history } = this.props;
		const { anuncioID } = this.props.match.params;
		deleteDetalleAnuncio(anuncioID)
			.then(() => history.push('/'))
			.catch((error) => this.setState({ error }));
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
		const { history } = this.props;
		const { anuncio, error } = this.state;
		if (error) {
			return <Redirect to='/404' />;
		}
		if (!anuncio) {
			return null;
		}
		return (
			<div>
				<div className='left'>
					<Imagen src={anuncio.result.foto} />
				</div>
				<Anuncio key={anuncio._id} anuncio={anuncio.result} history={history} />
				<div>
					<ConfirmButton
						name='delete'
						label='Delete'
						question='Esta Seguro?'
						className='ConfirmationButton'
						onClick={this.deleteDetalle}
					/>
				</div>
			</div>
		);
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

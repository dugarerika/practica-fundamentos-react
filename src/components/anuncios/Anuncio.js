import React from 'react';
import T from 'prop-types';

import './Anuncio.css';

const Anuncio = ({ anuncio, history }) => (
	<article
		className='anuncio bordered'
		onClick={() => history.push(`/anuncio/${anuncio._id}`)}>
		<div className='right'>
			<div className='anuncio-cabecera'>
				<span className='anuncio-nombre'>{anuncio.name}</span>
				<span className='anuncio-venta'>{anuncio.sale}</span>
				<span className='anuncio-precio'>{anuncio.price}</span>
				<span className='anuncio-etiquetas'>
					<ul>
						<li>{anuncio.tags[0]}</li>
						<li>{anuncio.tags[1]}</li>
					</ul>
				</span>
				<span className='anuncio-separador' />
			</div>
			<div />
		</div>
	</article>
);

Anuncio.propTypes = {
	anuncio: T.string,
	history: T.shape({ push: T.func.isRequired }).isRequired
};

export default Anuncio;

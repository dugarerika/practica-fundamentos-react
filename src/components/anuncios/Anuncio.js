import React from 'react';
import Imagen from '../shared/Imagen';

import './Anuncio.css';

const Anuncio = ({ anuncio, history }) => (
	<article
		className='anuncio bordered'
		onClick={() => history.push(`/anuncio/${anuncio._id}`)}>
		<div className='left'>
			<Imagen src={anuncio.foto} />
		</div>
		<div className='right'>
			<div className='anuncio-cabecera'>
				<span className='anuncio-nombre'>{anuncio.nombre}</span>
				<span className='anuncio-venta'>{anuncio.venta}</span>
				<span className='anuncio-precio'>{anuncio.precio}</span>
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

export default Anuncio;

import React from 'react';
import './Anuncio.css';
import Imagen from '../shared/Imagen';

import './Anuncio.css';

const Anuncio = ({ anuncio }) => (
	<li className='anuncio bordered'>
		<div className='left'>
			<Imagen src={anuncio.rows.foto} />
		</div>
		<div className='right'>
			<div className='anuncio-cabecera'>
				<span className='anuncio-nombre'>{anuncio.rows.nombre}</span>
				<span className='anuncio-venta'>{anuncio.rows.venta}</span>
				<span className='anuncio-precio'>{anuncio.rows.precio}</span>
				<span className='anuncio-separador' />
			</div>
			<div />
		</div>
	</li>
);

export default Anuncio;

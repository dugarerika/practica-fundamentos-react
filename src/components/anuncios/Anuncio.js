import React from 'react';
import Imagen from '../shared/Imagen';

import './Anuncio.css';

const Anuncio = ({ anuncio }) => (
	<article className='anuncio bordered'>
		<div className='left'>
			<Imagen src={anuncio.photo} />
		</div>
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

export default Anuncio;

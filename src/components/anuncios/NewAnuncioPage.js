import React from 'react';
import Layout from '../layout';
import { AnuncioInput, Button, Photo } from '../shared/index';

class NewAnuncioPage extends React.Component {
	render() {
		// const { form: { nombre, compraventa, tags, precio } = this.state };
		return (
			<Layout title='Crea un nuevo anuncio'>
				<div>
					<form className='form-new-anuncio'>
						<AnuncioInput
							className='input-new-anuncio'
							name='nombre'
							type='text'
							label='Nombre'
							// value={nombre}
						/>
						<AnuncioInput
							className='input-new-anuncio'
							name='compra-venta'
							type='text'
							label='Compra/Venta'
							// value={compraventa}
						/>
						<AnuncioInput
							className='input-new-anuncio'
							name='tags'
							type='text'
							label='tags'
							// value={tags}
						/>
						<AnuncioInput
							className='input-new-anuncio'
							name='precio'
							type='text'
							label='precio'
							// value={precio}
						/>
						<div id='loweranuncio'>
							<Button type='submit' className='loginPage-button' Log In />
						</div>
					</form>
				</div>
			</Layout>
		);
	}
}

export default NewAnuncioPage;

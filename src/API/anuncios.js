import cliente from './cliente';

const anuncioBaseUrl = '/apiv1';

export const getAnuncios = () => {
	const url = `${anuncioBaseUrl}/anuncios`;
	return cliente.get(url);
};

import client from './client';

const anuncioBaseUrl = '/apiv1';

export const getAnuncios = () => {
	const url = `${anuncioBaseUrl}/anuncios`;
	return client.get(url);
};

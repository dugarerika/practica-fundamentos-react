import client from './client';

const anuncioBaseUrl = '/apiv1';

export const getAnuncios = () => {
	const url = `${anuncioBaseUrl}/adverts`;
	return client.get(url);
};

import client from './client';

const anuncioBaseUrl = '/apiv1';

export const getAllAnuncios = () => {
	const url = `${anuncioBaseUrl}/adverts`;
	return client.get(url);
};

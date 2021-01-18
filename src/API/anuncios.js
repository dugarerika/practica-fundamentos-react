import client from './client';

const anuncioBaseUrl = '/apiv1';

export const getAllAnuncios = () => {
	const url = `${anuncioBaseUrl}/adverts`;
	return client.get(url);
};

export const getDetalleAnuncio = (anuncioID) => {
	const url = `${anuncioBaseUrl}/adverts/${anuncioID}`;
	return client.get(url);
};

export const createAnuncio = (anuncio) => {
	const url = `${anuncioBaseUrl}/adverts`;
	return client.post(url, anuncio);
};

import client from './client';

const anuncioBaseUrl = '/apiv1';

export const getAllAnuncios = () => {
	const url = `${anuncioBaseUrl}/adverts`;
	return client.get(url);
};

// export const getAllAnuncios = () => {
// 	const url = `${anuncioBaseUrl}/adverts`;
// 	client.get(url).then((response) => {
// 		console.log(response.data);
// 		return response.data;
// 	});
// };

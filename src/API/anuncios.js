import cliente from './cliente';

export const getAnuncios = () => {
	const url = `/apiv1/anuncios`;
	return cliente.get(url);
};

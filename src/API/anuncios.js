import cliente from './cliente';

export const getAnuncios = () => {
	const url = `/anuncios`;
	return cliente.get(url);
};

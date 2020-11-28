import cliente from './cliente';

export const getAnuncios = () => {
  const url = `/`;
  return cliente.get(url);
};
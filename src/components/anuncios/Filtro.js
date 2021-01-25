import React from 'react';

class Filtro extends React.Component {
	state = {
		query: null,
		results: null,
		loading: false,
		message: ''
	};

	render() {
		return (
			<div className='container'>
				<h1>Filtros</h1>
			</div>
		);
	}
}

export default Filtro;

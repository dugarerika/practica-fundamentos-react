import React from 'react';

class NewAnuncioPage extends React.Component {
	componentDidMount() {}

	render() {
		const { history, loggerdUser } = this.props;
		if (loggerdUser) {
			return;
		}
		return 'Nueva Pagina de Anuncios';
	}
}

export default NewAnuncioPage;

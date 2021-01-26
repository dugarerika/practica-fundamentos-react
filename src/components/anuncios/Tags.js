import React from 'react';
import { FormCheckboxes } from '../shared/index';

class Tags extends React.Component {
	render() {
		return (
			<div className='checkboxs-consulta-anuncio'>
				<FormCheckboxes
					type='text'
					className='checkbox-input-new-anuncio'
					name='tags'
					label='tags'
					onChange={this.handleCheck}
				/>
			</div>
		);
	}
}

export default Tags;

import React from 'react';
import T, { checkPropTypes } from 'prop-types';
import './FormInput.css';

class FormCheckboxes extends React.Component {
	state = {
		info: true
	};

	handleChange = (event) => {
		console.log(event.target.name);
		const target = event.target;
		const value = target.checked;
		const name = target.name;
		this.setState({ [name]: value });
		console.log(value);
		console.log(name);
	};

	render() {
		const { label } = this.props;

		return (
			<div>
				<label>
					<input
						name='info'
						type='checkbox'
						checked={this.state.info}
						onChange={this.handleChange}
					/>
					{label}
				</label>
			</div>
		);
	}
}

FormCheckboxes.propTypes = {
	className: T.string,
	name: T.string.isRequired,
	checked: T.bool
};

export default FormCheckboxes;

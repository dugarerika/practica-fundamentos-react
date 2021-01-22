import React from 'react';

class FormCheckboxes extends React.Component {
	state = {
		infoTags: [
			{ id: 1, value: 'PHP' },
			{ id: 2, value: 'Laravel' },
			{ id: 3, value: 'Angular' },
			{ id: 4, value: 'React' }
		]
	};

	render() {
		const { label, value, name, type, ...props } = this.props;
		const { infoTags } = this.state;
		return (
			<div>
				{infoTags.map((item) => (
					<label>
						s
						<input
							{...props}
							type='checkbox'
							name='tags'
							label={item.value}
							value={item.value}
						/>
						{item.value}
					</label>
				))}
			</div>
		);
	}
}

export default FormCheckboxes;

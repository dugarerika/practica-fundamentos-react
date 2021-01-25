import React from 'react';
import Button from '../shared/Button';

class ConfirmButton extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			label: props.label || 'Unlabelled',
			question: props.question || 'Confirm?',
			confirmed: false,
			className:
				props.className ? 'btn ' + props.className :
				'btn'
		};
	}
	render() {
		return (
			<div>
				{(this.state.confirmed !== true && (
					<Button
						type='button'
						className={this.state.className}
						onClick={() => {
							this.setState({ confirmed: true });
						}}>
						{this.state.label}
					</Button>
				)) || (
					<div>
						<span className='mr-3'>{this.state.question}</span>
						<Button
							name={this.props.name}
							type='button'
							className='ConfirmationButton'
							onClick={(event) => {
								this.props.onClick(event);
								this.setState({ confirmed: false });
							}}>
							Yes
						</Button>
						<Button
							type='button'
							className='ConfirmationButton'
							onClick={() => {
								this.setState({ confirmed: false });
							}}>
							No
						</Button>
					</div>
				)}
			</div>
		);
	}
}

export default ConfirmButton;

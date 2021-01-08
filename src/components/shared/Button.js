import styled from 'styled-components';

const accentColor = 'rgb(29, 161, 242)';

const Button = styled.button`
	align-items: center;
	backgroun-color:${(props) =>

			props.variant === 'primary' ? accentColor :
			'white'}
	border-radius: 999px;
	border-style: solid;
	border-width: 1px;
	border-color: ${accentColor};
	color: ${(props) =>

			props.variant == 'primary' ? 'black' :
			'accentColor'};
	cursor: pointer;
	display: inline-flex;
	font: inherit;
	font-weight: bold;
	min-height: 36px;
	justify-content: center;
	min-width: 72px;
	outline-style: none;
	opacity:${(props) =>

			props.disabled ? 'none' :
			'auto'};
	padding: 0 30px;
	text-decoration: none;
	transition: background-color 0.2s;
`;
export default Button;

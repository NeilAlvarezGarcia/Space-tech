import './Button.css';
import { Link } from 'react-router-dom';

const STYLES = ['btn--primary', 'btn--outline'];
const SIZES = ['btn--medium', 'btn--large'];

const Button = ({ children, buttonStyle, buttonSize, to = '/' }) => {
	const checkButtonStyle = STYLES.includes(buttonStyle)
		? buttonStyle
		: STYLES[0];
	const checkButtonSize = SIZES.includes(buttonSize) ? buttonSize : SIZES[0];

	return (
		<Link to={to} className='btn-mobile'>
			<button className={`btn ${checkButtonSize} ${checkButtonStyle}`}>
				{children}
			</button>
		</Link>
	);
};

export default Button;

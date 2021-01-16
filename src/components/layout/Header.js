import React from 'react';
import classNames from 'classnames';
import './Header.css';
import { Link } from 'react-router-dom';
import Button from '../shared/Button';
import { ReactComponent as Icon } from '../images/shopping-cart.svg';

const Header = ({ className, isLogged, onLogout, ...props }) => (
	<header className={classNames('header', className)} {...props}>
		<div className='header-logo'>{<Icon width='32' height='32' />}</div>
		<nav className='header-nav'>
			<Button
				as={Link}
				to='/anuncio'
				variant='primary'
				className='header-button'>
				Anuncio
			</Button>
			{
				isLogged ? <Button as={Link} className='header-button'>
					Logout
				</Button> :
				<Button as={Link} to='/login' className='header-button'>
					Login
				</Button>}
		</nav>
	</header>
);
export default Header;

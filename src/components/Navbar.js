import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Button from './Button';
import styled from 'styled-components';

function Navbar() {
	const [click, setClick] = useState(false);
	const [button, setButton] = useState(null);

	const handleClick = () => setClick(!click);
	const closeMobileMenu = () => setClick(false);

	const showButton = () => {
		if (window.innerWidth <= 960) {
			setButton(false);
		} else {
			setButton(true);
		}
	};

	useEffect(() => {
		showButton();
	}, []);

	window.addEventListener('resize', showButton);

	return (
		<>
			<NavbarComponent>
				<div className='navbar-container'>
					<Link
						to='/'
						className='navbar-logo'
						onClick={closeMobileMenu}
					>
						SpaceTECH <i className='fab fa-typo3' />
					</Link>
					<div className='menu-icon' onClick={handleClick}>
						<i className={click ? 'fas fa-times' : 'fas fa-bars'} />
					</div>
					<ul className={click ? 'nav-menu active' : 'nav-menu'}>
						<li className='nav-item'>
							<Link
								to='/'
								className='nav-links'
								onClick={closeMobileMenu}
							>
								Home
							</Link>
						</li>
						<li className='nav-item'>
							<Link
								to='/contact'
								className='nav-links'
								onClick={closeMobileMenu}
							>
								Contact Us
							</Link>
						</li>
						<li className='nav-item'>
							<Link
								to='/about-us'
								className='nav-links'
								onClick={closeMobileMenu}
							>
								About Us
							</Link>
						</li>
						<li className='nav-item'>
							<Link
								to='/covid'
								className='nav-links-mobile'
								onClick={closeMobileMenu}
							>
								Covid
							</Link>
						</li>
					</ul>

					{button && (
						<Button buttonStyle='btn-outline' to='/covid'>
							Covid
						</Button>
					)}
				</div>
			</NavbarComponent>
		</>
	);
}

const NavbarComponent = styled.nav`
	background: linear-gradient(
		90deg,
		rgb(28, 27, 27) 0%,
		rgb(26, 23, 23) 100%
	);
	height: 80px;
	width: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
	font-size: 1.2rem;
	position: sticky;
	top: 0;
	z-index: 999;

	.navbar-container {
		display: flex;
		justify-content: center;
		align-items: center;
		height: 100%;
		max-width: 1500px;
	}

	.navbar-logo {
		color: #fff;
		cursor: pointer;
		text-decoration: none;
		font-size: 2rem;
		display: flex;
		align-items: center;
	}

	.fa-typo3 {
		margin-left: 0.5rem;
		font-size: 1.8rem;
	}

	.nav-menu {
		display: flex;
		gap: 10px;
		list-style: none;
		text-align: center;
		width: 60vw;
		justify-content: end;
	}

	.nav-item {
		height: 100%;
	}

	.nav-links {
		color: #fff;
		text-decoration: none;
		padding: 1.44rem 1rem;
		border-bottom: 4px solid transparent;
	}

	.nav-links:hover {
		border-bottom: 4px solid #fff;
		transition: all 0.2s ease-out;
	}

	.fa-bars {
		color: #fff;
	}

	.nav-links-mobile {
		display: none;
	}

	.menu-icon {
		display: none;
	}

	@media (max-width: 960px) {
		.nav-menu {
			flex-direction: column;
			width: 100%;
			height: 90vh;
			position: absolute;
			top: 80px;
			left: -100%;
			transition: all 0.5s ease;
		}

		.nav-menu.active {
			background: #242222;
			left: 0;
			z-index: 1;
		}

		.nav-links {
			text-align: center;
			padding: 2rem;
			width: 100%;
			display: table;
		}

		.nav-links:hover {
			background-color: #fff;
			color: #242424;
			border-radius: 0;
		}

		.navbar-logo {
			position: absolute;
			top: 0;
			left: 0;
			transform: translate(25%, 50%);
		}

		.menu-icon {
			display: block;
			position: absolute;
			top: 0;
			right: 0;
			transform: translate(-100%, 60%);
			font-size: 1.8rem;
			cursor: pointer;
		}

		.fa-times {
			color: #fff;
			font-size: 2rem;
		}

		.nav-links-mobile {
			display: block;
			text-align: center;
			margin: 2rem auto;
			border-radius: 4px;
			width: 80%;
			text-decoration: none;
			font-size: 1.5rem;
			background-color: transparent;
			color: #fff;
			padding: 14px 20px;
			border: 1px solid #fff;
			transition: all 0.3s ease-out;
		}

		.nav-links-mobile:hover {
			background: #fff;
			color: #242424;
			transition: 250ms;
		}
	}
`;

export { Navbar };

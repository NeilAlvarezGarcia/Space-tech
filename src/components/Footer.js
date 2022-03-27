import Button from './Button';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Footer = () => {
	return (
		<FooterContainer>
			<section className='footer-subscription'>
				<p className='footer-subcription-heading'>
					Lorem ipsum dolor sit amet consectetur adipisicing elit.
					Harum, libero.
				</p>
				<p className='footer-subscription-text'>
					Lorem ipsum dolor sit amet.
				</p>
				<div className='input-areas'>
					<form>
						<input
							type='email'
							name='email'
							placeholder='Type your email'
							className='footer-input'
						/>
						<Button buttonStyle='btn-outline'>Notify me</Button>
					</form>
				</div>
			</section>
			<div className='footer-links'>
				<div className='footer-link-wrapper'>
					<div className='footer-link-items'>
						<h2>About Us</h2>
						<Link to='/'>How it works</Link>
						<Link to='/'>Testimonials</Link>
						<Link to='/'>Careers</Link>
						<Link to='/'>Investors</Link>
						<Link to='/'>Terms of Service</Link>
					</div>
					<div className='footer-link-items'>
						<h2>Contact Us</h2>
						<Link to='/'>Contact</Link>
						<Link to='/'>Support</Link>
						<Link to='/'>Destinations</Link>
						<Link to='/'>Sponsorships</Link>
					</div>
				</div>
				<div className='footer-link-wrapper'>
					<div className='footer-link-items'>
						<h2>Videos</h2>
						<Link to='/'>Submit Video</Link>
						<Link to='/'>Ambassadors</Link>
						<Link to='/'>Agency</Link>
						<Link to='/'>Influencer</Link>
					</div>
					<div className='footer-link-items'>
						<h2>Social Media</h2>
						<Link to='/'>Instagram</Link>
						<Link to='/'>Facebook</Link>
						<Link to='/'>Youtube</Link>
						<Link to='/'>Twitter</Link>
					</div>
				</div>
			</div>
			<section className='social-media'>
				<div className='social-media-wrap'>
					<div className='footer-logo'>
						<Link to='/' className='social-logo'>
							SpaceTECH <i className='fab fa-typo3' />
						</Link>
					</div>
					<small className='website-rights'>
						SpaceTECH &copy; {new Date().getFullYear()}
					</small>
					<div className='social-icons'>
						<Link
							to='/'
							className='social-icon-link facebook'
							aria-label='Facebook'
						>
							<i className='fab fa-facebook-f' />
						</Link>
						<Link
							to='/'
							className='social-icon-link instagram'
							aria-label='Instagram'
						>
							<i className='fab fa-instagram' />
						</Link>
						<Link
							className='social-icon-link youtube'
							to='/'
							aria-label='Youtube'
						>
							<i className='fab fa-youtube' />
						</Link>
						<Link
							className='social-icon-link twitter'
							to='/'
							aria-label='Twitter'
						>
							<i className='fab fa-twitter' />
						</Link>
						<Link
							className='social-icon-link twitter'
							to='/'
							aria-label='LinkedIn'
						>
							<i className='fab fa-linkedin' />
						</Link>
					</div>
				</div>
			</section>
		</FooterContainer>
	);
};

const FooterContainer = styled.div`
	background-color: #242424;
	padding: 4rem 0 2rem 0;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;

	.footer-subscription {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		text-align: center;

		margin-bottom: 24px;
		padding: 24px;
		color: #fff;
		font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande',
			'Lucida Sans', Arial, sans-serif;
	}

	.footer-subscription-heading {
		margin-bottom: 24px;
		font-size: 24px;
	}

	.footer-subscription-text {
		margin-bottom: 24px;
		font-size: 20px;
	}

	.footer-input {
		padding: 8px 20px;
		border-radius: 2px;
		margin-right: 10px;
		outline: none;
		border: none;
		font-size: 18px;
		margin-bottom: 16px;
		border: 1px solid #fff;
	}

	.footer-links {
		width: 100%;
		max-width: 1000px;
		display: flex;
		justify-content: center;
		align-items: flex-start;
	}

	.footer-link-wrapper {
		display: flex;
		align-items: flex-start;
		gap: 2rem;
	}

	.footer-link-items {
		display: flex;
		flex-direction: column;
		align-items: center;
		margin: 16px;
		width: 160px;
		color: #fff;
	}

	.footer-link-items h2 {
		margin-bottom: 16px;
	}

	.footer-link-items a {
		color: #fff;
		text-decoration: none;
		margin-bottom: 0.5rem;
	}

	.footer-link-items a:hover {
		color: #e9e9e9;
		transition: 0.3s ease-out;
	}

	.footer-email-form h2 {
		margin-bottom: 2rem;
	}

	.footer-input::placeholder {
		color: #b1b1b1;
	}

	/* Social Icons */
	.social-icon-link {
		color: #fff;
		font-size: 24px;
		transition: ease all 0.3s;
	}
	.social-icon-link:hover {
		transform: scale(1.3);
	}

	.social-media {
		max-width: 1000px;
		width: 100%;
	}

	.social-media-wrap {
		display: flex;
		justify-content: space-between;
		align-items: center;
		width: 90%;
		max-width: 1000px;
		margin: 40px auto 0 auto;
	}

	.social-icons {
		display: flex;
		justify-content: space-between;
		align-items: center;
		width: 240px;
	}

	.social-logo {
		color: #fff;
		justify-self: start;
		margin-left: 20px;
		cursor: pointer;
		text-decoration: none;
		font-size: 2rem;
		display: flex;
		align-items: center;
		margin-bottom: 16px;
	}

	.website-rights {
		color: #fff;
		margin-bottom: 16px;
	}

	@media screen and (max-width: 820px) {
		.footer-links {
			padding: 2rem;
		}

		.footer-input {
			width: 100%;
		}

		.btn {
			width: 100%;
		}
		.footer-link-wrapper {
			width: 100%;
			gap: 0;
			flex-direction: column;
		}
		.social-media-wrap {
			flex-direction: column;
		}
	}
`;

export { Footer };

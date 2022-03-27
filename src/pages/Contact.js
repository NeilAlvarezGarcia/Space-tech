import styled from 'styled-components';
import { HeroContainer, ContentPageContainer } from '../components';
import bgImage from '../images/contact.jpg';
import email from '../images/email.svg';

const Contact = () => (
	<>
		<HeroContainer img={bgImage}>
			<div className='center'>
				<h1>CONTACT US</h1>
				<p>Where so please to help you</p>
			</div>
		</HeroContainer>

		<ContentPageContainer>
			<h2>Send us an email</h2>

			<ContainerFlex>
				<div className='left'>
					<img src={email} alt='' />
				</div>
				<div className='right'>
					<p>
						Fill the form and we will send you an answer back soon
						enought.
					</p>

					<form action=''>
						<div className='group'>
							<label htmlFor=''>Name:</label>
							<input type='text' />
						</div>
						<div className='group'>
							<label htmlFor=''>Email:</label>
							<input type='email' />
						</div>
						<div className='group'>
							<label htmlFor=''>Asunt:</label>
							<input type='text' />
						</div>
						<div className='group description'>
							<label htmlFor=''>Description:</label>
							<textarea
								name=''
								id=''
								cols='20'
								rows='5'
							></textarea>
						</div>
					</form>
					<div className='button'>
						<button>Send Email</button>
					</div>
				</div>
			</ContainerFlex>
		</ContentPageContainer>
	</>
);

const ContainerFlex = styled.div`
	display: flex;

	.left {
		flex: 1;
		img {
			max-width: 100%;
		}
	}

	.right {
		flex: 1;

		p {
			margin-bottom: 1rem;
			color: rgba(0, 0, 0, 0.7);
			font-size: 1.4rem;
			text-align: center;
		}

		form {
			width: 80%;
			margin: 0 auto;
			display: flex;
			flex-direction: column;
			gap: 1rem;
		}
		.group {
			box-shadow: 0 0 5px rgba(0, 0, 0, 0.6);
			border-radius: 0.5rem;
			height: 3rem;
			display: flex;
			align-items: center;

			label {
				height: 100%;
				display: flex;
				align-items: center;
				padding-left: 1.5rem;
				padding-right: 0.5rem;
			}
			input,
			textarea {
				resize: none;
				border: none;
				color: rgba(0, 0, 0, 0.5);
				outline: none;
				font-size: 1.5rem;
				height: 100%;
				width: 80%;
			}
		}
		.description {
			box-shadow: 0 0 5px rgba(0, 0, 0, 0.6);
			border-radius: 0.5rem;
			height: 8rem;
			display: flex;
			align-items: flex-start;
			flex-direction: column;

			label {
				height: 50%;
			}

			textarea {
				padding: 0 1.5rem;
				margin-bottom: 0.5rem;
				width: 100%;
			}
		}

		.button {
			display: flex;
			justify-content: flex-end;
			margin: 2rem 2rem 0 0;

			button {
				outline: none;
				background-color: transparent;
				border: thin solid #000;
				padding: 0.5rem 1.5rem;
				border-radius: 0.3rem;
				cursor: pointer;
				font-size: 1rem;
				transition: all 0.3s ease;

				&:hover {
					background-color: #000;
					color: #fff;
				}
			}
		}
	}

	@media (max-width: 820px) {
		flex-direction: column;

		.right {
			p {
				font-size: 1.3rem;
			}
			margin-top: 2rem;
			form {
				width: 100%;
			}
		}
	}
`;

export { Contact };

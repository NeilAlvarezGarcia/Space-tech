import styled from 'styled-components';

export const HeroContainer = styled.div`
	background: url(${(prop) => prop.img}) center center/cover no-repeat;
	background-attachment: fixed;
	height: 90vh;
	width: 100%;
	display: flex;
	align-items: center;
	justify-content: center;
	box-shadow: inset 0 0 0 1000px rgba(0, 0, 0, 0.2);
	color: #fff;
	text-align: center;

	.center {
		display: flex;
		flex-direction: column;
		align-items: center;
		width: min(90%, 50rem);
	}

	h1 {
		font-size: 4rem;
	}

	p {
		margin-top: 8px;
		font-size: 32px;
		font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande',
			'Lucida Sans', Arial, sans-serif;
	}
	.hero-btns {
		margin-top: 2.5rem;
		display: flex;
		gap: 1rem;
	}

	.fa-play-circle {
		margin-left: 6px;
	}

	@media (max-width: 960px) {
		h1 {
			font-size: 3rem;
		}
	}
	@media (max-width: 530px) {
		h1 {
			font-size: 2.5rem;
		}
		p {
			font-size: 1.5rem;
		}
		.hero-btns {
			display: block;
			width: 100%;
		}
		.btn {
			margin: 0.5rem 0;
		}
	}
`;

export const ContentPageContainer = styled.div`
	padding: 3rem 4rem;
	background: #fff;

	h2 {
		font-size: 2.2rem;
		margin-bottom: 2rem;
		text-align: center;
		text-transform: capitalize;
	}

	@media (max-width: 500px) {
		h2 {
			font-size: 1.8rem;
		}
	}
`;

export const GridContainer = styled.div`
	display: grid;
	grid-template-columns: repeat(4, 1fr);
	gap: 2.5rem 1.5rem;

	@media (max-width: 1100px) {
		grid-template-columns: repeat(3, 1fr);
	}
	@media (max-width: 840px) {
		grid-template-columns: repeat(2, 1fr);
	}
	@media (max-width: 568px) {
		grid-template-columns: 1fr;
	}
`;

import styled from 'styled-components';
import { HeroContainer, ContentPageContainer } from '../components';
import bgImage from '../images/aboutUs.jpg';
import banner1 from '../images/banner1.jpg';
import banner2 from '../images/banner2.jpg';

const AboutUs = () => (
	<>
		<HeroContainer img={bgImage}>
			<div className='center'>
				<h1>ABOUT US</h1>
				<p>Our team grow for humanity future.</p>
			</div>
		</HeroContainer>
		<ContentPageContainer>
			<h2>Our team is conformed by the best</h2>

			<div className='container'>
				<ContainerFlex>
					<div className='text'>
						<h3>Who whe are</h3>

						<p>
							Lorem, ipsum dolor sit amet consectetur adipisicing
							elit. Doloribus doloremque nihil culpa itaque fugit
							quam nemo voluptas magni hic, blanditiis magnam
							cumque modi. Deleniti eaque saepe placeat. Culpa, id
							voluptatum. Alias quas, quisquam eos architecto
							praesentium odio soluta porro possimus non
							necessitatibus illo ducimus unde. Veritatis esse
							tenetur rem! Vitae, labore? Velit est magni
							consectetur iure unde culpa ea rem?
						</p>
					</div>

					<div className='image-container'>
						<img src={banner1} alt='' />
					</div>
				</ContainerFlex>
			</div>

			<div className='container'>
				<ContainerFlex>
					<div className='image-container'>
						<img src={banner2} alt='' />
					</div>
					<div className='text'>
						<h3>Our history</h3>
						<p>
							Lorem, ipsum dolor sit amet consectetur adipisicing
							elit. Doloribus doloremque nihil culpa itaque fugit
							quam nemo voluptas magni hic, blanditiis magnam
							cumque modi. Deleniti eaque saepe placeat. Culpa, id
							voluptatum. Alias quas, quisquam eos architecto
							praesentium odio soluta porro possimus non
							necessitatibus illo ducimus unde. Veritatis esse
							tenetur rem! Vitae, labore? Velit est magni
							consectetur iure unde culpa ea rem?
						</p>
					</div>
				</ContainerFlex>
			</div>
		</ContentPageContainer>
	</>
);

const ContainerFlex = styled.div`
	display: flex;
	padding: 1rem 0;
	gap: 2rem;

	.image-container,
	.text {
		flex: 1;
	}

	img {
		max-width: 100%;
	}
	h3 {
		font-size: 1.8rem;
		color: rgba(0, 0, 0, 0.7);
		margin-bottom: 2rem;
	}
	p {
		color: rgba(0, 0, 0, 0.5);
		font-size: 1.2rem;
		line-height: 2;
	}

	@media (max-width: 820px) {
		flex-direction: column;
	}
`;

export { AboutUs };

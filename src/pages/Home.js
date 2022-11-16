import Button from '../components/Button';
import {
	HeroContainer,
	ContentPageContainer,
	GridContainer,
	CardItem,
} from '../components';
import bgImage from '../images/img-home.jpg';
import { useQuery } from '@apollo/react-hooks';
import { get_Launchs } from '../graphql/Queries';

const Home = () => {
	const { loading, error, data } = useQuery(get_Launchs);

	return (
		<>
			<HeroContainer img={bgImage}>
				<div className='center'>
					<h1>SPACE LAUNCHES</h1>
					<p>Let´s explore the stars together.</p>
					<div className='hero-btns'>
						<Button
							buttonStyle='btn--outline'
							buttonSize='btn--large'
						>
							GET STARTED
						</Button>
						<Button
							buttonStyle='btn--primary'
							buttonSize='btn--large'
						>
							CONTACT US <i className='far fa-play-circle' />
						</Button>
					</div>
				</div>
			</HeroContainer>

			<ContentPageContainer>
				<h2>Check out the last launches</h2>

				<GridContainer>
					{!loading &&
						!error &&
						data.launchesPast.map((launche) => (
							<CardItem key={launche.id} launche={launche} />
						))}
					{error && (
						<p
							style={{
								textAlign: 'center',
								fontSize: '1.5rem',
								color: 'rgba(0, 0, 0, .6)',
							}}
						>
							Somwthing went wrong. We couldn´t fetch the data.
						</p>
					)}
				</GridContainer>
			</ContentPageContainer>
		</>
	);
};

export { Home };

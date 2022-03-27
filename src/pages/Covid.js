import {
	HeroContainer,
	ContentPageContainer,
	Advices,
	CovidContent,
} from '../components';
import bgImage from '../images/covid.jpg';

const Covid = () => (
	<>
		<HeroContainer img={bgImage}>
			<div className='center'>
				<h1>COVID-19</h1>
				<p>Together we can protect each other.</p>
			</div>
		</HeroContainer>
		<ContentPageContainer>
			<h2>Last status of the covid-19</h2>

			<CovidContent />
			<Advices />
		</ContentPageContainer>
	</>
);

export { Covid };

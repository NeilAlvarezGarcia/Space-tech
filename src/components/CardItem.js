import styled from 'styled-components';

const CardItem = ({ launche }) => {
	const {
		launch_date_local,
		launch_site: { site_name_long },
		links: { wikipedia },
		mission_name,
		rocket,
	} = launche;
	const {
		rocket_name,
		second_stage: { payloads },
	} = rocket;
	const [{ payload_mass_kg, payload_type }] = payloads;

	return (
		<>
			<CardContainer>
				<a
					href={wikipedia}
					target='_blank'
					rel='noreferrer'
					className='cards_item_link'
				>
					<div className='header'>
						<h3>{mission_name}</h3>
					</div>
					<div className='body'>
						<p>
							Launche Date: <span>{launch_date_local}</span>
						</p>
						<p>
							Launche Place: <span>{site_name_long}</span>
						</p>
						<p>
							Rocket: <span>{rocket_name}</span>
						</p>
						<p>
							Payload Type: <span>{payload_type}</span>
						</p>
						<p>
							Payload Charge: <span>{payload_mass_kg}Kg</span>
						</p>
					</div>
				</a>
			</CardContainer>
		</>
	);
};

const CardContainer = styled.div`
	border-radius: 0.5rem;
	overflow: hidden;
	transition: all ease 0.3s;

	&:hover {
		transform: scale(1.05);
	}

	a {
		text-decoration: none;
	}

	.header {
		background-color: #000;
		color: #fff;
		height: 10rem;
		display: flex;
		align-items: center;
		justify-content: center;
		text-align: center;
		padding: 2rem;
	}
	.body {
		background-color: #f2f2f2;
		padding: 1rem;

		p {
			color: rgba(0, 0, 0, 0.8);
			&:not(:last-of-type) {
				margin-bottom: 0.5rem;
			}

			span {
				color: rgba(0, 0, 0, 0.5);
			}
		}
	}
`;

export { CardItem };

import React, { useState } from 'react';
import styled from 'styled-components';

export const CovidContent = () => {
	const [global] = useState({
		Active: '37,808.810',
		NewConfirmed: '508.235',
		NewDeaths: '8.135',
		NewRecovered: '242.469',
		Last_Update: '2021-01-09 09:05:59 +00:00',
	});

	const date = () => {
		const [lastDateArray] = global.Last_Update.split(' ');
		const [year, day, month] = lastDateArray.split('-');

		return `${day} ${month} ${year}`;
	};

	return (
		<DataStatus>
			<div className='global'>
				<h3>Last update by {date()}</h3>

				<div className='global-content'>
					<div className='content'>
						<h4 className='red'>Deaths</h4>
						<p>{global.NewDeaths}</p>
					</div>
					<div className='content'>
						<h4 className='red'>Actives</h4>
						<p>{global.Active}</p>
					</div>
					<div className='content'>
						<h4 className='yellow'>Confirmed</h4>
						<p>{global.NewConfirmed}</p>
					</div>
					<div className='content'>
						<h4 className='green'>Recovered</h4>
						<p>{global.NewRecovered}</p>
					</div>
				</div>
			</div>
		</DataStatus>
	);
};

const DataStatus = styled.div`
	text-align: center;

	.global-content {
		display: grid;
		grid-template-columns: repeat(4, 1fr);
		gap: 2rem;
		place-items: center;
		padding: 2rem 0;

		.red {
			color: #e11a1a;
		}
		.green {
			color: #3ed21a;
		}
		.yellow {
			color: #d2cf1a;
		}

		.content {
			h4 {
				font-size: 1.6rem;
			}
			p {
				font-size: 2.5rem;
				color: rgba(0, 0, 0, 0.6);
			}
		}
		@media (max-width: 950px) {
			grid-template-columns: 1fr 1fr;
		}
		@media (max-width: 480px) {
			grid-template-columns: 1fr;
		}
	}
`;

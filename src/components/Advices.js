import React from 'react';
import styled from 'styled-components';

export const Advices = () => (
	<AdvicesContainer>
		<h3>Together we can save our lives. Remeber always:</h3>

		<div className='advices-content'>
			<div className='advice'>
				<h4>Remeber always to keep a distance from others.</h4>
				<p>
					Lorem ipsum dolor sit amet, consectetur adipisicing elit.
					Sunt ab libero tenetur nisi maiores reiciendis cum, ex
					excepturi quaerat quod totam alias autem ea? Dolor qui a
					unde molestiae ipsa.
				</p>
			</div>
			<div className='advice'>
				<h4>Always wash your hands and wear a mask.</h4>
				<p>
					Lorem ipsum dolor sit amet consectetur adipisicing elit.
					Numquam reprehenderit repellendus beatae, tenetur, impedit
					dolorum itaque voluptas placeat officiis possimus fuga.
					Magnam distinctio consectetur tempore suscipit assumenda.
					Sed, deleniti illo?
				</p>
			</div>
			<div className='advice'>
				<h4>Try to stay at home.</h4>
				<p>
					Lorem ipsum dolor sit amet consectetur adipisicing elit.
					Error, sequi fugiat officia dolor in debitis minima dolore
					explicabo quaerat voluptatum cum alias, illum aut, expedita
					maxime. Repudiandae beatae quisquam doloremque.
				</p>
			</div>
		</div>
	</AdvicesContainer>
);

const AdvicesContainer = styled.div`
	padding: 2rem 0;
	text-align: center;

	.advices-content {
		display: grid;
		grid-template-columns: repeat(3, 1fr);
		gap: 2rem;
		margin-top: 2rem;

		.advice {
			border-radius: 1rem;
			box-shadow: 0 0 5px rgba(0, 0, 0, 0.3);
			padding: 2rem;
			transition: all ease 0.3s;
			&:hover {
				box-shadow: 0 0 5px rgba(0, 0, 0, 0.7);
			}

			h4 {
				background-color: #e6effd;
				padding: 1rem;
				margin-bottom: 1rem;
				border-radius: 2rem;
				color: #36c;
			}
			p {
				color: rgba(0, 0, 0, 0.5);
				line-height: 1.5;
			}
		}

		@media (max-width: 900px) {
			grid-template-columns: repeat(2, 1fr);
		}
		@media (max-width: 600px) {
			grid-template-columns: 1fr;
		}
	}
`;

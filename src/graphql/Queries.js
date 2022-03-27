import { gql } from 'apollo-boost';

export const get_Launchs = gql`
	query {
		launchesPast(limit: 15) {
			mission_name
			launch_date_local
			launch_site {
				site_name_long
			}
			rocket {
				rocket_name
				second_stage {
					payloads {
						payload_type
						payload_mass_kg
						payload_mass_lbs
					}
				}
			}
			links {
				wikipedia
			}
			id
		}
	}
`;

export const get_covid = gql`
	query {
		countries_summarys(
			query: { country: "France", date_gte: "2020-09-16T00:00:00Z" }
			sortBy: DATE_DESC
		) {
			confirmed
			date
			deaths
			recovered
		}
	}
`;

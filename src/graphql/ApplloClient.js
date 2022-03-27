import ApolloClient from 'apollo-boost';

export const client_spacedata = new ApolloClient({
	uri: 'https://api.spacex.land/graphql/',
});

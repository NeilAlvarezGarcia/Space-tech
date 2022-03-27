import { Navbar, Footer } from './components';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { AboutUs, Home, Contact, Covid } from './pages';
import { ApolloProvider } from '@apollo/react-hooks';
import { client_spacedata } from './graphql/ApplloClient';

function App() {
	return (
		<>
			<ApolloProvider client={client_spacedata}>
				<Router>
					<Navbar />
					<Routes>
						<Route path='/'>
							<Route index element={<Home />} />
							<Route path='contact' element={<Contact />} />
							<Route path='about-us' element={<AboutUs />} />
							<Route path='covid' element={<Covid />} />
						</Route>
					</Routes>
					<Footer />
				</Router>
			</ApolloProvider>
		</>
	);
}

export default App;

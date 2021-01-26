import { Fragment } from 'react';

import AppNavbar from './components/AppNavbar';
import Header from './components/Header';
import Background from './components/Background';
import Skills from './components/skills/Skills';
import Projects from './components/projects/Projects';
import Footer from './components/Footer';

const App = () => {
	return (
		<Fragment>
			<AppNavbar />
			<Header />
			<Background />
			<Skills />
			<Projects />
			<Footer />
		</Fragment>
	);
};

export default App;

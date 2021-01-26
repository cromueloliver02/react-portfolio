import { Fragment, useEffect } from 'react';
import AOS from 'aos';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'aos/dist/aos.css';
import './app.css';

import AppNavbar from './components/layout/AppNavbar';
import Header from './components/layout/Header';
import Background from './components/layout/Background';
import Skills from './components/skills/Skills';
import Projects from './components/projects/Projects';
import Footer from './components/layout/Footer';

const App = () => {
	useEffect(() => {
		AOS.init({
			startEvent: 'load'
		});
	}, []);

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

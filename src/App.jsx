import { Fragment, useEffect, useState } from 'react';
import AOS from 'aos';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'aos/dist/aos.css';
import './app.css';

import Spinner from './components/layout/Spinner';
import AppNavbar from './components/layout/AppNavbar';
import Header from './components/layout/Header';
import Background from './components/layout/Background';
import Skills from './components/skills/Skills';
import Projects from './components/projects/Projects';
import Footer from './components/layout/Footer';

const App = () => {
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		// scroll to top
		window.scrollTo({ top: 0, behavior: 'smooth' });

		if (loading) {
			document.body.style.overflowY = 'hidden';

			AOS.init({
				startEvent: 'load'
			});
		} else {
			document.body.style.overflowY = 'scroll';
		}

		// end the loading
		setTimeout(() => {
			setLoading(false);
		}, 3000);
	}, [loading]);

	return (
		<Fragment>
			{loading && <Spinner />}
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

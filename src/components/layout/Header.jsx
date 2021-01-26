import React from 'react';
import { Container } from 'reactstrap';

const Header = () => {
	return (
		<header id='home' className='showcase bg-light'>
			<Container>
				<div className='showcase-content'>
					<h1 className='showcase-text mb-5'>Hello!</h1>

					<h1 className='showcase-text'>
						I'm <span className='showcase-name'>Cromuel Barut</span>, a
						web developer skilled in React, Node, Express, MongoDB and
						other stuffs.
					</h1>

					<h5 className='mt-5'>
						Get in touch 👉{' '}
						<span className='text-email'>cromuelbarut@gmail.com</span>
					</h5>
				</div>
			</Container>
		</header>
	);
};

export default Header;

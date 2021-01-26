import React, { useState } from 'react';
import {
	Container,
	Navbar,
	NavbarToggler,
	Collapse,
	Nav,
	NavItem,
	NavLink
} from 'reactstrap';

const AppNavbar = () => {
	const [isOpen, toggle] = useState(false);

	return (
		<Navbar color='light' light expand='sm' className='fixed-top'>
			<Container>
				{/* <NavbarBrand href='#home'>&lt;&#47;CromDev&gt;</NavbarBrand> */}

				<NavbarToggler onClick={() => toggle(!isOpen)} />

				<Collapse isOpen={isOpen} navbar>
					<Nav className='ml-auto' navbar>
						<NavItem className='ml-4'>
							<NavLink href='#home'>Home</NavLink>
						</NavItem>
						<NavItem className='ml-4'>
							<NavLink href='#background'>Background</NavLink>
						</NavItem>
						<NavItem className='ml-4'>
							<NavLink href='#skills'>Skills</NavLink>
						</NavItem>
						<NavItem className='ml-4'>
							<NavLink href='#projects'>Projects</NavLink>
						</NavItem>
					</Nav>
				</Collapse>
			</Container>
		</Navbar>
	);
};

export default AppNavbar;

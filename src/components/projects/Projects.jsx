import React from 'react';
import { Col, Container, Row } from 'reactstrap';
import ProjectItem from './ProjectItem';

const projects = require('../../assets/data/data.json').projects;

const Projects = () => {
	return (
		<section id='projects' className='portfolio py-5'>
			<Container className='py-5'>
				<Row>
					<Col
						md='3'
						className='mr-5'
						data-aos='fade-in'
						data-aos-offset='275'
						data-aos-duration='750'
						data-aos-once='true'
					>
						<h6 className='section-title'>PROJECTS</h6>
					</Col>
					<Col md='7'>
						{projects.map((project, idx) => (
							<ProjectItem key={idx} project={project} />
						))}
					</Col>
				</Row>
			</Container>
		</section>
	);
};

export default Projects;

import React from 'react';
import ProjectItem from './ProjectItem';

const projects = require('../../assets/data/data.json').projects;

const Projects = () => {
	return (
		<section id='projects' className='portfolio py-5'>
			<div className='container py-5'>
				<div className='row'>
					<div className='col-md-3 mr-5'>
						<h6 className='section-title'>PROJECTS</h6>
					</div>
					<div className='col-md-7'>
						{projects.map((project, idx) => (
							<ProjectItem key={idx} project={project} />
						))}
					</div>
				</div>
			</div>
		</section>
	);
};

export default Projects;

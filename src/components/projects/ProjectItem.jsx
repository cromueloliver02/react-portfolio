import React, { Fragment } from 'react';

const ProjectItem = ({
	project: { project_name, description, photo, techs_used, html_url, repo_url }
}) => {
	return (
		<div
			className='mb-5 pb-5'
			data-aos='fade-in'
			data-aos-offset='275'
			data-aos-duration='750'
			data-aos-once='true'
		>
			<div className='project-card-header d-flex mb-3'>
				<h6 className='project-title'>{project_name}</h6>
				<div className=''>
					<a
						className='btn btn-dark align-items-center btn-sm ml-lg-5'
						href={html_url}
						target='_blank'
						rel='noreferrer'
					>
						<i className='fas fa-external-link-square-alt'></i>
						&nbsp;&nbsp;&nbsp;Visit site
					</a>
					<a
						className='btn btn-secondary btn-sm ml-2'
						href={repo_url}
						target='_blank'
						rel='noreferrer'
					>
						<i className='fab fa-github'></i>
						&nbsp;&nbsp;&nbsp;View source code
					</a>
				</div>
			</div>
			<p>{description}</p>
			<div className='mb-4'>
				{techs_used.map((tech, idx) => (
					<Fragment key={idx}>
						<div className='badge badge-primary'>{tech}</div>{' '}
					</Fragment>
				))}
			</div>

			<img
				className='img-fluid mb-5'
				src={`./img/${photo}`}
				alt={project_name}
			/>
		</div>
	);
};

export default ProjectItem;

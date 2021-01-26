import React, { Fragment } from 'react';

const ProjectItem = ({
	project: { project_name, description, photo, techs_used, html_url, repo_url }
}) => {
	return (
		<div className='mb-5 pb-5'>
			<div
				className='mb-5'
				data-aos='fade-in'
				data-aos-offset='250'
				data-aos-once='true'
			>
				<div className='d-sm-flex align-items-center mb-3'>
					<h6 className='project-title'>{project_name}</h6>
					<a
						className='btn btn-dark btn-sm ml-sm-4'
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
				<p>{description}</p>
				<div className='mb-5'>
					{techs_used.map((tech, idx) => (
						<Fragment>
							<div key={idx} className='badge badge-primary'>
								{tech}
							</div>{' '}
						</Fragment>
					))}
				</div>

				<img className='img-fluid' src={`./img/${photo}`} alt='' />
			</div>
		</div>
	);
};

export default ProjectItem;

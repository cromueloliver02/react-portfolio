import React from 'react';
import { Col, Row } from 'reactstrap';

const Background = () => {
	return (
		<section
			id='background'
			className='background py-5'
			data-aos='fade-in'
			data-aos-offset='275'
			data-aos-once='true'
		>
			<div className='container py-5'>
				<Row>
					<Col md='3' className='mr-5'>
						<h6 className='section-title'>BACKGROUND</h6>
					</Col>
					<Col md='7'>
						<p className='mb-4'>
							I'm currently enrolled at{` `}
							<a
								href='https://www.informatics.edu.ph/'
								target='_blank'
								className='text-link'
								rel='noreferrer'
							>
								Informatics Baguio
							</a>
							{` `}
							to explore my passion in Information Technology. From here,
							I learned the concepts of programming and became a
							self-taught student to pursue a career in web development.
						</p>
						<p className='mb-4'>
							As an aspiring web developer, learning something new is my
							hobby, and I always make myself motivated and productive
							every day. I enjoy exploring technologies, libraries,
							tricks, techniques, and best practices to build my projects
							to run efficiently with beautiful, readable, clean code. I
							dream of traveling the world someday.
						</p>
						<p>
							<span className='text-emphasize'>
								When I'm not in front of a computer screen
							</span>
							, I'm probably doing household chores, exercising, and
							petting my dogs.
						</p>
					</Col>
				</Row>
			</div>
		</section>
	);
};

export default Background;

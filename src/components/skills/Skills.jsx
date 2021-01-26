import React from 'react';
import { Col, Container, Row } from 'reactstrap';
import SkillCard from './SkillCard';

const skills = require('../../assets/data/data.json').skills;

const Skills = () => {
	return (
		<section id='skills' className='skills bg-light py-5'>
			<Container className='py-5'>
				<Row data-aos='fade-in' data-aos-offset='150' data-aos-once='true'>
					<Col md='3' className='mr-5'>
						<h6 className='section-title'>SKILLS</h6>
					</Col>
					<Col md='7'>
						<Row>
							{skills.map((skill, idx) => (
								<SkillCard key={idx} skill={skill} />
							))}
						</Row>
					</Col>
				</Row>
			</Container>
		</section>
	);
};

export default Skills;

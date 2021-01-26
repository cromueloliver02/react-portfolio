import React from 'react';
import { Col } from 'reactstrap';

const SkillCard = ({ skill: { skillCategory, skillItems } }) => {
	return (
		<Col md='4' className='mb-3'>
			<h6 className='skill-category'>{skillCategory}</h6>
			{skillItems.map((skillItem, idx) => (
				<p key={idx} className='skill-item'>
					{skillItem}
				</p>
			))}
		</Col>
	);
};

export default SkillCard;

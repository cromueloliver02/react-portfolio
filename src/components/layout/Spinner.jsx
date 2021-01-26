import React from 'react';
import RingLoader from 'react-spinners/RingLoader';

const Spinner = () => {
	return (
		<div className='loader-background'>
			<RingLoader color={'#007bff'} loading={true} />
		</div>
	);
};

export default Spinner;

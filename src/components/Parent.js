import React from 'react'
import Child from './Child';

const Parent = () => {
const data = "Hello Everyone";
	return(
		<div>
		<Child data={data}/>
		</div>
	);
}

export default Parent;

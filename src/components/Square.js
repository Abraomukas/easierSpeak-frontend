import React from "react";
import CountUp from "react-countup";

function Square(props) {
	return (
		<div
			className='flex-column mx-3 align-items-center justify-content-evenly'
			style={{
				display: "flex",
				width: 200,
				height: 200,
				backgroundColor: "#235679",
				boxShadow: "1px 1px 10px 10px rgba(0, 0, 0, 0.2)",
			}}>
			<h1 className='text-white'>
				<CountUp start={1} end={props.number} duration={3} />
			</h1>
			<h3 className='text-white'>{props.title}</h3>
		</div>
	);
}

export default Square;

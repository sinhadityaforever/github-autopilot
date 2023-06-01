import React, { Component } from 'react';
import Chart from 'react-apexcharts';
import Histogram from '../../components/Histogram/Histogram';
//import Histogram from '../../components/Histogram/Histogram';

function Insights() {
	return (
		<div className="Insights">
			<h1>Insights</h1>
			<div className="topDiv">
				<Histogram />
			</div>
		</div>
	);
}

export default Insights;

import React, { Component } from 'react';
import Chart from 'react-apexcharts';
import Histogram from '../../components/Histogram/Histogram';

import Progresschart from '../../components/Progresschart/Progresschart';
import ApexCharts from 'apexcharts';
import './Insights.css';


function Insights() {
	return (
		<div className="Insights">
			<h1>Insights</h1>
			<div className="topDiv">

				<Histogram/>
				</div>
				
				<div className = "secDiv">		
<Progresschart/>
</div>
			

		</div>
	);
}

export default Insights;

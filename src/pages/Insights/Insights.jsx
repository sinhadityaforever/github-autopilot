import React, { Component } from 'react';
import Chart from 'react-apexcharts';

import ApexCharts from 'apexcharts';
import './Insights.css';
import Histogram from '../../components/Histogram/Histogram';
import Sparklines from '../../components/Sparklines/Sparklines';
import Sparklines2 from '../../components/Sparklines2/Sparklines2';
import Sparklines3 from '../../components/Sparklines3/Sparklines3';
import DonutChart from '../../components/Piechart/Piechart';
import AreaChart from '../../components/Areachart/Areachart';
import StackedBarChart from '../../components/Savingschart/Savingschart';
import { fontFamily } from '@mui/system';

function Insights() {
	return (
		<div className="container">
			<div>
				<h1
					style={{
						color: 'white',
						marginTop: '1rem',
						fontSize: '2rem',
						fontWeight: 'bolder',
						marginTop: '2rem'
					}}
				>
					This Year
				</h1>
			</div>
			<div class="row sparkboxes mt-2 mb-4">
				<div class="col-md-4">
					<div class="column1">
						<Sparklines />
					</div>
				</div>
				<div class="col-md-4">
					<div class="column2">
						<Sparklines2 />
					</div>
				</div>
				<div class="col-md-4">
					<div class="column3">
						<Sparklines3 />
					</div>
				</div>
			</div>

			<div>
				<h1
					style={{
						color: 'white',
						marginTop: '1rem',
						fontSize: '2rem',
						fontWeight: 'bolder',
						marginTop: '4rem'
					}}
				>
					Last 5 Years
				</h1>
			</div>
			<div class="row mt-2 mb-4">
				<div class="col-md-6">
					<div class="box">
						<Histogram />
					</div>
				</div>

				<div class="col-md-6">
					<div class="box">
						<AreaChart />
					</div>
				</div>
			</div>
			<div>
				<h1
					style={{
						color: 'white',
						marginTop: '1rem',
						fontSize: '2rem',
						fontWeight: 'bolder',
						marginTop: '4rem'
					}}
				>
					Category-wise
				</h1>
			</div>
			<div class="row mt-2 mb-4">
				<div class="col-md-6">
					<div class="box">
						<DonutChart />
					</div>
				</div>
				<div class="col-md-6">
					<div class="box">
						<StackedBarChart />
					</div>
				</div>
			</div>
		</div>
	);
}

export default Insights;

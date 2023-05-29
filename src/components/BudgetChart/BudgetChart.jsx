import React from 'react';
import ReactApexChart from 'react-apexcharts';
import './BudgetChart.css';
function BudgetChart() {
	const initializer = {
		series: [44, 55, 41, 17, 15],

		options: {
			labels: ['Groceries', 'Clothes', 'Investment', 'Subs', 'Misc.'],
			chart: {
				type: 'donut'
			},
			responsive: [
				{
					// breakpoint: 480,
					options: {
						chart: {
							width: 200
						},
						legend: {
							position: 'bottom'
						}
					}
				}
			]
		}
	};

	return (
		<div className="chart">
			<ReactApexChart
				series={initializer.series}
				options={initializer.options}
				type="donut"
			/>
		</div>
	);
}

export default BudgetChart;

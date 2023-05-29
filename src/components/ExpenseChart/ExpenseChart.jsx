import React from 'react';
import ReactApexChart from 'react-apexcharts';
function ExpenseChart() {
	const initializer = {
		series: [
			{
				data: [19000, 4300]
			}
		],
		options: {
			chart: {
				type: 'bar',
				height: 350
			},
			plotOptions: {
				bar: {
					borderRadius: 4,
					horizontal: false
				}
			},
			dataLabels: {
				enabled: true
			},
			xaxis: {
				categories: ['Income', 'Expense']
			}
		}
	};

	return (
		<div>
			<ReactApexChart
				options={initializer.options}
				series={initializer.series}
				type="bar"
				height={200}
				width={450}
			/>
		</div>
	);
}

export default ExpenseChart;

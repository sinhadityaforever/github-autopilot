import React from 'react';
import ReactApexChart from 'react-apexcharts';
function ExpenseChart({ transactionsData }) {
	var expense = 0;
	var income = 0;

	const getData = () => {
		transactionsData.forEach((item) => {
			if (item.type === 'expense') {
				expense += item.amount;
			} else {
				income += item.amount;
			}
		});
	};
	getData();

	const initializer = {
		series: [
			{
				data: [income, expense]
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

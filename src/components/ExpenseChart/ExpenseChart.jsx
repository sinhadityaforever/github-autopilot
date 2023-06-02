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
			colors: ['#03DAC5'],
			title: {
				text: 'This Month',
				align: 'left',
				margin: 10,
				offsetX: 10,
				offsetY: 0,
				floating: false,
				style: {
					fontSize: '20px',
					fontWeight: 'bold',
					fontFamily: undefined,
					color: 'white'
				}
			},
			chart: {
				type: 'bar',
				height: 400,
				foreColor: 'white'
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
				style={{ marginTop: '5rem' }}
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

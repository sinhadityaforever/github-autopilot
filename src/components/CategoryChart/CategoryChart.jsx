import React from 'react';
import ReactApexChart from 'react-apexcharts';
import './CategoryChart.css';
function CategoryChart({ transactionsData }) {
	//Parsing data for graph
	const expenseTransactions = transactionsData.filter(
		(transaction) => transaction.type === 'expense'
	);
	const expenseCategories = [
		...new Set(expenseTransactions.map((transaction) => transaction.category))
	];
	const expenseAmountSums = expenseCategories.map((category) => {
		const categoryTransactions = expenseTransactions.filter(
			(transaction) => transaction.category === category
		);
		const categoryAmountSum = categoryTransactions.reduce(
			(sum, transaction) => sum + transaction.amount,
			0
		);
		return categoryAmountSum;
	});
	//Parsing ends

	const initializer = {
		series: expenseAmountSums,

		options: {
			labels: expenseCategories,
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
			{transactionsData && expenseAmountSums && expenseCategories ? (
				<ReactApexChart
					series={initializer.series}
					options={initializer.options}
					type="donut"
				/>
			) : (
				<span>No data to show Chart</span>
			)}
		</div>
	);
}

export default CategoryChart;

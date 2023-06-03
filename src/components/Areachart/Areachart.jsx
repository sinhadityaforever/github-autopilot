import React, { useEffect, useRef } from 'react';
import ApexCharts from 'apexcharts';

const AreaChart = () => {
	const chartRef = useRef(null);
	var colorPalette = ['#00D8B6', '#008FFB', '#FF4560'];

	useEffect(() => {
		const options = {
			chart: {
				height: 340,
				width: 340,
				type: 'area',
				zoom: {
					enabled: false
				}
			},
			stroke: {
				curve: 'straight'
			},
			colors: colorPalette,
			series: [
				{
					name: 'Income',
					data: [
						{
							x: -4,
							y: 5
						},
						{
							x: -3,
							y: 3
						},
						{
							x: -2,
							y: 8
						},
						{
							x: -1,
							y: 4
						},
						{
							x: 0,
							y: 5
						}
					]
				},
				{
					name: 'Savings',
					data: [
						{
							x: -4,
							y: 6
						},
						{
							x: -3,
							y: 4
						},
						{
							x: -2,
							y: 8
						},
						{
							x: -1,
							y: 5.5
						},
						{
							x: 0,
							y: 6
						}
					]
				},
				{
					name: 'Expense',
					data: [
						{
							x: -4,
							y: 5
						},
						{
							x: -3,
							y: 4
						},
						{
							x: -2,
							y: 11
						},
						{
							x: -1,
							y: 4
						},
						{
							x: 0,
							y: 8
						}
					]
				}
			],
			fill: {
				opacity: 1
			},
			// title: {
			// 	text: '',
			// 	align: 'left',
			// 	style: {
			// 		fontSize: '18px',
			// 		color: 'white'
			// 	}
			// },
			markers: {
				size: 0,
				style: 'hollow',
				hover: {
					opacity: 5
				}
			},
			tooltip: {
				intersect: true,
				shared: false
			},
			xaxis: {
				tooltip: {
					enabled: true
				},
				labels: {
					show: true,
					style: {
						colors: 'white'
					}
				},
				axisTicks: {
					show: true
				}
			},
			yaxis: {
				axisBorder: {
					show: false
				},
				axisTicks: {
					show: false
				},
				labels: {
					style: {
						colors: 'white'
					}
				}
			},
			legend: {
				show: true,
				labels: {
					colors: 'white'
				}
			}
		};

		const chart = new ApexCharts(chartRef.current, options);
		chart.render();

		return () => {
			chart.destroy();
		};
	}, []);

	return <div className="chart-container" id="area" ref={chartRef}></div>;
};

export default AreaChart;

import React, { useEffect, useRef } from 'react';
import 'apexcharts/dist/apexcharts.css';
import ApexCharts from 'apexcharts';

const Histogram = () => {
	const chartRef = useRef(null);

	useEffect(() => {
		const options = {
			series: [
				{
					name: 'Income',
					data: [44, 55, 41, 64, 22, 43, 21]
				},
				{
					name: 'Expenditure',
					data: [53, 32, 33, 52, 13, 44, 32]
				}
			],
			chart: {
				type: 'bar',
				height: 400,
				width: 400
			},
			plotOptions: {
				bar: {
					vertical: true,
					dataLabels: {
						position: 'top'
					}
				}
			},
			dataLabels: {
				enabled: true,
				offsetX: -6,
				style: {
					fontSize: '12px',
					colors: ['#fff']
				}
			},
			stroke: {
				show: true,
				width: 1,
				colors: ['#fff']
			},
			tooltip: {
				shared: true,
				intersect: false
			},
			xaxis: {
				categories: [2001, 2002, 2003, 2004, 2005, 2006, 2007],
				labels: {
					show: true,
					style: {
						colors: 'white'
					}
				}
			},
			yaxis: {
				labels: {
					style: {
						colors: 'white'
					}
				}
			},
			legend: {
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

	return <div id="chart" ref={chartRef}></div>;
};

export default Histogram;

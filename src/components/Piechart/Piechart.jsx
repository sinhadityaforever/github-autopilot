import React, { useEffect, useRef } from 'react';
import ApexCharts from 'apexcharts';

const DonutChart = () => {
	const chartRef = useRef(null);

	useEffect(() => {
		const options = {
			series: [44, 55, 41, 17, 15],
			chart: {
				width: 380,
				foreColor: 'white',
				type: 'donut',
				dropShadow: {
					enabled: true,
					color: '#fff',
					top: -1,
					left: 3,
					blur: 3,
					opacity: 0.2
				}
			},
			stroke: {
				width: 0
			},
			plotOptions: {
				pie: {
					donut: {
						labels: {
							show: true,
							total: {
								showAlways: true,
								show: true,
								color: 'white'
							},
							name: {
								color: 'white'
							}
						}
					}
				}
			},
			labels: ['Food', 'EMI', 'Clothing', 'Electric Bill', 'Savings'],
			dataLabels: {
				style: {
					color: 'white'
				},
				dropShadow: {
					blur: 3,
					opacity: 0.8
				}
			},
			fill: {
				// type: 'pattern',
				opacity: 1,
				pattern: {
					enabled: true,
					style: [
						'verticalLines',
						'squares',
						'horizontalLines',
						'circles',
						'slantedLines'
					]
				}
			},
			states: {
				hover: {
					filter: 'none'
				}
			},
			theme: {
				palette: 'palette2'
			},

			responsive: [
				{
					breakpoint: 480,
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
		};

		const chart = new ApexCharts(chartRef.current, options);
		chart.render();

		return () => {
			chart.destroy();
		};
	}, []);

	return <div id="chart" ref={chartRef}></div>;
};

export default DonutChart;

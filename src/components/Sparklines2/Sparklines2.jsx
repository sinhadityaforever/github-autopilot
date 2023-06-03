import React from 'react';
import 'apexcharts/dist/apexcharts.css';
import ApexCharts from 'apexcharts';

class Sparklines2 extends React.Component {
	constructor(props) {
		super(props);
		this.chartRef = React.createRef();
	}

	componentDidMount() {
		this.renderChart();
	}

	renderChart() {
		var randomizeArray = function (arg) {
			var array = arg.slice();
			var currentIndex = array.length,
				temporaryValue,
				randomIndex;

			while (0 !== currentIndex) {
				randomIndex = Math.floor(Math.random() * currentIndex);
				currentIndex -= 1;

				temporaryValue = array[currentIndex];
				array[currentIndex] = array[randomIndex];
				array[randomIndex] = temporaryValue;
			}

			return array;
		};

		var sparklineData = [
			47, 45, 54, 38, 56, 24, 65, 31, 37, 39, 62, 51, 35, 41, 35, 27, 93, 53,
			61, 27, 54, 43, 19, 46
		];

		var spark2 = {
			chart: {
				id: 'sparkline2',
				group: 'sparklines',
				type: 'area',
				height: 160,
				sparkline: {
					enabled: true
				},
				parentHeightOffset: 0
			},
			stroke: {
				curve: 'straight'
			},
			fill: {
				opacity: 1
			},
			series: [
				{
					name: 'Expenses',
					data: randomizeArray(sparklineData)
				}
			],
			labels: [...Array(24).keys()].map((n) => `2018-09-0${n + 1}`),
			yaxis: {
				min: 0
			},
			xaxis: {
				type: 'datetime'
			},
			colors: ['#FF4560'],
			title: {
				text: 'Rs 235,312',
				offsetX: 30,
				style: {
					fontSize: '24px',
					color: 'white',
					cssClass: 'apexcharts-yaxis-title'
				}
			},
			subtitle: {
				text: 'Expenses',
				offsetX: 30,
				style: {
					color: 'white',
					fontSize: '14px',
					cssClass: 'apexcharts-yaxis-title'
				}
			}
		};

		var chartOptions = {
			...spark2,
			chart: {
				...spark2.chart,
				parentHeightOffset: 0
			}
		};

		new ApexCharts(this.chartRef.current, chartOptions).render();
	}

	render() {
		return <div ref={this.chartRef} />;
	}
}

export default Sparklines2;

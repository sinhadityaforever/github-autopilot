import React from 'react';
import ApexCharts from 'apexcharts';

class Sparklines3 extends React.Component {
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

		var spark3 = {
			chart: {
				id: 'sparkline3',
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
					name: 'Profits',
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
			colors: ['#008FFB'],
			title: {
				text: 'Rs 135,965',
				offsetX: 30,
				style: {
					fontSize: '24px',
					cssClass: 'apexcharts-yaxis-title',
					color: 'white'
				}
			},
			subtitle: {
				text: 'Savings',
				offsetX: 30,
				style: {
					fontSize: '14px',
					color: 'white',
					cssClass: 'apexcharts-yaxis-title'
				}
			}
		};

		var chartOptions = {
			...spark3,
			chart: {
				...spark3.chart,
				parentHeightOffset: 0
			}
		};

		new ApexCharts(this.chartRef.current, chartOptions).render();
	}

	render() {
		return <div ref={this.chartRef} />;
	}
}

export default Sparklines3;

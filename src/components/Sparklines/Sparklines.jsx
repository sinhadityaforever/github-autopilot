import React, { useEffect, useRef } from 'react';
import 'apexcharts/dist/apexcharts.css';
import ApexCharts from 'apexcharts';

const Sparklines=()=> {
  const chartRef = useRef(null);

  useEffect(() => {
    const renderChart = () => {
      var sparklineData = [
        47, 45, 54, 38, 56, 24, 65, 31, 37, 39, 62, 51, 35, 41, 35, 27, 93, 53,
        61, 27, 54, 43, 19, 46
      ];

      var spark1 = {
        chart: {
          id: 'sparkline1',
          group: 'sparklines',
          type: 'area',
          height: 160,
          width:230,
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
            name: 'Sales',
            data: sparklineData
          }
        ],
        labels: [...Array(24).keys()].map((n) => `2018-09-0${n + 1}`),
        yaxis: {
          min: 0
        },
        xaxis: {
          type: 'datetime'
        },
        colors: ['#5DEBB8'],
        title: {
          text: 'Rs 424,652',
          offsetX: 30,
          style: {
            fontSize: '24px',
            color: 'white',
            cssClass: 'apexcharts-yaxis-title'
          }
        },
        subtitle: {
          text: 'Salary',
          offsetX: 30,
          style: {
            fontSize: '14px',
            color: 'white',
            cssClass: 'apexcharts-yaxis-title'
          }
        }
      };

      var chartOptions = {
        ...spark1,
        chart: {
          ...spark1.chart,
          parentHeightOffset: 0
        }
      };

      new ApexCharts(chartRef.current, chartOptions).render();
    };

    renderChart();

    const resizeHandler = () => {
      if (chartRef.current) {
        ApexCharts.exec('sparkline1', 'updateOptions', {
          chart: {
            height: window.innerWidth < 576 ? 200 : 160
          }
        });
      }
    };

    window.addEventListener('resize', resizeHandler);

    return () => {
      window.removeEventListener('resize', resizeHandler);
    };
  }, []);

  return <div ref={chartRef} />;
}

export default Sparklines;

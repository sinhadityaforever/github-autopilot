import React, { useEffect, useRef } from 'react';
import ApexCharts from 'apexcharts';

const StackedBarChart = () => {
  const chartRef = useRef(null);

  useEffect(() => {
    const options = {
      series: [
        {
          name: 'Food',
          data: [44, 55, 41, 37, 22, 43, 21]
        },
        {
          name: 'Clothing',
          data: [53, 32, 33, 52, 13, 43, 32]
        },
        {
          name: 'Bills',
          data: [12, 17, 11, 9, 15, 11, 20]
        },
        {
          name: 'Accessories',
          data: [9, 7, 5, 8, 6, 9, 4]
        },
        {
          name: 'Savings',
          data: [25, 12, 19, 32, 25, 24, 10]
        }
      ],
      chart: {
        type: 'bar',
        height: 350,
        width : 350,
        stacked: true,
        stackType: '100%'
      },
      plotOptions: {
        bar: {
          horizontal: true
        }
      },
      stroke: {
        width: 1,
        colors: ['#fff']
      },
      title: {
        text: '100% Stacked Bar'
      },
      xaxis: {
        categories: ["Jan","Feb","Mar", "April","May","June",]
      },
      tooltip: {
        y: {
          formatter: function (val) {
            return val + 'K';
          }
        }
      },
      fill: {
        opacity: 1
      },
      legend: {
        position: 'top',
        horizontalAlign: 'left',
        offsetX: 40
      }
    };

    const chart = new ApexCharts(chartRef.current, options);
    chart.render();

    // Clean up on component unmount
    return () => {
      chart.destroy();
    };
  }, []);

  return <div id="chart" ref={chartRef}></div>;
};

export default StackedBarChart;

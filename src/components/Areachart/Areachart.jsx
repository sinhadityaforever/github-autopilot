import React, { useEffect, useRef } from 'react';
import ApexCharts from 'apexcharts';


const AreaChart = () => {
  const chartRef = useRef(null);
  var colorPalette = ['#00D8B6','#008FFB',  '#FEB019', '#FF4560', '#775DD0']


  useEffect(() => {
    const options = {
        


        chart: {
            height: 340,
            width:340,
            type: 'area',
            zoom: {
              enabled: false
            },
          },
          stroke: {
            curve: 'straight'
          },
          colors: colorPalette,
          series: [
            {
              name: "Blog",
              data: [{
                x: 0,
                y: 0
              }, {
                x: 4,
                y: 5
              }, {
                x: 5,
                y: 3
              }, {
                x: 9,
                y: 8
              }, {
                x: 14,
                y: 4
              }, {
                x: 18,
                y: 5
              }, {
                x: 25,
                y: 0
              }]
            },
            {
              name: "Social Media",
              data: [{
                x: 0,
                y: 0
              }, {
                x: 4,
                y: 6
              }, {
                x: 5,
                y: 4
              }, {
                x: 14,
                y: 8
              }, {
                x: 18,
                y: 5.5
              }, {
                x: 21,
                y: 6
              }, {
                x: 25,
                y: 0
              }]
            },
            {
              name: "External",
              data: [{
                x: 0,
                y: 0
              }, {
                x: 2,
                y: 5
              }, {
                x: 5,
                y: 4
              }, {
                x: 10,
                y: 11
              }, {
                x: 14,
                y: 4
              }, {
                x: 18,
                y: 8
              }, {
                x: 25,
                y: 0
              }]
            }
          ],
          fill: {
            opacity: 1,
          },
          title: {
            text: 'Daily Visits Insights',
            align: 'left',
            style: {
              fontSize: '18px'
            }
          },
          markers: {
            size: 0,
            style: 'hollow',
            hover: {
              opacity: 5,
            }
          },
          tooltip: {
            intersect: true,
            shared: false,
          },
          xaxis: {
            tooltip: {
              enabled: false
            },
            labels: {
              show: false
            },
            axisTicks: {
              show: false
            }
          },
          yaxis: {
            tickAmount: 4,
            max: 12,
            axisBorder: {
              show: false
            },
            axisTicks: {
              show: false
            },
            labels: {
              style: {
                colors: '#78909c'
              }
            }
          },
          legend: {
            show: false
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

import React, { useEffect, useRef } from 'react';
import 'apexcharts/dist/apexcharts.css';
import ApexCharts from 'apexcharts';

const FinanceScore = () => {
    const chartRef = useRef(null);
  
    useEffect(() => {

        var options = {
            series: [70],
            chart: {
            height: 350,
            type: 'radialBar',
          },
          plotOptions: {
            radialBar: {
              hollow: {
                size: '70',
              }
            },
          },
          labels: ['Budget Score: 70'],
          };
  
          var chart = new ApexCharts(document.querySelector("#chart"), options);
          chart.render();
        
        
      





        return () => {
            chart.destroy();
          };
        }, []);
      
        return <div id="chart" ref={chartRef}></div>;
      };
    
      
    
    
    
    
    export default FinanceScore;
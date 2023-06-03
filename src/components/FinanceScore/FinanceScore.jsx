import React, { useEffect, useRef } from 'react';
import 'apexcharts/dist/apexcharts.css';
import ApexCharts from 'apexcharts';

const FinanceScore = () => {
    const chartRef = useRef(null);
  
    useEffect(() => {

        var options = {
            series: [70],
            chart: {
            height: 340,
            width:340,
            type: 'radialBar',
            colors: ['#03DAC5'],
            
          },
          plotOptions: {
            radialBar: {
              hollow: {
                size: '50',
                
              }
            },
          },
        
          
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
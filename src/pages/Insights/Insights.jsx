import React, { Component } from 'react';
import Chart from 'react-apexcharts';


import ApexCharts from 'apexcharts';
import './Insights.css';
import  Histogram  from '../../components/Histogram/Histogram';
import  Sparklines  from '../../components/Sparklines/Sparklines';
import  Sparklines2  from '../../components/Sparklines2/Sparklines2';
import  Sparklines3  from '../../components/Sparklines3/Sparklines3';
import  DonutChart  from '../../components/Piechart/Piechart';
import  AreaChart  from '../../components/Areachart/Areachart';
import  StackedBarChart  from '../../components/Savingschart/Savingschart';




function Insights() {
	return (
		<div className="container">
      <div class="row sparkboxes mt-4 mb-4">
              <div class="col-md-4">
                <div class="column1">
              <Sparklines/>
                </div>
              </div>
              <div class="col-md-4">
                <div class="column2">
                <Sparklines2/>
                  
                </div>
              </div>
              <div class="col-md-4">
                <div class="column3">
                <Sparklines3/>
                </div>
              </div>
            </div>

            <div class="row mt-5 mb-4">
              <div class="col-md-6">
                <div class="box">
                  <Histogram/>
                </div>
              </div>
              <div class="col-md-6">
                <div class="box">
                <DonutChart/> 
                </div>
              </div>
            </div>
            <div class="row mt-5 mb-4">
              <div class="col-md-6">
                <div class="box">
                  <AreaChart/>
                </div>
              </div>
              <div class="col-md-6">
                <div class="box">
                <StackedBarChart/>
               
                </div>
              </div>
            </div>

      
    </div>



				
				
			
		
		
	);
}

export default Insights;

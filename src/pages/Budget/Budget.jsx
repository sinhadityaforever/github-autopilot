import React from 'react';
import Table from '../../components/Table/Table';
import './Budget.css';
import Cards from '../../components/Cards/Cards';
import { Calculator, Fish } from "phosphor-react";





function Budget() {
	const shoot = () => {
		return this.parentElement.style.display='none';
	  }

	return (
	
	<div className="Budget">
	  <div className="space">
		<h2>Set monthly budget</h2>
		<p>Setting a budget reduces expenditures about 10% on an average</p>
		<div className="flex-container">
		<Calculator size={24} className="flex-child spaces"/>
		<p className="flex-child">Overall Budget</p>
		<p className="flex-child green">Set Now</p>
		</div>
		<br />
	  </div>
         
	  <h3>Category wise budget</h3>
	    <div className="flex-container">
		<Fish size={24} className="flex-child spaces"/>
		<p className="flex-child">Food and drinks</p>
		<p className="flex-child green">₹150</p>
		<span class="closebtn" onClick={shoot}>&times;</span>
		</div>



		
		<br />
		<button>Save</button>

		
		<Cards /> 
		


	</div>);
}

export default Budget;

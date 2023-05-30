import React from 'react';
import Table from '../../components/Table/Table';
import './Budget.css';
import Cards from '../../components/Cards/Cards';

function Budget() {
	return (
	
	<div className="Budget">
		<div className="input space">
		<h3>Enter your monthly budget</h3>
		<input type="text" placeholder="Enter your budget" />
		<br />
		<button>Submit</button>
		</div>
         

        <div className="input">
		<h3>Enter your category-wise budget</h3>
		<input type="text" placeholder="Enter your category" />
		<input type="text" placeholder="Enter your budget"/>
		<br />
		<button>Submit</button>
		</div>
		
		<Table />
		<br />
		<button>Save</button>

		
		<Cards /> 
		


	</div>);
}

export default Budget;

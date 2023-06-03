import React,  { useState } from 'react';
import Table from '../../components/Table/Table';
import './Budget.css';
import Cards from '../../components/Cards/Cards';
import { Calculator, Fish } from "phosphor-react";
import Box from '../../components/Box/Box';
import Setit from '../../components/Setit/Setit';






function Budget() {

	const [isClicked, setClicked] = useState(false);
	const [isCross, setCross] = useState(false);

	// const shoot = () => {
	// 	this.parentElement.style.display='none';
	//   }

	  function handleClick() {
		setClicked(true);
	  }

	  function handleCross() {
		setCross(true);
	  }
	



	return (
	
	<div className="Budget">
	  <div className="space">
		<h2>Set monthly budget</h2>
		<p>Setting a budget reduces expenditures about 10% on an average</p>
		<div className="flex-container">
		<Calculator size={24} className="flex-child spaces"/>
		<p className="flex-child">Overall Budget</p>
        <div onClick={handleClick}>
		{isClicked ? <Box/> : <Setit/>}
		</div>
		</div>
		<br />
	  </div>
         
	  <h3>Category wise budget</h3>
	    <div className={isCross? "close flex-container" : "flex-container"}>
		  <Fish size={24} className="flex-child spaces"/>
		  <p className="flex-child">Food and drinks</p>
		  <p className="flex-child green">₹150</p>
		  <div onClick={handleCross} className="margin">
		     <span className="btnstyle">&times;</span>
		   </div>
        </div>



		
		<br />
		<button>+</button>
		<h4 className="inline">Add Category</h4>

		
		
		


	</div>);
}

export default Budget;

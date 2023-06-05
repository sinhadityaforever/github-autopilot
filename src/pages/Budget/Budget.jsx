import React, { useState } from 'react';
import Table from '../../components/Table/Table';
import './Budget.css';
import Cards from '../../components/Cards/Cards';
import { Calculator, Fish } from 'phosphor-react';
import Box from '../../components/Box/Box';
import Setit from '../../components/Setit/Setit';
import Overall from '../../components/Overall/Overall';
import { useAppSelector } from '../../app/hooks';
import Category from '../../components/Category/Category';
import meterImg from '../../imgs/meter.png.png';
import NewTable from '../../components/NewTable/NewTable';
import Enter from '../../components/Enter/Enter';
import AddForm from '../../components/AddForm/AddForm';
import FinanceScore from '../../components/FinanceScore/FinanceScore';

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

	const transactionsData = [
		{
			name: 'Ordered Pizza',
			date: '12/12/2021',
			category: 'Food and drinks',
			type: 'delete',
			amount: 320
		},
		{
			name: 'Beer',
			date: '12/12/2021',
			
			category: 'EMI',
			type: 'delete',
			amount: 590
		},
		{
			name: 'Beer',
			date: '12/12/2021',
			
			category: 'House Rent',
			type: 'delete',
			amount: 2000
		},
		
		{
			name: 'Beer',
			date: '12/12/2021',
			
			category: 'Groceries',
			type: 'delete',
			amount: 500
		},
		{
			name: 'Beer',
			date: '12/12/2021',
			
			category: 'Entertainment',
			type: 'delete',
			amount: 200
		},
		{
			name: 'Beer',
			date: '12/12/2021',
			
			category: 'Subscriptions',
			type: 'delete',
			amount: 3000
		},
		{
			name: 'Beer',
			date: '12/12/2021',
			
			category: 'Video games',
			type: 'delete',
			amount: 1200
		},
		{
			name: 'Beer',
			date: '12/12/2021',
			
			category: 'Miscellaneous',
			type: 'delete',
			amount: 1000
		}
	];
	
	const tableTransactionsData = [...transactionsData];
	tableTransactionsData.sort((a, b) => new Date(b.date) - new Date(a.date));

	const recentTransactions = tableTransactionsData.slice(0, 9);

	return (
	<div className="Budget">
		    <br/>
			<br/>
		<div className="grid-contain">
          
		   <div>
		   {/* <h3>Budget</h3>
		   <h4 className="overall">Overall Budget:</h4>	
			<input type="number" className="block up" /> */}
			<AddForm name="SET BUDGET" />
			<AddForm name="SET YOUR GOAL"/>
            </div>

			<div style={{position: 'relative', top:'-35px'}}>
			<FinanceScore />
		     </div>

		</div>
			
			
			
			<h4>Set your category-wise budget:</h4>
            <br/>
			
			<div className="grid-container">
				<div style={{width: '100px'}}>
					{/* <label for="category" className="inline"></label>
					 <select name="category" id="category" className="style merge">
						<option value="Business">Business</option>
						<option value="Investment">Investment</option>
						<option value="Salary" selected>
							Salary
						</option>
						<option value="Other">Other</option>
					</select> */}
					<Enter />
				</div>

				{/* <div>
					<input
						type="number"
						placeholder="Current Budget"
						name="current"
						className="style"
					/>
				</div>

				<div>
					<input
						type="text"
						placeholder="New Budget"
						name="new"
						className="style"
					/>
				</div>  */}

<div class="form__linput merge">
      <input class="form__input" type="number" name="fname" id="fname" pattern="\w{1,}" value="5000" style={{height:'54px'}} required />
      <label class="form__label" for="fname">CURRENT BUDGET</label>
    </div>

    <div class="form__linput merge" style={{position: 'relative', top: '1px'}}>
      <input class="form__input" type="number" name="lname" id="lname" pattern="\w{1,}" required style={{position: 'relative', top: '-4px', height:'57px'}}/>
      <label class="form__label" for="lname" >NEW BUDGET</label>
    </div>

				<div className="light">
					<button className="merge btnstyle"><div className="font">+ SET</div></button>
					{/* <label class="form__label" for="button">+ Add</label> */}
					
				</div>
			</div>
          <br/>
		 
		  <NewTable rows={recentTransactions} />
		  <br/>
			<br/>
			<br/>
			<h4>Deeper look at category-wise budget:</h4>
			
			<Category />
			<br/>
			<br/>
		</div>
	);
}

export default Budget;

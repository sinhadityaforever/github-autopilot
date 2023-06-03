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

	const transactionsData = useAppSelector(
		(state) => state.transactionState.transactions
	);

	const tableTransactionsData = [...transactionsData];
	tableTransactionsData.sort((a, b) => new Date(b.date) - new Date(a.date));

	const recentTransactions = tableTransactionsData.slice(0, 9);

	return (
	<div className="Budget">
		    <br/>
		<div className="grid-contain">
           
		   <div>
		   <h3>Budget</h3>
		   <h4 className="overall">Overall Budget:</h4>	
			<input type="number" className="block up" />
            </div>

			<div>
			<img src={meterImg} alt="Meter pic" />
		     </div>

		</div>
			<br/>

			<h4>Set your category-wise budget:</h4>
            <br/>
			<div className="grid-container">
				<div >
					<label for="category" className="inline"></label>
					 <select name="category" id="category" className="style">
						<option value="Business">Business</option>
						<option value="Investment">Investment</option>
						<option value="Salary" selected>
							Salary
						</option>
						<option value="Other">Other</option>
					</select>
				</div>

				<div>
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
				</div>

				<div>
					<button>+</button>
					<p className="inline">Add Category</p>
				</div>
			</div>
          <br/>
			<Category />
			<br/>
			<br/>
		</div>
	);
}

export default Budget;

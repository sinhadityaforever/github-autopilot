import React, { useState } from 'react';
import Table from '../../components/Table/Table';
import './Budget.css';
import Cards from '../../components/Cards/Cards';
// import { Calculator, Fish } from 'phosphor-react';
// import Box from '../../components/Box/Box';
// import Setit from '../../components/Setit/Setit';
// import Overall from '../../components/Overall/Overall';
// import { useAppSelector } from '../../app/hooks';
// import Category from '../../components/Category/Category';
// import meterImg from '../../imgs/meter.png.png';
import BudgetCards from '../../components/ExpenseCards copy/ExpenseCards';
import AddBudgetForm from '../../components/AddBudgetForm/AddBudgetForm';
import FinanceScore from '../../components/FinanceScore/FinanceScore';
function Budget() {
	// const [isClicked, setClicked] = useState(false);
	// const [isCross, setCross] = useState(false);

	// const shoot = () => {
	// 	this.parentElement.style.display='none';
	//   }

	// function handleClick() {
	// 	setClicked(true);
	// }

	// function handleCross() {
	// 	setCross(true);
	// }

	// const transactionsData = useAppSelector(
	// 	(state) => state.transactionState.transactions
	// );

	// const tableTransactionsData = [...transactionsData];
	// tableTransactionsData.sort((a, b) => new Date(b.date) - new Date(a.date));

	// const recentTransactions = tableTransactionsData.slice(0, 9);

	return (
		<div className="Budget">

<div>
<h1 
style={{
						color: 'white',
						marginTop: '1rem',
						fontSize: '2rem',
						fontWeight: 'bolder',
						marginTop: '2rem'
					}}>
					Budget</h1>
			<div className="topDivision">
				<AddBudgetForm/>
				

				<AddBudgetForm/>
				

				<FinanceScore/>

				</div>
			

			{/* <div className="bottomDiv">
				<Table rows={recentTransactions} />
				{!isMobile && <CategoryChart transactionsData={transactionsData} />}
			</div> */}


				{/* <h1
					style={{
						color: 'white',
						marginTop: '1rem',
						fontSize: '2rem',
						fontWeight: 'bolder',
						marginTop: '2rem'
					}}
				>
					FIX YOUR BUDGET
				</h1>
			</div>
			<div class="row">
				<div class="colo">
					<div class="columna">
						<BudgetCards/>
					</div>
				</div>
				<div class="colo">
					<div class="columnb">
				</div>
					</div>
				<div class="colo">
					<div class="column3">
					<FinanceScore/>
					</div>
				</div>
			</div>

			<div>
				<h1
					style={{
						color: 'white',
						marginTop: '1rem',
						fontSize: '2rem',
						fontWeight: 'bolder',
						marginTop: '4rem'
					}}
				>
					Setting category wise budget
				</h1>
			</div>
			<div class="row mt-2 mb-4">
				<div class="col-md-6">
					<div class="box">
						
					</div>
				</div>

				<div class="col-md-6">
					<div class="box">
						
					</div>
				</div>
			</div>
			<div>
				<h1
					style={{
						color: 'white',
						marginTop: '1rem',
						fontSize: '2rem',
						fontWeight: 'bolder',
						marginTop: '4rem'
					}}
				>
					Amount 
				</h1>
			</div>
			<div class="row mt-2 mb-4">
				<div class="col-md-6">
					<div class="box">
						
					</div>
				</div>
				<div class="col-md-6">
					<div class="box">
						
					</div>
				</div> */}
			</div>
		</div>



);
}

export default Budget;




























			

		/* // 	<h3>Set Overall Budget</h3>
		// 	<input type="number" />
		// 	<img src={meterImg} alt="Meter pic" />

		// 	<h4>Set your category-wise budget:</h4>

		// 	<div className="grid-container">
		// 		<div>
		// 			<label for="category">Enter Category:</label>
		// 			<select name="category" id="category" className="style">
		// 				<option value="Business">Business</option>
		// 				<option value="Investment">Investment</option>
		// 				<option value="Salary" selected>
		// 					Salary
		// 				</option>
		// 				<option value="Other">Other</option>
		// 			</select>
		// 		</div>

		// 		<div>
		// 			<input
		// 				type="number"
		// 				placeholder="Current Budget"
		// 				name="current"
		// 				className="style"
		// 			/>
		// 		</div>

		// 		<div>
		// 			<input
		// 				type="text"
		// 				placeholder="New Budget"
		// 				name="new"
		// 				className="style"
		// 			/>
		// 		</div>

		// 		<div>
		// 			<button>+</button>
		// 			<p className="inline">Add Category</p>
		// 		</div>
		// 	</div>

		//	<Category /> */
		 /* div>} */

		 


		
	
import React, { useState } from 'react';
import Table from '../../components/Table/Table';
import './Budget.css';
import Cards from '../../components/Cards/Cards';
import { Calculator, Fish } from 'phosphor-react';
import Box from '../../components/Box/Box';
import Setit from '../../components/Setit/Setit';
import Overall from '../../components/Overall/Overall';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import Category from '../../components/Category/Category';
import meterImg from '../../imgs/meter.png.png';
import NewTable from '../../components/NewTable/NewTable';
import Enter from '../../components/Enter/Enter';
import AddForm from '../../components/AddForm/AddForm';
import FinanceScore from '../../components/FinanceScore/FinanceScore';
import { useDispatch } from 'react-redux';
import { addCategoryBudget } from '../../features/transactionState/transactionStateSlice';
import { de } from 'date-fns/locale';

function Budget() {
	const dispatch = useAppDispatch();

	const [selectedCategoryId, setSelectedCategoryId] = useState(8);

	const [newValue, setNewValue] = useState(0);
	var budgetData = useAppSelector(
		(state) => state.transactionState.categoryWiseBudget
	);
	var allowedBudgetData = [...budgetData];
	const defaultBudgetObject = allowedBudgetData.filter(
		(budget) => budget.categoryId === selectedCategoryId
	)[0];
	const [defaultBudget, setDefaultBudget] = useState(
		defaultBudgetObject.budget
	);

	const handleCategory = (category) => {
		setSelectedCategoryId(category.id);
		console.log(selectedCategoryId);
		const defaultBudgetUpdated = allowedBudgetData.filter(
			(budget) => budget.categoryId === selectedCategoryId
		)[0].budget;

		setDefaultBudget(defaultBudgetUpdated);
	};

	const newBudgetHandler = (e) => {
		setNewValue(e.target.value);
	};
	const setBudgetHandler = () => {
		setDefaultBudget(newValue);
		dispatch(
			addCategoryBudget({ categoryId: selectedCategoryId, budget: newValue })
		);
	};
	const transactionsData = [];

	const tableTransactionsData = [...transactionsData];
	tableTransactionsData.sort((a, b) => new Date(b.date) - new Date(a.date));

	const recentTransactions = tableTransactionsData.slice(0, 9);

	return (
		<div className="Budget">
			<br />
			<br />
			<div className="grid-contain">
				<div>
					<AddForm name="SET BUDGET" />
					<AddForm name="SET YOUR GOAL" />
				</div>

				<div style={{ position: 'relative', top: '-35px' }}>
					<FinanceScore />
				</div>
			</div>

			<h4>Set your category-wise budget:</h4>
			<br />

			<div className="grid-container">
				<div style={{ width: '100px' }}>
					<Enter selectedCategory={handleCategory} />
				</div>

				<div class="form__linput merge">
					<input
						class="form__input"
						type="number"
						name="fname"
						id="fname"
						pattern="\w{1,}"
						value={defaultBudget}
						style={{ height: '54px' }}
					></input>
					<label class="form__label" for="fname">
						CURRENT BUDGET
					</label>
				</div>

				<div
					class="form__linput merge"
					style={{ position: 'relative', top: '1px' }}
				>
					<input
						class="form__input"
						type="number"
						name="lname"
						id="lname"
						required
						value={newValue}
						onChange={newBudgetHandler}
						style={{ position: 'relative', top: '-4px', height: '57px' }}
					/>
					<label class="form__label" for="lname">
						NEW BUDGET
					</label>
				</div>

				<div className="light">
					<button onClick={setBudgetHandler} className="merge btnstyle">
						<div className="font">
							<strong>+ SET</strong>
						</div>
					</button>
					{/* <label class="form__label" for="button">+ Add</label> */}
				</div>
			</div>
			<br />

			<NewTable rows={recentTransactions} />
			<br />
			<br />
			<br />
			<h4>Deeper look at category-wise budget:</h4>

			<Category />
			<br />
			<br />
		</div>
	);
}

export default Budget;

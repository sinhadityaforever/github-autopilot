import React from 'react';
import './Category.css';

const inlineStyle = {
    height: '15px',
  };

const BUDGET_ITEMS = [
	{
		itemName: 'Food and drinks',
		budgeted: 5000,
		spent: 320
	},
	{
		itemName: 'EMI',
		budgeted: 5000,
		spent: 590
	},
	{
		itemName: 'House Rent',
		budgeted: 5000,
		spent: 2000
	},
	
	{
		itemName: 'Groceries',
		budgeted: 5000,
		spent: 500
	},
	{
		itemName: 'Entertainment',
		budgeted: 5000,
		spent: 200
	},
	{
		itemName: 'Subscriptions',
		budgeted: 5000,
		spent: 3000
	},
	{
		itemName: 'Video Games',
		budgeted: 5000,
		spent: 1200
	},
	{
		itemName: 'Miscellaneous',
		budgeted: 5000,
		spent: 1000
	},
];

const BudgetItem = (props) => {
	return (
		<section className="budget-item-container">
			<BudgetItemName {...props} />
			<AllocationItem {...props} />
			<ProgressBar {...props} />
		</section>
	);
};

const BudgetItemName = ({ itemName }) => {
	return (
		<div className="budget-item" title={itemName}>
			{itemName}
		</div>
	);
};

const AllocationItem = ({ spent, budgeted }) => {
	return (
		<div className="allocation">
			<span className={'money ' + (spent > budgeted ? 'over-budget' : '')}>
				₹{spent}
			</span>{' '}
			of <span class="money">₹{budgeted}</span>
		</div>
	);
};

const ProgressBar = ({ spent, budgeted }) => {
	return (
		<div className={'progress-bar ' + (spent > budgeted ? 'over-budget' : '')} style={inlineStyle}>
			<progress max={budgeted} value={spent}>
				{spent}
			</progress>
		</div>
	);
};

const Category = () => {
	return (<div>
		{BUDGET_ITEMS.map((item) => {
			return <BudgetItem {...item} />;
		})}
	</div>);
};

export default Category;

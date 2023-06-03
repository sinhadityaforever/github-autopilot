import React from 'react';
import './Category.css';

const BUDGET_ITEMS = [
	{
		itemName: 'Clothing',
		budgeted: 100,
		spent: 90
	},
	{
		itemName: 'Eating Out',
		budgeted: 300,
		spent: 59
	},
	{
		itemName: 'Video Games',
		budgeted: 100,
		spent: 200
	},
	{
		itemName: 'Luxury',
		budgeted: 200,
		spent: 70
	},
	{
		itemName: 'Toiletries',
		budgeted: 300,
		spent: 150
	},
	{
		itemName: 'Travelling',
		budgeted: 200,
		spent: 130
	}
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
		<div className={'progress-bar ' + (spent > budgeted ? 'over-budget' : '')}>
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

import React from 'react';
import './ExpenseCards.css';
import { categories, expenseCardData } from '../../Data/Data';

import Card from '../Card/Card';
import ExpenseCard from '../ExpenseCard/ExpenseCard';

const ExpenseCards = () => {
	return (
		<div className="Cards">
			{expenseCardData.map((card, id) => {
				return (
					<div className="parentContainer" key={id}>
						<ExpenseCard
							categories={categories}
							title={card.title}
							color={card.color}
							png={card.png}
						/>
					</div>
				);
			})}
		</div>
	);
};

export default ExpenseCards;

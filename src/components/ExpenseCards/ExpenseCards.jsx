import React from 'react';
import './ExpenseCards.css';
import { expenseCardData } from '../../Data/Data';

import Card from '../Card/Card';
import ExpenseCard from '../ExpenseCard/ExpenseCard';

const ExpenseCards = () => {
	return (
		<div className="Cards">
			{expenseCardData.map((card, id) => {
				return (
					<div className="parentContainer" key={id}>
						<ExpenseCard title={card.title} color={card.color} />
					</div>
				);
			})}
		</div>
	);
};

export default ExpenseCards;

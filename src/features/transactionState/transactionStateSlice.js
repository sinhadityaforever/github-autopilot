import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	categories: [
		{ id: 'food', value: 'Food', type: 'expense' },
		{ id: 'business', value: 'Business', type: 'income' },
		{ id: 'clothes', value: 'Clothes', type: 'expense' },
		{ id: 'education', value: 'Education', type: 'expense' },
		{ id: 'entertainment', value: 'Entertainment', type: 'expense' },
		{ id: 'health', value: 'Health', type: 'expense' },
		{ id: 'gifts', value: 'Gifts', type: 'expense' },
		{ id: 'investments', value: 'Investments', type: 'income' },
		{ id: 'other', value: 'Other', type: 'expense' },
		{ id: 'salary', value: 'Salary', type: 'income' },
		{ id: 'other', value: 'Other', type: 'income' }
	],

	transactions: [
		{
			name: 'Ordered Pizza',
			date: '2021-5-5',
			type: 'expense',
			category: 'Food',
			amount: 320
		},

		{
			name: 'Groceries',
			date: '2021-05-10',
			type: 'expense',
			category: 'Food',
			amount: 150
		},
		{
			name: 'Movie Tickets',
			date: '2021-05-15',
			type: 'expense',
			category: 'Entertainment',
			amount: 50
		},
		{
			name: 'Clothing Shopping',
			date: '2021-05-20',
			type: 'expense',
			category: 'Clothes',
			amount: 200
		},
		{
			name: 'Doctor',
			date: '2021-05-25',
			type: 'expense',
			category: 'Health',
			amount: 80
		},
		{
			name: 'Birthday Gift',
			date: '2021-05-28',
			type: 'expense',
			category: 'Gifts',
			amount: 30
		},

		{
			name: 'Freelance Work',
			date: '2021-05-05',
			type: 'income',
			category: 'Business',
			amount: 500
		},
		{
			name: 'Investment Dividends',
			date: '2021-05-12',
			type: 'income',
			category: 'Investments',
			amount: 300
		},
		{
			name: 'Salary',
			date: '2021-05-25',
			type: 'income',
			category: 'Salary',
			amount: 350
		},
		{
			name: 'Side Gig',
			date: '2021-05-29',
			type: 'income',
			category: 'Other',
			amount: 200
		}
	]
};

const transactionStateSlice = createSlice({
	name: 'transactionState',
	initialState,
	reducers: {
		addTransaction: (state, action) => {
			action.payload.amount = parseInt(action.payload.amount);
			state.transactions.push(action.payload);
		}
	}
});

export const { addTransaction } = transactionStateSlice.actions;
export default transactionStateSlice.reducer;

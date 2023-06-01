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
			name: 'Salary',
			date: '2021-5-5',
			type: 'income',
			category: 'Business',
			amount: 25000
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

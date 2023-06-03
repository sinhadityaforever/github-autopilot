import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	categories: [
		{ id: 0, value: 'Food', type: 'expense' },
		{ id: 1, value: 'Business', type: 'income' },
		{ id: 2, value: 'Clothes', type: 'expense' },
		{ id: 3, value: 'Education', type: 'expense' },
		{ id: 4, value: 'Entertainment', type: 'expense' },
		{ id: 5, value: 'Health', type: 'expense' },
		{ id: 6, value: 'Gifts', type: 'expense' },
		{ id: 7, value: 'Investments', type: 'income' },
		{ id: 8, value: 'Other', type: 'expense' },
		{ id: 9, value: 'Salary', type: 'income' },
		{ id: 10, value: 'Other', type: 'income' }
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
	],

	//Note: index 0 represents current year, index -1 represents previous year and so on
	lastFiveYearData: [
		{
			index: 0,
			income: 400000,
			expense: 200000
		},
		{
			index: -1,
			income: 400000,
			expense: 300300
		},
		{
			index: -2,
			income: 500000,
			expense: 400000
		},
		{
			index: -3,
			income: 600000,
			expense: 400000
		},
		{
			index: -4,
			income: 650000,
			expense: 400000
		}
	],

	//Note: index 0 represents current month, index -1 represents previous month and so on
	thisYearData: [
		{
			index: 0,
			income: 20000,
			expenditure: 10000
		},
		{
			index: -1,
			income: 43256,
			expenditure: 25817
		},
		{
			index: -2,
			income: 38423,
			expenditure: 18122
		},
		{
			index: -3,
			income: 28975,
			expenditure: 14659
		},
		{
			index: -4,
			income: 47042,
			expenditure: 21346
		},
		{
			index: -5,
			income: 24534,
			expenditure: 12562
		},
		{
			index: -6,
			income: 40218,
			expenditure: 19547
		},
		{
			index: -7,
			income: 34432,
			expenditure: 20137
		},
		{
			index: -8,
			income: 47212,
			expenditure: 28645
		},
		{
			index: -9,
			income: 32075,
			expenditure: 12784
		},
		{
			index: -10,
			income: 43297,
			expenditure: 22763
		},
		{
			index: -11,
			income: 42348,
			expenditure: 20578
		}
	],

	//Note: in data array, index 0 represents current month, index 1 represents previous month and so on
	sixMonthsCategoryData: [
		{
			categoryId: 0,
			data: [2456, 6387, 8124, 3291, 7019, 4567]
		},
		{
			categoryId: 2,
			data: [2125, 6534, 4698, 9234, 4856, 2015]
		},
		{
			categoryId: 3,
			data: [3178, 5456, 8932, 1823, 4567, 6591]
		},
		{
			categoryId: 4,
			data: [4612, 2913, 7234, 5201, 9854, 6547]
		},
		{
			categoryId: 5,
			data: [8521, 4079, 6031, 7264, 1923, 5423]
		},
		{
			categoryId: 6,
			data: [9321, 2876, 6112, 4015, 7542, 8436]
		},
		{
			categoryId: 8,
			data: [1567, 9502, 2718, 5413, 3647, 8069]
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
			if (action.payload.type === 'income') {
				state.lastFiveYearData[0].income += action.payload.amount;
				state.thisYearData[0].income += action.payload.amount;
			} else {
				state.lastFiveYearData[0].expense += action.payload.amount;
				state.thisYearData[0].expenditure += action.payload.amount;
				const categoryIdToUpdate = state.categories.find(
					(category) => category.value === action.payload.category
				).id;
				const categoryToUpdate = state.sixMonthsCategoryData.find(
					(category) => category.categoryId === categoryIdToUpdate
				);
				if (categoryToUpdate) {
					categoryToUpdate.data[0] += action.payload.amount;
				}
			}
		}
	}
});

export const { addTransaction } = transactionStateSlice.actions;
export default transactionStateSlice.reducer;

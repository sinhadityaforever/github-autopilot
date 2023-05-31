import React from 'react';
import Table from '../../components/Table/Table';
import './Dashboard.css';
import ExpenseCards from '../../components/ExpenseCards/ExpenseCards';
import CategoryChart from '../../components/CategoryChart/CategoryChart';
import ExpenseChart from '../../components/ExpenseChart/ExpenseChart';
import { useAppSelector } from '../../app/hooks';
const Dashboard = () => {
	const transactionsData = useAppSelector(
		(state) => state.transactionState.transactions
	);

	const tableTransactionsData = [...transactionsData];
	tableTransactionsData.sort((a, b) => new Date(b.date) - new Date(a.date));

	const recentTransactions = tableTransactionsData.slice(0, 9);

	return (
		<div className="Dashboard">
			<h1>Dashboard</h1>
			<div className="topDiv">
				<ExpenseCards />
				<ExpenseChart transactionsData={transactionsData} />
			</div>

			<div className="bottomDiv">
				<Table rows={recentTransactions} />
				<CategoryChart transactionsData={transactionsData} />
			</div>
		</div>
	);
};

export default Dashboard;

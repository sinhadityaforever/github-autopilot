import React from 'react';
import Table from '../../components/Table/Table';
import './Dashboard.css';
import ExpenseCards from '../../components/ExpenseCards/ExpenseCards';
import CategoryChart from '../../components/CategoryChart/CategoryChart';
import ExpenseChart from '../../components/ExpenseChart/ExpenseChart';
import { transactionsData } from '../../Data/Data';
const Dashboard = () => {
	return (
		<div className="Dashboard">
			<h1>Dashboard</h1>
			<div className="topDiv">
				<ExpenseCards />
				<ExpenseChart transactionsData={transactionsData} />
			</div>

			<div className="bottomDiv">
				<Table rows={transactionsData} />
				<CategoryChart transactionsData={transactionsData} />
			</div>
		</div>
	);
};

export default Dashboard;

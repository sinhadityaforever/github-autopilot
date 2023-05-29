import React from 'react';
import Table from '../../components/Table/Table';
import './Dashboard.css';
import ExpenseCards from '../../components/ExpenseCards/ExpenseCards';
import BudgetChart from '../../components/BudgetChart/BudgetChart';
const Dashboard = () => {
	return (
		<div className="Dashboard">
			<h1>Dashboard</h1>
			<div className="topDiv">
				<ExpenseCards />
			</div>

			<div className="bottomDiv">
				<Table />
				<BudgetChart />
			</div>
		</div>
	);
};

export default Dashboard;

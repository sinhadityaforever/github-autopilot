import React, { useEffect, useState } from 'react';
import Table from '../../components/Table/Table';
import './Dashboard.css';
import ExpenseCards from '../../components/ExpenseCards/ExpenseCards';
import CategoryChart from '../../components/CategoryChart/CategoryChart';
import ExpenseChart from '../../components/ExpenseChart/ExpenseChart';
import { useAppSelector } from '../../app/hooks';
const Dashboard = () => {
	const [isMobile, setIsMobile] = useState(false);
	useEffect(() => {
		const handleResize = () => {
			const isMobileView = window.matchMedia('(max-width: 768px)').matches;
			setIsMobile(isMobileView);
		};

		// Initial check on component mount
		handleResize();

		// Add event listener for window resize
		window.addEventListener('resize', handleResize);

		// Clean up the event listener on component unmount
		return () => {
			window.removeEventListener('resize', handleResize);
		};
	}, []);

	const transactionsData = useAppSelector(
		(state) => state.transactionState.transactions
	);

	const tableTransactionsData = [...transactionsData];
	tableTransactionsData.sort((a, b) => new Date(b.date) - new Date(a.date));

	const recentTransactions = tableTransactionsData.slice(0, 9);

	return (
		<div className="Dashboard">
			<h1 className="db-title">Dashboard</h1>
			<div className="topDivision">
				<ExpenseCards />

				<ExpenseChart transactionsData={transactionsData} />
				{isMobile && <CategoryChart transactionsData={transactionsData} />}
			</div>

			<div className="bottomDiv">
				<Table rows={recentTransactions} />
				{!isMobile && <CategoryChart transactionsData={transactionsData} />}
			</div>
		</div>
	);
};

export default Dashboard;

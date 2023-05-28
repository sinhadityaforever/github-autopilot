import React from 'react';
import Cards from '../../components/Cards/Cards';
import Table from '../../components/Table/Table';
import './Dashboard.css';
const Dashboard = () => {
	return (
		<div className="Dashboard">
			<h1>Dashboard</h1>
			<Cards />
			<Table />
		</div>
	);
};

export default Dashboard;

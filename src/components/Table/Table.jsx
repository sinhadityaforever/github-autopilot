import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import './Table.css';
import { Card } from '@mui/material';

const makeStyle = (type) => {
	if (type === 'income') {
		return {
			background: 'rgb(145 254 159 / 47%)',
			color: 'green'
		};
	} else if (type === 'expense') {
		return {
			background: '#ffadad8f',
			color: 'red'
		};
	}
};

export default function BasicTable({ rows }) {
	return (
		<div className="Table">
			<h3>Recent Transactions</h3>
			{rows && rows.length > 0 ? (
				<TableContainer
					component={Paper}
					style={{
						boxShadow: '0px 13px 20px 0px #80808029',
						maxHeight: '15rem'
					}}
				>
					<Table
						sx={{ minWidth: 650, maxHeight: '10rem' }}
						aria-label="simple table"
					>
						<TableHead>
							<TableRow>
								<TableCell>Transaction Name</TableCell>
								<TableCell>Amount</TableCell>
								<TableCell align="left">Date</TableCell>
								<TableCell align="left">Transaction Type</TableCell>
								<TableCell align="left">Category</TableCell>
							</TableRow>
						</TableHead>
						<TableBody style={{ color: 'white' }}>
							{rows.map((row) => (
								<TableRow
									key={row.name}
									sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
								>
									<TableCell component="th" scope="row">
										{row.name}
									</TableCell>
									<TableCell align="left">{row.amount}</TableCell>
									<TableCell align="left">{row.date}</TableCell>
									<TableCell align="left">
										<span className="status" style={makeStyle(row.type)}>
											{row.type}
										</span>
									</TableCell>
									<TableCell align="left">{row.category}</TableCell>
								</TableRow>
							))}
						</TableBody>
					</Table>
				</TableContainer>
			) : (
				<span>No Records Found</span>
			)}
		</div>
	);
}

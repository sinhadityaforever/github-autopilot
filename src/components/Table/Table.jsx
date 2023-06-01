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
			background: '#03DAC5',
			color: 'black'
		};
	} else if (type === 'expense') {
		return {
			background: '#BB86FC',
			color: 'black'
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
						style={{ backgroundColor: '#616161' }}
					>
						<TableHead>
							<TableRow>
								<TableCell sx={{ color: 'white' }}>Transaction Name</TableCell>
								<TableCell sx={{ color: 'white' }}>Amount</TableCell>
								<TableCell sx={{ color: 'white' }} align="left">
									Date
								</TableCell>
								<TableCell sx={{ color: 'white' }} align="left">
									Transaction Type
								</TableCell>
								<TableCell sx={{ color: 'white' }} align="left">
									Category
								</TableCell>
							</TableRow>
						</TableHead>
						<TableBody style={{ color: 'white' }}>
							{rows.map((row) => (
								<TableRow
									key={row.name}
									sx={{
										'&:last-child td, &:last-child th': { border: 0 }
									}}
								>
									<TableCell sx={{ color: 'white' }} component="th" scope="row">
										{row.name}
									</TableCell>
									<TableCell sx={{ color: 'white' }} align="left">
										{row.amount}
									</TableCell>
									<TableCell sx={{ color: 'white' }} align="left">
										{row.date}
									</TableCell>
									<TableCell sx={{ color: 'white' }} align="left">
										<span className="status" style={makeStyle(row.type)}>
											{row.type}
										</span>
									</TableCell>
									<TableCell sx={{ color: 'white' }} align="left">
										{row.category}
									</TableCell>
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

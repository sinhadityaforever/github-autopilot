import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import './NewTable.css';
import { Card } from '@mui/material';

const makeStyle = (type) => {
	if (type === 'delete') {
		return {
			background: '#f1807d',
			color: 'black'
		};
	// } else if (type === 'expense') {
	// 	return {
	// 		background: '#BB86FC',
	// 		color: 'black'
	// 	};
	 }
};

export default function BasicTable({ rows }) {
	return (
		<div className="Table">
			<h4>Category-wise Budget Table:</h4>
            <br/>
			{rows && rows.length > 0 ? (
				<TableContainer
					component={Paper}
					style={{
						boxShadow: '0px 90px 20px 0px #0000000d',
						maxHeight: '20rem'
					}}
				>
					<Table
						sx={{ minWidth: 650, maxHeight: '15rem' }}
						aria-label="simple table"
						style={{ backgroundColor: '#544d4d' }}
					>
						<TableHead>
							<TableRow>
								<TableCell sx={{ color: 'white' }}>Category</TableCell>
								<TableCell sx={{ color: 'white' }}>Amount (in ₹)</TableCell>
								{/* <TableCell sx={{ color: 'white' }} align="left">
									Date
								</TableCell> */}
								
								{/* <TableCell sx={{ color: 'white' }} align="left">
									Category
								</TableCell> */}
                                <TableCell sx={{ color: 'white' }} align="left">
									
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
										{row.category}
									</TableCell>
									<TableCell sx={{ color: 'white' }} align="left">
										{row.amount}
									</TableCell>
									{/* <TableCell sx={{ color: 'white' }} align="left">
										{row.date}
									</TableCell>
									<TableCell sx={{ color: 'white' }} align="left"> 
										{row.category}
									</TableCell> */}
                                    <TableCell sx={{ color: 'white' }} align="left" className='cursor'>
										<span className="status" style={makeStyle(row.type)}>
											{row.type}
										</span>
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

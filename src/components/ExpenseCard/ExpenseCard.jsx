import React from 'react';
import './ExpenseCard.css';
import { motion, AnimateSharedLayout } from 'framer-motion';
import {
	TextField,
	Button,
	Select,
	MenuItem,
	InputLabel,
	FormControl
} from '@mui/material';

// parent Card

const ExpenseCard = (props) => {
	return (
		<AnimateSharedLayout>
			<CompactCard param={props} />
		</AnimateSharedLayout>
	);
};

// Compact Card
function CompactCard({ param }) {
	const handleInputChange = (event) => {
		const value = event.target.value;
		const onlyNumbers = value.replace(/[^0-9]/g, ''); // Remove non-numeric characters
		event.target.value = onlyNumbers;
	};

	const Png = param.png;
	return (
		<motion.div
			className="CompactCard"
			style={{
				background: param.color.backGround,
				boxShadow: param.color.boxShadow
			}}
		>
			<div className="topDiv">
				<div className="title">
					<span>{param.title}</span>
				</div>
				<div className="topIcon">
					<Png size="2rem" />
				</div>
			</div>
			<div className="topInput">
				<div className="expense-name">
					<TextField label="Name" variant="standard"></TextField>
				</div>
				<div className="amount">
					<TextField
						variant="standard"
						type="text"
						label="Amount"
						onInput={handleInputChange}
						sx={{
							'& .MuiInputBase-root': {
								background: 'transparent',
								boxShadow: 'none'
							}
						}}
					/>
				</div>
			</div>
			<div className="bottomInput">
				<div className="date">
					<TextField
						variant="standard"
						type="date"
						onInput={handleInputChange}
						sx={{
							'& .MuiInputBase-root': {
								background: 'transparent',
								boxShadow: 'none'
							}
						}}
					/>
				</div>
				<div className="category">
					<FormControl fullWidth>
						<InputLabel id="category">Category</InputLabel>
						<Select
							required
							variant="standard"
							labelId="category"
							label="Category"
						>
							{/* <MenuItem value={'groceries'}>Groceries</MenuItem>
							<MenuItem value={'clothes'}>Clothes</MenuItem>
							<MenuItem value={'investments'}>Investment</MenuItem> */}
							{param.categories.map((category) => {
								return <MenuItem value={category}>{category}</MenuItem>;
							})}
						</Select>
					</FormControl>
				</div>
			</div>
			<Button className="add-button" variant="contained">
				Add
			</Button>
		</motion.div>
	);
}

// Expanded Card

export default ExpenseCard;

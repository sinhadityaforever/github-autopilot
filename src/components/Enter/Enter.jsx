import React, { useState } from 'react';
import './Enter.css';
import { motion, AnimateSharedLayout } from 'framer-motion';
import {
	TextField,
	Button,
	Select,
	MenuItem,
	InputLabel,
	FormControl
} from '@mui/material';
import { useAppDispatch, useAppSelector } from '../../app/hooks';

function Enter({ selectedCategory }) {
	const categories = useAppSelector(
		(state) => state.transactionState.categories
	);
	var allowedCategories = [...categories];
	allowedCategories = allowedCategories.filter(
		(category) => category.type !== 'income'
	);
	const defaultCategory = allowedCategories.filter(
		(category) => category.id === 8
	)[0];

	const [category, setCategory] = useState(defaultCategory);
	const categoryHandler = (event) => {
		setCategory(event.target.value);
		selectedCategory(event.target.value);
	};

	// const param = {
	//     things: ['Food and drinks','EMI','House Rent','Groceries','Entertainment','Subscriptions','Video Games','Miscellaneous','Savings','Salary','Gifts','Awards','Bonus','Others']
	// }

	return (
		<motion.div
			className="CCard"
			style={{
				background: 'inherit'
				// boxShadow: param.color.boxShadow
			}}
		>
			<div className="binput">
				<div className="categ">
					<FormControl fullWidth>
						<InputLabel id="cat">CATEGORY</InputLabel>
						<Select
							sx={{
								color: 'white'
							}}
							onChange={categoryHandler}
							required
							variant="standard"
							labelId="cat"
							label="Cat"
							value={category}
							style={{
								border: '2px solid hsl(171, 76%, 45%)',
								borderRadius: '9px',
								width: '165px',
								height: '53px'
							}}
						>
							{allowedCategories.map((category) => {
								return (
									<MenuItem key={category.id} value={category}>
										{category.value}
									</MenuItem>
								);
							})}
						</Select>
					</FormControl>
				</div>
			</div>
		</motion.div>
	);
}

export default Enter;

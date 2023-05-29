import React, { useState } from 'react';
import './ExpenseCard.css';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { motion, AnimateSharedLayout } from 'framer-motion';
import { UilTimes } from '@iconscout/react-unicons';
import Chart from 'react-apexcharts';
import { TextField, Typography, Button, Input } from '@mui/material';
import { UilCalendarAlt } from '@iconscout/react-unicons';
import DatePicker from 'react-date-picker';

// parent Card

const ExpenseCard = (props) => {
	return (
		<AnimateSharedLayout>
			<CompactCard param={props} />
		</AnimateSharedLayout>
	);
};

// Compact Card
function CompactCard({ param, setExpanded }) {
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
			</div>
			<div className="input">
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
				<div className="date">
					<UilCalendarAlt size="2rem" />
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

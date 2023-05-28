import React, { useState } from 'react';
import './Card.css';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { motion, AnimateSharedLayout } from 'framer-motion';
import { UilTimes } from '@iconscout/react-unicons';
import Chart from 'react-apexcharts';

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
	const Png = param.png;
	return (
		<motion.div
			className="CompactCard"
			style={{
				background: param.color.backGround,
				boxShadow: param.color.boxShadow
			}}
			layoutId="expandableCard"
			onClick={setExpanded}
		>
			<div className="radialBar">
				<CircularProgressbar
					value={param.barValue}
					text={`${param.barValue}%`}
				/>
				<span>{param.title}</span>
			</div>
			<div className="detail">
				<Png />
				<span>${param.value}</span>
				<span>Last 24 hours</span>
			</div>
		</motion.div>
	);
}

// Expanded Card

export default ExpenseCard;

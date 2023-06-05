import React, { useState } from 'react';
import './Sidebar.css';
import Logo from '../imgs/logo.png';
import { UilSignOutAlt } from '@iconscout/react-unicons';
import { SidebarData } from '../Data/Data';
import { UilBars } from '@iconscout/react-unicons';
import { motion } from 'framer-motion';
import { UilUniversity } from '@iconscout/react-unicons';

const Sidebar = ({ onChildProp }) => {
	const [selected, setSelected] = useState(0);

	const [expanded, setExpaned] = useState(true);

	const sidebarVariants = {
		true: {
			left: '0'
		},
		false: {
			left: '-60%'
		}
	};
	console.log(window.innerWidth);
	return (
		<>
			<div
				className="bars"
				style={expanded ? { left: '60%' } : { left: '5%' }}
				onClick={() => setExpaned(!expanded)}
			>
				<UilBars />
			</div>
			<motion.div
				className="sidebar"
				variants={sidebarVariants}
				animate={window.innerWidth <= 768 ? `${expanded}` : ''}
			>
				{/* logo */}
				<div className="logo">
					<UilUniversity size="3rem" />
					<span>
						Tracki<span>Fi</span>
					</span>
				</div>

				<div className="menu">
					{SidebarData.map((item, index) => {
						return (
							<div
								className={selected === index ? 'menuItem active' : 'menuItem'}
								key={index}
								onClick={() => {
									setSelected(index);
									console.log(selected);
									onChildProp(index);
								}}
							>
								<item.icon />
								<span>{item.heading}</span>
							</div>
						);
					})}

					<div className="menuItem">
						<UilSignOutAlt />
						<span>Logout</span>
					</div>
				</div>
			</motion.div>
		</>
	);
};

export default Sidebar;

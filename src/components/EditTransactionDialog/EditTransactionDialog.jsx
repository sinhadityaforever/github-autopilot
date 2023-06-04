import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import Slide from '@mui/material/Slide';
import { useAppSelector, useAppDispatch } from '../../app/hooks';
import { motion, AnimateSharedLayout } from 'framer-motion';
import {
	TextField,
	Select,
	MenuItem,
	InputLabel,
	FormControl
} from '@mui/material';
import { closeModal } from '../../features/transactionState/transactionStateSlice';
import './EditTransactionDialog.css';
const Transition = React.forwardRef(function Transition(props, ref) {
	return <Slide direction="up" ref={ref} {...props} />;
});

function EditTransactionDialog() {
	const dispatch = useAppDispatch();
	const open = useAppSelector((state) => state.transactionState.showEditModal);
	const categories = useAppSelector(
		(state) => state.transactionState.categories
	);
	var modalData = useAppSelector(
		(state) => state.transactionState.editModalData
	);
	const categoryData = [...categories];
	const categoriesToShow = categoryData.map((category) => category.value);
	const [editName, setEditName] = React.useState('');
	const [editAmount, setEditAmount] = React.useState(0);
	const [editCategory, setEditCategory] = React.useState('');
	const [editDate, setEditDate] = React.useState();

	React.useEffect(() => {
		setEditCategory(modalData.category);
		setEditName(modalData.name);
		setEditAmount(modalData.amount);

		setEditDate(modalData.date);
	}, [modalData]);
	const nameHandler = (e) => {
		setEditName(e.target.value);
	};

	const handleClose = () => {
		dispatch(closeModal());
	};
	const lightColor = {
		input: {
			color: 'white',
			'&::placeholder': {
				opacity: 1
			}
		},
		label: {
			color: 'white'
		}
	};

	return (
		<div>
			<Dialog
				open={open}
				// open={true}
				TransitionComponent={Transition}
				keepMounted
				onClose={handleClose}
				aria-describedby="alert-dialog-slide-description"
				PaperProps={{
					style: {
						borderRadius: '20px'
					}
				}}
			>
				<motion.div
					className="CompactCard"
					style={{
						background: '#616161'
					}}
				>
					<div className="topDiv">
						<div className="title">
							<span>Edit Transaction</span>
						</div>
						{/* <div className="topIcon">
					<Png size="2rem" />
				</div> */}
					</div>
					<div className="topInput">
						<div className="expense-name">
							<TextField
								sx={lightColor}
								variant="standard"
								value={editName}
								placeholder="Name"
								onChange={nameHandler}
							></TextField>
						</div>
						<div className="amount">
							<TextField
								variant="standard"
								type="text"
								placeholder="Amount"
								value={editAmount}
								//onInput={handleInputChange}
								sx={lightColor}
							/>
						</div>
					</div>
					<div className="bottomInput">
						<div className="date">
							<TextField
								variant="standard"
								type="date"
								inputProps={{
									//max: new Date().toISOString().split('T')[0],
									defaultValue: new Date().toISOString().split('T')[0]
									// min: prevSixMonthDate.toISOString().split('T')[0]
								}}
								// defaultValue={editDate}
								onInput={() => {}}
								sx={lightColor}
							/>
						</div>
						<div className="category">
							<FormControl fullWidth>
								<InputLabel id="category">Category</InputLabel>
								<Select
									sx={{
										color: 'white'
									}}
									//onChange={categoryHandler}
									required
									variant="standard"
									labelId="category"
									label="Category"
									value={editCategory}
								>
									{categoriesToShow.map((category) => {
										return <MenuItem value={category}>{category}</MenuItem>;
									})}
								</Select>
							</FormControl>
						</div>
					</div>
					<div className="button-container">
						<Button
							className="add-button"
							variant="contained"
							sx={{
								backgroundColor: '#5DE2B2',
								':hover': { backgroundColor: '#636363' }
							}}
						>
							Confirm
						</Button>
						<Button
							className="add-button"
							variant="contained"
							sx={{
								backgroundColor: '#DF4E64',
								':hover': { backgroundColor: '#636363' }
							}}
						>
							Delete
						</Button>
					</div>
				</motion.div>
			</Dialog>
		</div>
	);
}

export default EditTransactionDialog;

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
import { useAppDispatch } from '../../app/hooks';


function Enter(){

    const [category, setCategory] = useState("Others");
    const categoryHandler = (event) => {
		setCategory(event.target.value);
	};

    const param = {
        things: ['Food and drinks','EMI','House Rent','Groceries','Entertainment','Subscriptions','Video Games','Miscellaneous','Savings','Salary','Gifts','Awards','Bonus','Others']
    }

    return(<motion.div
        className="CCard"
        style={{
            background: 'inherit'
            // boxShadow: param.color.boxShadow
        }}>
    

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
							style={{border: '2px solid hsl(171, 76%, 45%)', borderRadius: '9px', width:'165px', height: '53px'}}
						>
							{/* <MenuItem value={'groceries'}>Groceries</MenuItem>
							<MenuItem value={'clothes'}>Clothes</MenuItem>
							<MenuItem value={'investments'}>Investment</MenuItem> */}
							{param.things.map((thing) => {
								return <MenuItem value={thing}>{thing}</MenuItem>;
							})}
						</Select>
					</FormControl>
				</div>
			</div>
            </motion.div>
        )
}

export default Enter;
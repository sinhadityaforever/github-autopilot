import { Button, TextField, Typography } from '@mui/material';
import React from 'react';
import './Profile.css';
import img1 from '../../imgs/img1.png';
import { UilUserCircle } from '@iconscout/react-unicons';
import { UilCameraChange } from '@iconscout/react-unicons';
function Profile() {
	return (
		<div className="profile">
			<div className="edit-profile">
				<Typography
					fontSize={'1.5rem'}
					fontWeight={'bold'}
					className="edit-profile-text"
				>
					Edit Profile
				</Typography>
				<div className="edit-profile-field-container">
					<div className="edit-profile-fields">
						<div className="left-field">
							<span>First Name</span>
							<TextField
								style={{ marginTop: '10px' }}
								placeholder="First Name"
								fullWidth
								variant="outlined"
							/>
						</div>
						<div className="right-field">
							<span>Last Name</span>
							<TextField
								style={{ marginTop: '10px' }}
								placeholder="Last Name"
								fullWidth
							/>
						</div>
					</div>
					<div className="edit-profile-fields">
						<div className="left-field">
							<span>Email Address</span>
							<TextField
								style={{ marginTop: '10px' }}
								placeholder="Email Address"
								fullWidth
								variant="outlined"
							/>
						</div>
						<div className="right-field">
							<span>Phone Number</span>
							<TextField
								style={{ marginTop: '10px' }}
								placeholder="Phone Number"
								fullWidth
							/>
						</div>
					</div>
					<div className="edit-profile-fields">
						<div className="left-field">
							<span>Address</span>
							<TextField
								style={{ marginTop: '10px' }}
								fullWidth
								variant="outlined"
							/>
						</div>
						{/* <div className="right-field">
							<TextField fullWidth />
						</div> */}
					</div>
					<div className="edit-profile-fields">
						<div className="left-field">
							<span>Country</span>
							<TextField
								style={{ marginTop: '10px' }}
								fullWidth
								variant="outlined"
							/>
						</div>
						<div className="right-field">
							<span>Postal Code</span>
							<TextField style={{ marginTop: '10px' }} fullWidth />
						</div>
					</div>
					<Button
						sx={{
							width: '7rem',
							alignSelf: 'flex-end',
							margin: '1rem'
						}}
						variant="contained"
					>
						Save
					</Button>
				</div>
			</div>
			<div className="view-profile">
				<div className="view-profile-container">
					<div className="profile-picture">
						<img src={img1} />

						<UilCameraChange cursor="pointer"></UilCameraChange>
						<input
							type="file"
							accept="image/*"
							// ref={fileInputRef}
							style={{ display: 'none' }}
							//onChange={handleFileChange}
						/>
					</div>
					<div className="name">
						<Typography fontWeight={'bold'} fontSize={'1.2rem'}>
							Mike Andrew
						</Typography>
					</div>
					<div className="detail-text">
						<Typography>Email: abc@email.com</Typography>

						<Typography>Phone: 1234567890</Typography>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Profile;

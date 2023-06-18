import { useEffect, useState } from 'react';
import './App.css';
import * as ReactDOM from 'react-dom/client';

import Budget from './pages/Budget/Budget';
import Dashboard from './pages/Dashboard/Dashboard';
import Insights from './pages/Insights/Insights';
import Profile from './pages/profile/Profile';
import Sidebar from './components/Sidebar';
import { useAppDispatch } from './app/hooks';
import { getUserInfoApi } from './api/apiCalls';
import { ToastContainer } from 'react-toastify';
import {
	login,
	setUserInfo
} from './features/transactionState/transactionStateSlice';
import PreloaderScreen from './pages/PreloaderScreen/PreloaderScreen';

import React from 'react';
import { useNavigate } from 'react-router-dom';

function App() {
	const navigate = useNavigate();
	const token = localStorage.getItem('token');
	const dispatch = useAppDispatch();
	const [isLoading, setIsLoading] = useState(true);

	useEffect(() => {
		if (token) {
			getUserInfoApi(token)
				.then((response) => {
					console.log('from App');
					dispatch(setUserInfo(response));
					dispatch(login());

					setIsLoading(false);
				})
				.catch((error) => {
					navigate('/login');
				});
		} else {
			navigate('/login');
		}
	}, [dispatch, navigate, token]);

	const [sidebarOption, setSidebarOption] = useState(0);
	const handleChildProp = (childProp) => {
		setSidebarOption(childProp);
	};

	const renderComponent = () => {
		switch (sidebarOption) {
			case 0:
				return <Dashboard />;
			case 1:
				return <Budget />;
			case 2:
				return <Insights />;
			case 3:
				return <Profile />;

			default:
				return <Dashboard />;
		}
	};

	return (
		<React.Fragment>
			{isLoading ? (
				<PreloaderScreen />
			) : (
				<div className="App">
					<ToastContainer />
					<div className="AppGlass">
						<Sidebar onChildProp={handleChildProp} />

						{renderComponent()}
					</div>
				</div>
			)}
		</React.Fragment>
	);
}

export default App;

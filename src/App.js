import { useEffect, useState } from 'react';
import { Provider } from 'react-redux';
import './App.css';
import * as ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Budget from './pages/Budget/Budget';
import Dashboard from './pages/Dashboard/Dashboard';
import Insights from './pages/Insights/Insights';
import Profile from './pages/profile/Profile';
import Sidebar from './components/Sidebar';
import { useAppDispatch, useAppSelector } from './app/hooks';
import Loginpage from './pages/Loginpage/Loginpage';
import Signup from './pages/Signup/Signup';
import { getUserInfoApi } from './api/apiCalls';
import { ToastContainer } from 'react-toastify';
import { login } from './features/transactionState/transactionStateSlice';

function App() {
	const token = localStorage.getItem('token');
	const dispatch = useAppDispatch();
	useEffect(() => {
		if (token) {
			const userInfo = async () => {
				const response = await getUserInfoApi(token);
				console.log(response);
			};

			userInfo();
			dispatch(login());
		}
	}, []);

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

	const router = createBrowserRouter([
		{
			path: '/',
			element: (
				<div className="App">
					<ToastContainer />
					<div className="AppGlass">
						<Sidebar onChildProp={handleChildProp} />

						{renderComponent()}
					</div>
				</div>
			)
		},
		{
			path: '/login',
			element: <Loginpage />
		},
		{
			path: '/signup',
			element: <Signup />
		}
	]);

	return <>{<RouterProvider router={router}></RouterProvider>}</>;
}

export default App;

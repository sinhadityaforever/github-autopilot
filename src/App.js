import { useState } from 'react';
import { Provider } from 'react-redux';
import './App.css';
import { store } from './app/store';
import Budget from './pages/Budget/Budget';
import Dashboard from './pages/Dashboard/Dashboard';
import Insights from './pages/Insights/Insights';
import Profile from './pages/profile/Profile';
import LoginPage from './pages/Loginpage/Loginpage';
import Sidebar from './components/Sidebar';
import { useAppSelector } from './app/hooks';

function App() {
	const isLoggedIn = useAppSelector(
		(state) => state.transactionState.isLoggedIn
	);
	const localStorageData = localStorage.getItem('isLoggedIn');

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
		<>
			{isLoggedIn || localStorageData ? (
				<div className="App">
					<div className="AppGlass">
						<Sidebar onChildProp={handleChildProp} />

						{renderComponent()}
					</div>
				</div>
			) : (
				<LoginPage />
			)}
		</>
	);
}

export default App;

import { useState } from 'react';
import { Provider } from 'react-redux';
import './App.css';
import { store } from './app/store';
import RightSide from './components/RigtSide/RightSide';
import Sidebar from './components/Sidebar';
import Budget from './pages/Budget/Budget';
import Dashboard from './pages/Dashboard/Dashboard';
import Insights from './pages/Insights/Insights';
import Profile from './pages/Profile/Profile';
import LoginPage from './pages/Loginpage/Loginpage';


function App() {
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
				case 3:
				return <LoginPage />;
			
			

			default:
				return <Dashboard />;
		}
	};

	return (
		<Provider store={store}>
			<div className="App">
				<div className="AppGlass">
					<Sidebar onChildProp={handleChildProp} />
					{/* <Dashboard /> */}
					{renderComponent()}
					{/* <RightSide /> */}
				</div>
			</div>
		</Provider>
	);
}

export default App;

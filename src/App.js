import { useState } from 'react';
import './App.css';
import RightSide from './components/RigtSide/RightSide';
import Sidebar from './components/Sidebar';
import Budget from './pages/Budget/Budget';
import Dashboard from './pages/Dashboard/Dashboard';
import Insights from './pages/Insights/Insights';

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
			default:
				return <Dashboard />;
		}
	};

	return (
		<div className="App">
			<div className="AppGlass">
				<Sidebar onChildProp={handleChildProp} />
				{/* <Dashboard /> */}
				{renderComponent()}
				{/* <RightSide /> */}
			</div>
		</div>
	);
}

export default App;

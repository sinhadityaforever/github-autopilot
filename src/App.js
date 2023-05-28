import './App.css';
import RightSide from './components/RigtSide/RightSide';
import Sidebar from './components/Sidebar';
import Dashboard from './pages/Dashboard/Dashboard';

function App() {
	return (
		<div className="App">
			<div className="AppGlass">
				<Sidebar />
				<Dashboard />
				<RightSide />
			</div>
		</div>
	);
}

export default App;

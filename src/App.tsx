import './style/App.scss';
import { Navigate, Routes, Route } from "react-router-dom";
import Header from './components/Header/Header';
import Home from './views/Home';

function App() {
	return (
		<div className="App">
			<Header />
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="*" element={<Navigate to="/" />} />
			</Routes>
		</div>
	);
}

export default App;
import './style/App.scss';
import { Navigate, Routes, Route } from "react-router-dom";
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Main from './views/Main';

function App() {
	return (
		<div className="App">
			<Header />
			<Routes>
				<Route path="/" element={<Main />} />
				<Route path="*" element={<Navigate to="/" />} />
			</Routes>
			<Footer />
		</div>
	);
}

export default App;
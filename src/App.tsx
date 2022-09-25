import React, { Fragment } from 'react';
import logo from './logo.svg';
import './style/App.scss';
import Home from './views/Home';
import Header from './components/Header/Header';
import { Routes, Route } from "react-router-dom";

function App() {
	return (
			<>
				<div className="App">
					<Header />
					<Routes>
						<Route path="/" element={<Home />} />
					</Routes>
				</div>
			</>
	);
}

export default App;

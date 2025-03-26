import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./components/Home";
import { Routes, Route } from "react-router";

const App = () => {
	return (
		<>
			<Navbar />
			<Routes>
				<Route path="/" element={<Home />} />
			</Routes>
			<Footer />
		</>
	);
};

export default App;

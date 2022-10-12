import React from "react";
import "./scss/app.scss";
import { Header } from "./components";
import { Cart, Home } from "./pages";
import { Routes, Route } from "react-router-dom";

function App({}) {
	return (
		<div className="wrapper">
			<Header />
			<div className="wrapper">
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/cart" element={<Cart />} />
				</Routes>
			</div>
		</div>
	);
}

export default App;

import { Route, Routes } from "react-router-dom";

import About from "./pages/About";
import Home from "./pages/Home";
import ForgotPassword from "./pages/forgotPassword";

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const App = () => (
	<div>
		<Routes>
			<Route path="/" element={<Home />} />
			<Route path="/about/this/site" element={<About />} />

			{/*Forgot Password Routes test Mode */}
			<Route path="/forgot-password" element={<ForgotPassword />} />
		</Routes>
		<ToastContainer />	
	</div>
	
);

export default App;

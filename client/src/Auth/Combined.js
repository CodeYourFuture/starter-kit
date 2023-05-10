import { Route, Routes } from "react-router-dom";

import About from "../pages/About";
import Home from "../pages/Home";
import ForgotPassword from "../Auth/forgotPassword";
import Login from "./Login";
import ResetPassword from "./ResetPassword";
import TutorProfile from "../Profiles/TutorProfile";
import LearnerProfile from "../Profiles/LearnerProfile";


import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css"

const App = () => (
	<div>
	<h1>TEST</h1>
		<Routes>

			<Route path="/" element={<Home />} />
			<Route path="/about/this/site" element={<About />} />

			{/*Forgot, login and reset PasswordRoutes test Mode */}
			<Route path="/forgot-password" element={<ForgotPassword />} />
			<Route path="/login" element={<Login />} />
			<Route path="/reset_password/:id/:token" element={<ResetPassword />} />
			<Route path="/TutorProfile" element={<TutorProfile />} />
			<Route path="/LearnerProfile" element={<LearnerProfile />} />

		</Routes>
		<ToastContainer />
	</div>

);

export default App;
// import { Route, Routes } from "react-router-dom";

// import About from "./pages/About";
// import Home from "./pages/Home";
// import ForgotPassword from "./Auth/forgotPassword";
// import Login from "./Auth/Login";
// import ResetPassword from "./Auth/ResetPassword";
// import TutorProfile from "./Profiles/TutorProfile";
// import LearnerProfile from "./Profiles/LearnerProfile";


// import { ToastContainer, toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
// import Navbar from "/Users/admin/Desktop/Newsletter-Signup/CodeCrafters-YIT/client/src/Components/Navbar.js";

// const App = () => (
// 	<div>
// 	<h1>TEST</h1>
// 		<Routes>
// 			<Route path="/" element={<Home />} />
// 			<Route path="/about/this/site" element={<About />} />

// 			{/*Forgot, login and reset PasswordRoutes test Mode */}
// 			<Route path="/forgot-password" element={<ForgotPassword />} />
// 			<Route path="/login" element={<Login />} />
// 			<Route path="/reset_password/:id/:token" element={<ResetPassword />} />
// 			<Route path="/TutorProfile" element={<TutorProfile />} />
// 			<Route path="/LearnerProfile" element={<LearnerProfile />} />

// 		</Routes>
// 		<ToastContainer />
// 	</div>

// );

// export default App;


import React from "react";
import {BrowserRouter, Routes, Route, NavLink} from "react-router-dom";

import Home from "./pages/Home";
import Login from "./Auth/Combined";

// import About from "./Components/About";
// import Contact from "./Components/Contact"
// import Portfolio from "./Components/Portfolio";



function App() {
  return (
    <div>

    <header>
     <nav>
     <h1>YIT</h1>
	 <NavLink to="/">Home</NavLink>
     <NavLink to="Login">Login</NavLink>

     {/* <NavLink to="About">About</NavLink>
     <NavLink to="Contact">Contact Us</NavLink>
     <NavLink to="Portfolio">Portfolio</NavLink> */}
     </nav>
    </header>
      <main>
      <Routes>
	  <Route path="/" element={<Home />} />
        <Route path="/Login" element={<Login />} />

          {/* <Route path="/About" element={<About />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/Portfolio" element={<Portfolio />} /> */}
        </Routes>
      </main>
    </div>
  );
}

export default App;


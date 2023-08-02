// import React from "react";
// import Navbar from "./Components/Navbar/Navbar";
// import "/Users/admin/Desktop/Newsletter-Signup/cyf-final-project-starter-kit/client/src/Components/Navbar/Navbar.css";
// import "./App.css";
// import Home from "./Components/Home Page/Home";

// const App = () => {
//   return (
// 	<div>
// 	<Home />
// 	</div>

//   );
// };

// export default App;

import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Components/Home Page/Home";
import TraineeLogin from "./Components/Login/TraineeLogin";
import AdminLogin from "./Components/Login/AdminLogin";
import TraineeDashboard from "./Components/TraineeDashboard";

const App = () => {
  return (
      <div>
        {/* Navbar or any other components can be included here */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/trainee-login" element={<TraineeLogin />} />
          <Route path="/admin-login" element={<AdminLogin />} />
          <Route path="/trainee-dashboard" element={<TraineeDashboard />} />
        </Routes>
      </div>
  );
};

export default App;




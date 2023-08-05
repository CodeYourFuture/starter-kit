
import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Components/Home Page/Home';
import TraineeLogin from './Components/Login/TraineeLogin';
import AdminLogin from './Components/Login/AdminLogin';
import TraineeTracker from './Components/Trainee Dashboard/TraineeTracker'
import Modules from './Components/Admin Dashboard/Modules';
import TrackProgress from './Components/Admin Dashboard/TrackProgress';
import DashboardHome from './Components/Admin Dashboard/DashboardHome';


const App = () => {
  return (
      <div>
        {/* Navbar or any other components can be included here */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/trainee-login" element={<TraineeLogin />} />
          <Route path="/admin-login" element={<AdminLogin />} />
          <Route path="/admin-dashboard" element={<DashboardHome />} />
          <Route path="/trainee-tracker" element={<TraineeTracker />} />
          <Route path="/update-modules" element={<Modules />} />
          <Route path="/track-trainee-progress" element={<TrackProgress />} />
        </Routes>
      </div>
  );
};

export default App;




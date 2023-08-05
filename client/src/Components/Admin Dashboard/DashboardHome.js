import React from 'react';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';
import { Link } from 'react-router-dom';


const DashboardHome = () => {
  return (
    <div>
<Navbar />
<div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '20vh' }}>
      <button style={{ width: '900px', padding: '10px', fontSize: '40px' }}>
        Hi Admin, welcome to your dashboard, lovely to see you!
      </button>
    </div>

{/* Log in buttons */}
<div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '30vh' }}>
      <div style={{ display: 'flex', gap: '100px' }}>
        {/* Use absolute paths starting with a forward slash */}
        <Link to="/update-modules">
          <button style={{ padding: '10px 20px', fontSize: '16px' }}>Update Modules</button>
        </Link>
        <Link to="/track-trainee-progress">
          <button style={{ padding: '10px 20px', fontSize: '16px' }}>Track Trainee Progress</button>
        </Link>
      </div>
    </div>
<Footer />
    </div>
  );
};

export default DashboardHome;
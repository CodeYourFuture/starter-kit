import React from 'react';
import { Link } from 'react-router-dom';

const LoinButtons = () => {
  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '30vh' }}>
      <div style={{ display: 'flex', gap: '100px' }}>
        {/* Use absolute paths starting with a forward slash */}
        <Link to="/trainee-login">
          <button style={{ padding: '10px 20px', fontSize: '16px' }}>Trainee Login</button>
        </Link>
        <Link to="/admin-login">
          <button style={{ padding: '10px 20px', fontSize: '16px' }}>Admin Login</button>
        </Link>
      </div>
    </div>
  );
};

export default LoinButtons;

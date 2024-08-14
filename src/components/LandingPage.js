import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './LandingPage.css';

function LandingPage() {
  const [role, setRole] = useState(null);
  const navigate = useNavigate();

  const handleRoleChange = (selectedRole) => {
    setRole(selectedRole);
  };

  const handleStartClick = () => {
    if (role === 'Admin') {
      navigate('/adminlogin');
    } else if (role === 'Staff') {
      navigate('/register');
    }
  };

  return (
    <div className="landingpage">
      <div className='landingleft'>
      <h1>Welcome to Managemate!</h1>
      <p>Your Ultimate solution for Staff Scheduling.</p>
      {/* <hr></hr> */}
      <h4>Choose your role and start managing your Schedule effectively.</h4>
      <br></br>
      <div className="rolecontainer">
        <h3>Select Role:</h3>
        <div className="roleoptions">
          <div id='roles'
            className={`roleoption ${role === 'Staff' ? 'selected' : ''}`}
            onClick={() => handleRoleChange('Staff')}
          >
            Staff
          </div>
          <div id='roles'
            className={`roleoption ${role === 'Admin' ? 'selected' : ''}`}
            onClick={() => handleRoleChange('Admin')}
          >
            Admin
          </div>
        </div>
      </div>
      <br></br>
      <button 
        className="startbutton" 
        onClick={handleStartClick}
        disabled={!role} 
      >
        Start Now
      </button>
      </div>
      <div className='landingimage'>
      </div>
    </div>
  );
}

export default LandingPage;

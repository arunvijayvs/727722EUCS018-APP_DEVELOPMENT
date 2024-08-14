import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import TextField from '@mui/material/TextField';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import Button from '@mui/material/Button';
import './RegisterForm.css';
import axios from 'axios';

const departments = [
  'Information Technology',
  'Human Resources',
  'Finance',
  'Marketing',
  'Operations'
];

const RegisterForm = () => {
  const [email, setEmail] = useState('');
  const [firstName, setFirstname] = useState('');
  const [lastName, setLastname] = useState('');
  const [password, setPassword] = useState('');
  const [confirmpass, setConfirm] = useState('');
  const [phoneNo, setPhone] = useState('');
  const [department, setDepartment] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [emailError, setEmailError] = useState('');
  const [phoneError, setPhoneError] = useState('');
  const navigate = useNavigate();

  const handlePasswordChange = (event) => {
    setConfirm(event.target.value);
    if (event.target.value !== password) {
      setPasswordError('Passwords do not match');
    } else {
      setPasswordError('');
    }
  };

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validatePhone = (phoneNo) => {
    return phoneNo.length === 10 && /^\d+$/.test(phoneNo);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // Validation
    if (!validateEmail(email)) {
      setEmailError('Invalid email address');
      return;
    } else {
      setEmailError('');
    }

    if (!validatePhone(phoneNo)) {
      setPhoneError('Phone number must be 10 digits');
      return;
    } else {
      setPhoneError('');
    }

    if (password.length < 8 || !/[A-Z]/.test(password) || !/[!@#$%^&*]/.test(password)) {
      setPasswordError('Password must be at least 8 characters long, contain an uppercase letter and a special symbol');
      return;
    } else {
      setPasswordError('');
    }

    const userdata = {
      firstName: firstName,
      lastName: lastName,
      email: email,
      password: password,
      phoneNo: phoneNo,
      department: department,
    };

    console.log("UserData: ", userdata);

    axios.post('http://localhost:8080/api/users/register', userdata)
      .then(res => {
        console.log("added",res.data);
        navigate('/login');
      })
      .catch(error => {
        console.log("Something went wrong " + error);
      });
  };

  return (
    <div id='RegisterBody'>
      <div className='registerleft'>
      </div>
      <div className="RegisterContainer">
        <h1 id='RegisterTitle'>Sign Up</h1>
        <hr></hr>
        <br></br>
        <form onSubmit={handleSubmit}>
          <div className="form-row">
            <div>
              <TextField
                id="firstName"
                label="First Name"
                variant="outlined"
                value={firstName}
                onChange={(e) => setFirstname(e.target.value)}
                required
              />
            </div>
            <div>
              <TextField
                id="lastName"
                label="Last Name"
                variant="outlined"
                value={lastName}
                onChange={(e) => setLastname(e.target.value)}
                required
              />
            </div>
          </div>
          <div>
            <TextField
              id="email"
              label="Email"
              variant="outlined"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              error={!!emailError}
              helperText={emailError}
            />
          </div>
          <div>
            <TextField
              id="phoneNo"
              label="Phone Number"
              variant="outlined"
              type="tel"
              value={phoneNo}
              onChange={(e) => setPhone(e.target.value)}
              required
              error={!!phoneError}
              helperText={phoneError}
            />
          </div>
          <div>
            <TextField
              id="password"
              label="Password"
              variant="outlined"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              error={!!passwordError}
              helperText={passwordError}
            />
          </div>
          <div>
            <TextField
              id="confirmpass"
              label="Confirm Password"
              variant="outlined"
              type="password"
              value={confirmpass}
              onChange={handlePasswordChange}
              required
              error={!!passwordError}
              helperText={passwordError}
            />
          </div>
          <div>
            <FormControl variant="outlined">
              <InputLabel id="department-label">Department</InputLabel>
              <Select
                labelId="department-label"
                id="department"
                value={department}
                onChange={(e) => setDepartment(e.target.value)}
                label="Department"
                required
              >
                {departments.map((dept) => (
                  <MenuItem key={dept} value={dept}>
                    {dept}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </div>
          <br></br>
          <Button type='submit' variant="contained" color="primary">REGISTER</Button>
          <h4>Already an User? <a onClick={() => navigate('/login')}>Login</a></h4>
        </form>
      </div>
    </div>
  );
};

export default RegisterForm;
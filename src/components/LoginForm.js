import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import './LoginForm.css';
import axios from 'axios';

const LoginForm = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (event) => {
        event.preventDefault();
        
        try {
            const response = await axios.get('http://localhost:8080/staffs');
            const users = response.data;
            console.log("Fetched Users: ", users); 

            const user = users.find(
                (user) => user.email === email && user.password === password
            );
            console.log("Matched User: ", user); 

            if (user) {
                navigate('/staffdash'); 
            } else {
                setError('Invalid email or password');
            }
        } catch (error) {
            setError('An error occurred. Please try again.');
            console.error("Error fetching users: ", error); 
        }
    };

    return (
        <div id='LoginBody'>
            <div className='loginleft'>
                
            </div>
            <div className='LoginContainer'>
                <h1 id='LoginTitle'>Login</h1>
                <hr />
                <form onSubmit={handleSubmit}>
                    <TextField
                        id="email"
                        label="Email"
                        variant="outlined"
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        fullWidth
                        required
                        error={!!error}
                        helperText={error}
                    />
                    <br></br>
                    <TextField
                        id="password"
                        label="Password"
                        variant="outlined"
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        fullWidth
                        required
                        error={!!error}
                        helperText={error}
                        />
                    <br></br>
                    <br></br>
                    <Button type='submit' variant="contained" color="primary">Login</Button>
                    <h4>New User? <a onClick={() => navigate('/register')}>Register</a></h4>
                </form>
            </div>
        </div>
    );
};

export default LoginForm;

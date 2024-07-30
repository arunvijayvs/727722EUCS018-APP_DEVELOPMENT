import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import './LoginForm.css';

const LoginForm = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleSubmit = (event) => {
        event.preventDefault();

        const adminEmail = 'admin@managemate.com';
        const adminPassword = 'managemate123';

        if (email === adminEmail && password === adminPassword) {
            navigate('/admindash');
        } else {
            setError('Invalid email or password');
        }
    };

    return (
        <div id='LoginBody'>
            <div className='loginleft'></div>
            <div className='LoginContainer'>
                <h1 id='LoginTitle'>Admin Login</h1>
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
                    <br />
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
                    <br />
                    <br />
                    <Button type='submit' variant="contained" color="primary">Login</Button>
                </form>
            </div>
        </div>
    );
};

export default LoginForm;

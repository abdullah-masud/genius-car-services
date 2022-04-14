import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Register.css'

const Register = () => {
    const navigate = useNavigate();

    const navigateLogin = () => {
        navigate('/login')
    }


    const handleRegister = event => {
        event.preventDefault();
    }

    return (
        <div className='register-form'>
            <h2 className='text-center mb-4 text-primary'>please register</h2>
            <form onSubmit={handleRegister}>
                <input type="text" name="name" id="2" placeholder='Your Name' autoComplete='on' />

                <input type="email" name="email" id="1" placeholder='Email' required autoComplete='on' />

                <input type="password" name="password" id="2" placeholder='Password' required autoComplete='one' />

                <input type="submit" value="Register" />
            </form>
            <p>Already have an account? <Link to="/login" className='text-danger text-decoration-none' onClick={navigateLogin}>Please Login</Link></p>
        </div>
    );
};

export default Register;
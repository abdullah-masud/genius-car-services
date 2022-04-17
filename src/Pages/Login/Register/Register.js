import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Register.css'
import { useCreateUserWithEmailAndPassword, useUpdateProfile } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import SocialLogin from '../SocialLogin/SocialLogin';
import Loading from '../../Shared/Loading/Loading';

const Register = () => {
    const [agree, setAgree] = useState(false);
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });

    const [updateProfile, updating, updateError] = useUpdateProfile(auth);

    const navigate = useNavigate();

    if (loading || updating) {
        return <Loading />
    }

    const navigateLogin = () => {
        navigate('/login')
    }


    const handleRegister = async event => {
        event.preventDefault();
        const name = event.target.name.value;
        const email = event.target.email.value;
        const password = event.target.password.value;

        await createUserWithEmailAndPassword(email, password);
        await updateProfile({ displayName: name });
        console.log('updated profile')
        navigate('/home')

    }

    if (user) {
        console.log.log(user)
    }

    return (
        <div className='register-form'>
            <h2 className='text-center mb-4 text-primary'>please register</h2>
            <form onSubmit={handleRegister}>
                <input type="text" name="name" id="2" placeholder='Your Name' autoComplete='on' />

                <input type="email" name="email" id="1" placeholder='Email' required autoComplete='on' />

                <input type="password" name="password" id="2" placeholder='Password' required autoComplete='one' />

                <input onClick={() => setAgree(!agree)} type="checkbox" name="terms" id="terms" />
                <label className={`ps-2 ${agree ? 'text-primary' : 'text-danger'}`} htmlFor="Terms">Accept genius car terms and conditions</label>

                <input disabled={!agree} className='btn btn-primary' type="submit" value="Register" />
            </form>
            <p>Already have an account? <Link to="/login" className='text-danger text-decoration-none' onClick={navigateLogin}>Please Login</Link></p>
            <SocialLogin />
        </div>
    );
};

export default Register;
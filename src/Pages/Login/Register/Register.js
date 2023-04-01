import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Register.css';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';



const Register = () => {
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth);

    const navigate = useNavigate();

    const navigateLogin = () => {
        navigate('/login');
    }

    const handleRegister = event => {
        event.preventDefault();
        const name = event.target.name.value;
        const email = event.target.email.value;
        const password = event.target.password.value;

        createUserWithEmailAndPassword(email, password);
        console.log(email, password);
    }

    return (
        <div className='register-form'>
            <h2>Please Register</h2>
            <form onSubmit={handleRegister}>
                <input type="text" name="name" id="" placeholder='your Name' />

                <input type="email" name="email" id="" placeholder='Email Address' required />

                <input type="password" name="password" id="" placeholder='your password' required />
                <input type="submit" value="Register" />
            </form>
            <p>Already have an accounnt ?<Link to='/login' className='text-danger text-decoration-none'> <b onClick={navigateLogin}>Please LogIn</b></Link></p>
        </div>
    );
};

export default Register;
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Register.css';
import { useCreateUserWithEmailAndPassword, useUpdateProfile } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import SocialLogin from '../Social.Login/SocialLogin';
import Loading from '../../Shareed/Loading/Loading';



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

    const navigateLogin = () => {
        navigate('/login');
    }
    if (loading, updating) {
        return <Loading></Loading>
    }

    // if (user) {
    //     navigate('/home');
    // }
    if (user) {
        console.log(user);
    }

    const handleRegister = async (event) => {
        event.preventDefault();
        const name = event.target.name.value;
        const email = event.target.email.value;
        const password = event.target.password.value;
        // const agree = event.target.terms.checked;

        await createUserWithEmailAndPassword(email, password);
        const success = await updateProfile({ displayName: name });
        if (success) {
            alert('Updated profile');
            navigate('/home');
        }
    }

    return (
        <div className='register-form'>
            <h2>Please Register</h2>
            <form onSubmit={handleRegister}>
                <input type="text" name="name" id="" placeholder='your Name' />

                <input type="email" name="email" id="" placeholder='Email Address' required />

                <input type="password" name="password" id="" placeholder='your password' required />
                <input onClick={() => setAgree(!agree)} type="checkbox" name="terms" id="terms" />
                {/* <label className={agree ? "ps-2 text-primary" : "ps-2 text-danger"} htmlFor="terms">Accept Genius Car Terms and Conditions</label> */}
                <label className={`ps-2 ${agree ? '' : 'text-danger'}`} htmlFor="terms">Accept Genius Car Terms and Conditions</label>
                <input
                    disabled={!agree}
                    className='btn btn-warning w-50 mx-auto d-block rounded-pill mt-3'
                    type="submit"
                    value="Register" />
            </form>
            <p>Already have an accounnt ?<Link to='/login' className='text-primary text-decoration-none'> <b onClick={navigateLogin}>Please LogIn</b></Link></p>

            <SocialLogin></SocialLogin>
        </div>
    );
};

export default Register;
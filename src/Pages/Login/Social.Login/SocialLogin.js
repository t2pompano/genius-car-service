import React from 'react';
import google from '../../../images/icon/google-icon-logo-png-transparent.png';
import facebook from '../../../images/icon/facebook.png';
import Github from '../../../images/icon/github.png';
import { useSignInWithGithub, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import { useNavigate } from 'react-router-dom';
import Loading from '../../Shareed/Loading/Loading';

const SocialLogin = () => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    const [signInWithGithub, user1, gitLoading, gitError] = useSignInWithGithub(auth);
    const navigate = useNavigate();

    let errorElement;
    if (loading || gitLoading) {
        return <Loading></Loading>
    }

    if (error || gitError) {
        errorElement =
            <p className='text-danger'>Error: {error?.message} {gitError?.message}</p>

    }

    if (user || user1) {
        navigate('/home');
    }
    return (
        <div>
            <div className='d-flex align-item-center'>
                <div style={{ height: '1px' }} className='bg-primary w-50 mt-3'></div>
                <p className='px-3'>or</p>
                <div style={{ height: '1px' }} className='bg-primary w-50 mt-3'></div>
            </div>
            {errorElement}
            <div >
                <button
                    onClick={() => signInWithGoogle()}
                    className='btn btn-info w-50 d-block mx-auto my-3 rounded-pill'>
                    <img style={{ width: '30px', }} src={google} alt="" />
                    <span className='px-2'>Google SignIn</span>
                </button>
                <button className='btn btn-info w-50 d-block mx-auto my-3 rounded-pill'>
                    <img style={{ width: '30px', }} src={facebook} alt="" />
                    <span className='px-2'>Facebook SignIn</span>
                </button>
                <button
                    onClick={() => signInWithGithub()}
                    className='btn btn-info w-50 d-block mx-auto my-3 rounded-pill'>
                    <img style={{ width: '30px', }} src={Github} alt="" />
                    <span className='px-2'>Github SignIn</span>
                </button>
            </div>
        </div>

    );
};

export default SocialLogin;
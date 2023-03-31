import React from 'react';
import notfound from '../../../images/404.jpg';

const NotFound = () => {
    return (
        <div>
            <h2 className='text-primary mx-auto'>All Mechanics are right now sleeping</h2>
            <img src={notfound} alt="" />
        </div>
    );
};

export default NotFound;
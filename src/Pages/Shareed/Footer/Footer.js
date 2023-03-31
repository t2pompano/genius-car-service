import React from 'react';

const Footer = () => {
    const today = new Date();
    const year = today.getFullYear();
    return (
        <footer className='mt-5 bg-dark m-5'>
            <div gap={3} className='text-light col-md-5 mx-auto '>
                <h2>This is footer</h2>
                <p>copyright @ {year}</p>
            </div>
        </footer>
    );
};

export default Footer;
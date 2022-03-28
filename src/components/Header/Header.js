import React from 'react';
import Navbar from '../Navbar/Navbar';

const Header = () => {
    return (
        <div>
            <Navbar></Navbar>
            <h2 className='text-4xl'>Save your money</h2>
            <p>By giving your money to me!!!</p>
        </div>
    );
};

export default Header;
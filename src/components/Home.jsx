import React from 'react';
import { Link } from 'react-router';

const Home = () => {
    return (
        <div>
            Hello
            <Link to={'/add-user'}><button className='btn'>Add User</button></Link>
        </div>
    );
};

export default Home;
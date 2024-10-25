import React from 'react';
import Header from '../Shared/Navbar/Header/Header';
import Navbar from '../Shared/Navbar/Navbar';
import Leftsidenav from '../Shared/Leftside/Leftsidenav';
import Rightsidenav from '../Shared/Rightsidenav/Rightsidenav';
import Breaking from './Breaking';

const Home = () => {
    return (
        <div>
            <Header></Header>
            <Breaking></Breaking>
            <Navbar></Navbar>
            
            <div className='grid grid-cols-1 md:grid-cols-4 gap-6'>
                <div className='border'>
                    <Leftsidenav></Leftsidenav>
                </div>
                <div className='col-span-2 border-spacing-5'>
                    <h2 className='text-4xl border'>News coming soon...</h2>
                </div>
                <div className='border'>
                    <Rightsidenav></Rightsidenav>
                </div>
            </div>
            
        </div>
    );
};

export default Home;
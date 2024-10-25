import React from 'react';
import logo from '../../../.././assets/logo.png'
import moment from 'moment';
const Header = () => {
    return (
        <div className='text-center'>
           <img className='mx-auto mt-5 ' src={logo} alt="" srcset="" />
           <p className='text-3xl mx-2'>Journalism Without Fear or Favour</p>
           <p className='text-xl'>{moment().format("dddd, MMMM Do, YYYY")}</p>
        </div>
    );
};

export default Header;
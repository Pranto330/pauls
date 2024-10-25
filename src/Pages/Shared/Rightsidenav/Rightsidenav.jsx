import React from 'react';
import { FaGoogle,FaGithub,FaFacebookF,  FaTwitter } from "react-icons/fa";
import { IoLogoInstagram } from "react-icons/io5";
import qzone1 from '../../../assets/assets/qzone1.png'
import qzone2 from '../../../assets/assets/qzone2.png'
import qzone3 from '../../../assets/assets/qzone3.png'

const Rightsidenav = () => {
    return (
        <div>
           <div className='p-4 space-y-3 mb-6'>
            <h2 className='text-3xl'>Login With</h2>
            <button className="btn btn-outline w-full">
            <FaGoogle />
              Login with google
            </button>
            <button className="btn btn-outline w-full">
            <FaGithub />
            Login with github
            </button>
            </div>
            <div className='p-4  mb-6'>
            <h2 className='text-3xl mb-4'>Find Us On</h2>
              <a className='p-4 flex text-lg border items-center rounded-t-lg' href="">
              <FaFacebookF className='mr-3'></FaFacebookF>
              <span>Facebook</span>
              </a>
              <a className='p-4 flex text-lg border-x  items-center ' href="">
              <FaTwitter className='mr-3'></FaTwitter>
              <span>Twitter</span>
              </a>
              <a className='p-4 flex text-lg border items-center rounded-b-lg ' href="">
              <IoLogoInstagram className='mr-3'></IoLogoInstagram>
              <span>Instagram</span>
              </a>
              
            </div>
            <div className='p-4  mb-6'>
            <h2 className='text-3xl mb-4'>Q Zone</h2>
            <img src={qzone1} alt="" srcset="" />
            <img src={qzone2} alt="" srcset="" />
            <img src={qzone3} alt="" srcset="" />
              
              
            </div>
          </div>  
             
          
       
    );
};

export default Rightsidenav;
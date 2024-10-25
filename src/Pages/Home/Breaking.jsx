import React from 'react';
import Marquee from "react-fast-marquee";
import { Link } from 'react-router-dom';

const Breaking = () => {
    return (
        <div className='flex'>
           <button className="btn btn-secondary">Breaking News</button>
           <Marquee pauseOnHover={true} speed={100}>
              <Link className='mr-12' to='/'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, totam!...</Link>
              <Link className='mr-12' to='/'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, totam!...</Link>
              <Link className='mr12' to='/'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, totam!...</Link>
           </Marquee>
        </div>
    );
};

export default Breaking;
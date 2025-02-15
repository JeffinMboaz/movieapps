import React from 'react';
import Posters from './homecontents/Posters';
import './homecontents/Homepg.css';

function Homepg() {
  return (
    <div className=' container-fluid bg-dark  py-3'>
      <div className=' bg-dark text-center rounded my-5 p-2'>
        <img 
          src="https://nashuproar.org/wp-content/uploads/2023/10/marvel-1200x675.png"
          alt="Marvel studios"
          className='img-fluid' 
        />
      </div>
      <div className='bg-dark text-center'>
        <div className='w-50 m-auto bg-secondary rounded'>
          <marquee> <h4 className=' text-warning'>Movies&Tv shows </h4></marquee>
        </div>
        
        <Posters />
      </div>
    </div>
  );
}
export default Homepg;
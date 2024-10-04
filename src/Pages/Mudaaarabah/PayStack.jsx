import React from 'react';
import payStack_logo from '../../images/paystack_img.png'
import { Link } from 'react-router-dom';

const PayStack = () => {
  return (
    <div>

        <div className='mx-auto w-75 text-center my-5'>
            <Link to='/mudaarabah'>
            
            <img src={payStack_logo} alt="" 
            style={{width:'300px'}}/>

            </Link>
        </div>
    </div>
  )
}

export default PayStack
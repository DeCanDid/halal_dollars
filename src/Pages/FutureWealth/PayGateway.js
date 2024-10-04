import React from 'react';
import PayStack from '../Mudaaarabah/PayStack'
import payStack_logo from '../../images/paystack_img.png'
import { Link } from 'react-router-dom';

const PayGateway = () => {
  return (
    <>
        {/* <Link to='/futureLogged'>
            <PayStack  />
        </Link> */}

        <div className='mx-auto w-75 text-center my-5'>
            <Link to='/futureLogged'>
            
            <img src={payStack_logo} alt="" 
            style={{width:'300px'}}/>

            </Link>
        </div>
    </>
  )
}

export default PayGateway
import React, { useState }  from 'react';
import { useFormik } from 'formik';
import '../FutureWealth/Future.css'

import plane from './icons/bx-paper-plane.svg'
import paln from './icons/paper-plane-svgrepo-com.svg'
import { Link, useNavigate } from 'react-router-dom';

function Future() {
    let [show, setShow] = useState(false)
  let navigate = useNavigate()
  const formik = useFormik({
    initialValues: {
      selectField: '',
      selectFiled2: ''
    },
    onSubmit: (action,values) => {
      // navigate('/payment')
      console.log(values.selectField);
      console.log(values.selectFiled2);
      
       // access the select field's value here
    },
  });
  let change = ()=>{
    setShow(!show)
  }
  let closed = (e)=>{
    setShow(false)
  }
  let dontgo =(e)=>{
    e.stopPropagation()
  }
  return (
    <div className='futurewrapper'>
 <h3>Halal Dollars FutureWealth</h3>
      <p>In 2023, we launched the Halal Dollars Mudaarabah programme, which quickly gained popularity. Inspired by its success, we sought to make it more inclusive and impactful, aiming to eradicate poverty among Muslims. With the guidance of Almighty Allah, we introduce the Halal Dollars FutureWealth programme.
FutureWealth allows investors to contribute a fixed monthly amount for one year, which is then used for Mudaarabah investments. Profits are saved and added to the initial investment for ten years. After this period, investors can receive their profit share annually or withdraw completely.
While Mudaarabah helps our investors maintain their monthly financial needs, FutureWealth is aimed at eradicating generational poverty and providing security for the future.
Investors can expect significant returns on their investments after the ten-year period. For example, with a minimum monthly investment of N5,000, you could accumulate over 10 million naira in your bank account after ten years. 
Transparency is a core principle; you will be able to monitor the progress of your investment and the actual amount accrued at the end of each year.
FutureWealth is designed to secure the future of our children, ensure the well-being of our parents, provide support for our siblings, and offer security for our old age. By participating in this programme, you are not only investing in your financial future but also in the prosperity and stability of your family and community.</p>

    <div className="navfuture">
        <button>Learn More</button>
        <button onClick={change}>Join Now</button>
    </div>
    {/* <select name="" id="">
      <option value="ddd">kkk</option>
      <option value="ddd">sss</option>
      <option value="ddd">kk</option>
      <option value="ddd">kaakk</option>
    </select> */}
{
  show?<div className='popwrapper' onClick={closed}>
    {/* <button onClick={closed}>X</button> */}
    <div className='popInner' onClick={dontgo}>
    <form className='future_form' onSubmit={formik.handleSubmit}>
    <div className='person'>
      <label>Who do you want to pay for?</label>
      <select name="selectField"
        value={formik.values.selectField}
        onChange={formik.handleChange} >
          {/* <option selected disabled>--select a person--</option> */}
        <option value="Adeolu Mubaaraq">Myself - Adeolu Mubaaraq</option>
        <option value="kola Adenuga">Kola Adenuga</option>
        <option value="Femi Omotayo">Femi omotayo</option>
      </select>
    </div>
    <div className='amount'>
      <label>Amount </label>
      <select name='selectFiled2' value={formik.values.selectFiled2}
        onChange={formik.handleChange}>
        <option value="₦5,000">₦5,000</option>
        <option value="₦10,000">₦10,000</option>
        <option value="₦20,000">₦20,000</option>
      </select>
    </div>
    <div className='proceed'>
      {/* <img src={plane} alt=''/> */}
      
      <Link to='/pay_stack' style={{
        color:'#fff', textDecoration:'none'
      }}>

    <button type='submit'> 
      
      <img src={plane} alt=''/>
      Proceed to Payment</button>
      </Link> 

    </div>
    </form>
    </div>
   </div>
  
  
  
  
  : ""
}
    </div>
  )
}

export default Future
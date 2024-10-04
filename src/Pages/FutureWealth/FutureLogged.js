import React, { useState }  from 'react';
import '../FutureWealth/Future.css'
import { useFormik } from 'formik';
import card from './icons/credit-card-regular.svg'
import { Link } from 'react-router-dom'
import History from './History.json'
import { useNavigate } from 'react-router-dom';
import plane from './icons/paper-plane-solid.svg'
// import './App.css'
import user from './icons/user-plus-solid.svg'
import dot from './icons/circle-solid.svg'
import angleright from './icons/angle-right-solid.svg'

function FutureLogged() {
    let [show, setShow] = useState(false)
    let [show2, setShow2] = useState(false)
  let navigate = useNavigate()
  const formik = useFormik({
    initialValues: {
      selectField: '',
      selectFiled2: ''
    },
    onSubmit: (action,values) => {
      // action.stopPropagation()
      navigate('/payment')
      console.log(values.selectField);
      console.log(values.selectFiled2);
       // access the select field's value here
    },
  });
  const formik2 = useFormik({
    initialValues: {
      name:'',
        selectFielduno:'',
        selectFieldtres: '',
      selectFielddos: ''
    },
    onSubmit: (action,values) => {
      // action.stopPropagation()
      navigate('/payment')
    //   console.log(values.selectField);
    //   console.log(values.selectFiled2);
      
       // access the select field's value here
    },
  });
  let change = ()=>{
    setShow(!show)
  }
  let change2 = ()=>{
    setShow2(!show2)
  }
  let closed = (e)=>{
    // if (e.target.classList.contains('popwrapper') && e.target.tagName !== 'select') {
    //   setShow(false);
    // }
    setShow(false)
    // navigate('/future')
  }
  let closed2 = (e)=>{
    setShow2(false)
  }
  let dontgo =(e)=>{
    e.stopPropagation()
  }
  let dontgo2 =(e)=>{
    e.stopPropagation()
  }
  return (
    <div className='logged'>
        <div className="accumulated">
            <h5>Accumulated Fund</h5>
            <div>
                <h2>₦5,000,000</h2> &nbsp;
                <button onClick={change}><img src={card} alt='' /> Add Funds</button>
            </div>
        </div>
        <div className="Subsidiaries">
            <div>
                <h3>Adeolu Mubarak</h3>
                <p>You</p>
                <b>₦500,000</b>
            </div>
            <div>
            <h3>Adeolu Khadija</h3>
                <p>Subsidiary 1</p>
                <b>₦500,000</b>
            </div>
            <div>
            <h3>Adeolu Taofeeq</h3>
                <p>Subsidiary 2</p>
                <b>₦500,000</b></div>
            <div>
            <h3>Adeolu Khadija</h3>
                <p>Subsidiary 3</p>
                <b>₦500,000</b>
                </div> 
            <button onClick={change2}> <img src={user} alt="" />Add New Subsidiary</button>
        </div>
        <div className="Payment">
            <div>
                <h1>Payment History </h1>
                <Link to='/all-History'>  See Details <img src={angleright} alt="" /></Link>
            </div>
{/* <hr /> */}
                <table cellSpacing="10px">
                    <thead>
                        <th>Date</th>
                        <th>Description</th>
                        <th>Amount</th>
                        <th>Status</th>
                    </thead>
                    <tbody>
                        {
                            History.map((item)=>(
                                <tr>
                                <td>{item.Date}</td>
                                <td>{item.Description}</td>
                                <td>{item.Amount}</td>
                                <td><img src={dot} alt="" /> {item.Status}</td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
        </div>



        {
  show?<div className='popwrapper' onClick={closed}>
    <div className='popInner' onClick={dontgo}>
    <form onSubmit={formik.handleSubmit}>
    <div className='person'>
      <label>Who do you want to pay for?</label>
      <select name="selectField"
        value={formik.values.selectField}
        onChange={formik.handleChange} >
        <option value="Adeolu Mubaaraq">Myself - Adeolu Mubaaraq</option>
        <option value="kola Adenuga">Kola Adenuga</option>
        <option value="Femi omotayo">Femi omotayo</option>
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
      
    <button type='submit'>  <img src={plane} alt=''/>Proceed to Payment</button>
    </div>
    </form>
    </div>
   </div>
  
  
  
  
  : ""
}
 
{
  show2?<div className='popwrapper' onClick={closed2}>
    <div className='popInner' onClick={dontgo2}>
    <form onSubmit={formik2.handleSubmit}>
    <div className='person'>
      <label>Who do you want to pay for?</label>
      <select name="selectFielduno"
        value={formik2.values.selectFielduno}
        onChange={formik2.handleChange} >
        <option value="Add New Beneficiary">Add New Beneficiary</option>
        {/* <option value="kola Adenuga">Kola Adenuga</option>
        <option value="Femi omotayo">Femi omotayo</option> */}
      </select>
    </div>
    <div className="name">
        <input type="text" name="name" id="" placeholder='Name' />
        <select name="selectfielddos" id="" value={formik2.values.selectFielddos}>
            <option value="relationship" selected disabled>Relationship</option>
            <option value="Friend">Friend</option>
            <option value="Fiance">Fiance</option>
            <option value="Wife">Wife</option>
            <option value="Husband">Husband</option>
            <option value="Father">Father</option>
            <option value="Mother">Mother</option>
        </select>
    </div>
    <div className='amount'>
      <label>Amount </label>
      <select name='selectFiledtres' value={formik2.values.selectFieldtres}
        onChange={formik2.handleChange}>
        <option value="₦5,000">₦5,000</option>
        <option value="₦10,000">₦10,000</option>
        <option value="₦20,000">₦20,000</option>
      </select>
    </div>
    <div className='proceed'>
      {/* <img src={plane} alt=''/> */}
      
    <button type='submit' title='www'> <img src={plane} alt=''/>Proceed to Payment</button>
    </div>
    </form>
    </div>
   </div>
  
  
  
  
  : ""
}
    </div>
  )
}

export default FutureLogged
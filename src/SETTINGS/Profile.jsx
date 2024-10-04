import React from 'react';
import man from '../imagefolder/man-with-cap.png'
import { Link, useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faEdit } from '@fortawesome/free-solid-svg-icons';

const Profile = () => {
const navigate=useNavigate()

const editButton=()=>{
  navigate('/Edit')
}

    
  return (
    <div className='profile'>
    <div className="formProfile">
    <div className="row1">

        <h3>Profile 
          <Link to='/profileTwo'>
        <FontAwesomeIcon icon={faEdit} onClick={editButton}/>
        </Link>

          </h3>  
        <img src={man} alt=""  />
       
        <div className='edit'> <i class="fa-solid fa-camera"></i> </div> 
    </div>

    <form action="">
    <label htmlFor="">Full Name</label><br />
    <input type="text" placeholder='Hassan Ibrahim' /><br />
   
    <label htmlFor="">User Name</label><br />
    <input type="text" placeholder='Hassan001'  /><br />

    <label htmlFor="">Date of Birth</label><br />
    <input type='number' placeholder='17-03-1983'/><br />

    <label htmlFor="">Email</label><br />
    <input type="email" placeholder='hassanibrahim@gmail.com' /><br />

    <label htmlFor="">Phone</label><br />
    <input type="number" placeholder='08123456789'  /><br />

    <label htmlFor="">WhatsApp Number</label><br />
    <input type="number" placeholder='08123456789'  /><br />

    <label htmlFor="">Gender</label><br />
    <input type="text" placeholder='Male'  /><br />

    <label htmlFor="">Occupation</label><br />
    <input type="text" placeholder='Civil Servant'  /><br />

    <label htmlFor="">Address</label><br />
    <input type="text" placeholder='1, Adala Street Ikeja Lagos.'  /><br />

    <label htmlFor="">Marital Status</label><br />
    <input type="text" placeholder='Married'  /><br />

    <label htmlFor="">Account Details</label><br />
    <input type="text" placeholder='GTBank - 0112233445 - Ibrahim Hassan'  /><br />
    </form>
</div>
    



    <div className="kin">
    <h3>Next Of Kin  <i class="fa-regular fa-pen-to-square" onClick={editButton} ></i></h3>
      <form action="">
      <label htmlFor="">Full Name</label><br />
    <input type="text" placeholder='Ibrahim Toafeek' /><br />

    <label htmlFor="">Phone</label><br />
    <input type="number" placeholder='08034567890' /><br />

    <label htmlFor="">Relationship</label><br />
    <input type="text" placeholder='Brother' /><br />

    <label htmlFor="">Address</label><br />
    <input type="text" placeholder='1 Alimi Close Ikotun Lagos' /><br />

      </form>
    </div>


    <div className="refer">
    <div className='referH3'><h3>Referrer</h3></div>
    <div className="referrer">
    <img src={man} alt="" />
    <p>Ibrahim Toafeek</p>
    </div>
    </div>

    </div>
  )
}

export default Profile


// 
// pro <i class="fa-regular fa-camera"></i>
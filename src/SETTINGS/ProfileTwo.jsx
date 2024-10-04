import React from 'react'
import man from '../imagefolder/man-with-cap.png'
import { useFormik } from 'formik'
import * as yup from 'yup'
import { useState } from 'react'
const ProfileTwo = () => {

  const [selectedImage, setSelectedImage] = useState(null);


  const triggerFileInput = () => {
    document.getElementById('fileInput').click();
  };
  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setSelectedImage(URL.createObjectURL(file));
    }



  };



  const formik = useFormik({
    initialValues: {
      FullName: '',
      Lastname: '',
      Email: '',
      Password: '',
      Username: '',
      DateOfBirth: '',
      Phone: '',
      WhatsAppNumber: '',
      Gender: '',
      Occupation: '',
      Address: '',
      MaritalStatus: '',
      AccountDetails: '',
    },
    validationSchema: yup.object({
      FullName: yup.string().required('This field is required').max(12, 'Maximum of 12 characters').min(6, 'Minimun of six character'),
      Lastname: yup.string().required('This field is required'),
      Email: yup.string().email('Invalid email address').required('This field is required'),
      Password: yup.string().required('This field is required'),
      Username: yup.string().required('This field is required'),
      DateOfBirth: yup.string().required('This field is required'),
      Phone: yup.string().required('This field is required'),
      WhatsAppNumber: yup.string().required('This field is required'),
      Gender: yup.string().required('This field is required'),
      Occupation: yup.string().required('This field is required'),
      Address: yup.string().required('This field is required'),
      MaritalStatus: yup.string().required('This field is required'),
      AccountDetails: yup.string().required('This field is required'),
    }),

  });

  // console.log(formik.values)
  return (
    <div className='profileTwo'>
    <div className="formProfile">
     <div className="row1">
        <h3>Profile       <i class="fa-regular fa-pen-to-square"></i></h3>  
        <img src={selectedImage || man  } alt=""  style={{ width: '70px', height: '70px', borderRadius: '520%' }} />   
        <div className='edit' onClick={triggerFileInput}> <i class="fa-solid fa-camera"></i> </div> 

        <input
          type="file"
          id="fileInput"
          style={{ display: 'none' }}
          onChange={handleImageChange}
          accept="image/*"
        />
    </div>

    <form onSubmit={formik.handleSubmit}>
    
      <label htmlFor="FullName">Full Name</label><br />
      <input 
        type="text" 
        name="FullName"
        placeholder='Hassan Ibrahim' 
        value={formik.values.FullName}
        onChange={formik.handleChange} 
        onBlur={formik.handleBlur} 
      />
      {formik.touched.FullName && formik.errors.FullName && (
        <small style={{ color: 'red' }}>{formik.errors.FullName}</small>
      )}<br />

      <label htmlFor="Username">User Name</label><br />
      <input 
        type="text" 
        name="Username"
        placeholder='Hassan001' 
        value={formik.values.Username}
        onChange={formik.handleChange} 
        onBlur={formik.handleBlur} 
      />
      {formik.touched.Username && formik.errors.Username && (
        <small style={{ color: 'red' }}>{formik.errors.Username}</small>
      )}<br />

      <label htmlFor="DateOfBirth">Date of Birth</label><br />
      <input type='text'  name="DateOfBirth" placeholder='17-03-1983'  value={formik.values.DateOfBirth} onChange={formik.handleChange}    onBlur={formik.handleBlur} 
      />
      {formik.touched.DateOfBirth && formik.errors.DateOfBirth && (
        <small style={{ color: 'red' }}>{formik.errors.DateOfBirth}</small>
      )}<br />

      <label htmlFor="Email">Email</label><br />
      <input 
        type="email" 
        name="Email"
        placeholder='hassanibrahim@gmail.com' 
        value={formik.values.Email}
        onChange={formik.handleChange} 
        onBlur={formik.handleBlur} 
      />
      {formik.touched.Email && formik.errors.Email && (
        <small style={{ color: 'red' }}>{formik.errors.Email}</small>
      )}<br />

      <label htmlFor="Phone">Phone</label><br />
      <input 
        type="text" 
        name="Phone"
        placeholder='08123456789' 
        value={formik.values.Phone}
        onChange={formik.handleChange} 
        onBlur={formik.handleBlur} 
      />
      {formik.touched.Phone && formik.errors.Phone && (
        <small style={{ color: 'red' }}>{formik.errors.Phone}</small>
      )}<br />

      <label htmlFor="WhatsAppNumber">WhatsApp Number</label><br />
      <input 
        type="text" 
        name="WhatsAppNumber"
        placeholder='08123456789' 
        value={formik.values.WhatsAppNumber}
        onChange={formik.handleChange} 
        onBlur={formik.handleBlur} 
      />
      {formik.touched.WhatsAppNumber && formik.errors.WhatsAppNumber && (
        <small style={{ color: 'red' }}>{formik.errors.WhatsAppNumber}</small>
      )}<br />

      <label htmlFor="Gender">Gender</label><br />
      <select 
        name="Gender" 
        value={formik.values.Gender}
        onChange={formik.handleChange} 
        onBlur={formik.handleBlur}
      >
        <option value="">Select Gender</option>
        <option value="Male">Male</option>
        <option value="Female">Female</option>
        <option value="Others">Others</option>
      </select>
      {formik.touched.Gender && formik.errors.Gender && (
        <small style={{ color: 'red' }}>{formik.errors.Gender}</small>
      )}<br />

      <label htmlFor="Occupation">Occupation</label><br />
      <select 
        name="Occupation"
        value={formik.values.Occupation}
        onChange={formik.handleChange} 
        onBlur={formik.handleBlur}
      >
        <option value="">Select Occupation</option>
        <option value="Civil Servant">Civil Servant</option>
        <option value="Engineer">Engineer</option>
        <option value="Accountant">Accountant</option>
      </select><br />

      <label htmlFor="Address">Address</label><br />
      <input 
        type="text" 
        name="Address"
        placeholder='1, Adala Street Ikeja Lagos.' 
        value={formik.values.Address}
        onChange={formik.handleChange} 
        onBlur={formik.handleBlur} 
      /><br />

      <label htmlFor="MaritalStatus">Marital Status</label><br />
      <select 
        name="MaritalStatus"
        value={formik.values.MaritalStatus}
        onChange={formik.handleChange} 
        onBlur={formik.handleBlur}
      >
        <option value="">Select Status</option>
        <option value="Married">Married</option>
        <option value="Single">Single</option>
        <option value="Divorce">Divorce</option>
      </select><br />

      <label htmlFor="AccountDetails">Account Details</label><br />
      <input 
        type="text" 
        name="AccountDetails"
        placeholder='GTBank - 0112233445 - Ibrahim Hassan' 
        value={formik.values.AccountDetails}
        onChange={formik.handleChange} 
        onBlur={formik.handleBlur} 
      /><br />
    </form>
    </div>

<div className="profileTwoButton">
<button type="button" onClick={() => formik.resetForm()}>Cancel</button>
<button type="submit" onClick={formik.handleSubmit}>Save Changes</button>
{/* <button type="submit">Save Changes</button> */}
</div>



<div className="kin">
    <h3>Next Of Kin  <i class="fa-regular fa-pen-to-square" ></i></h3>
      <form action="">
      <label htmlFor="">Full Name</label><br />
    <input type="text" placeholder='Ibrahim Toafeek' /><br />

    <label htmlFor="">Phone</label><br />
    <input type="number" placeholder='08034567890' /><br />

    <label htmlFor="">Relationship</label><br />
    <select name="" id="">
      <option value="">Brother</option>
      <option value="">Sister</option>
      <option value="">Mother</option>
      <option value="">Father</option>
      <option value="">Husband</option>
      <option value="">Wife</option>
      <option value="">Mother</option>
    </select><br />

    <label htmlFor="">Address</label><br />
    <input type="text" placeholder='1 Alimi Close Ikotun Lagos' /><br />

      </form>
    </div>


    <div className="profileTwoButton">
    <button type="button" onClick={() => formik.resetForm()}>Cancel</button>
    <button type="submit" onClick={formik.handleSubmit}>Save Changes</button>
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

export default ProfileTwo








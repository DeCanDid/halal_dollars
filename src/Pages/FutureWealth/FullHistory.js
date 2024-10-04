import React from 'react';
import '../FutureWealth/Future.css'
import Histoire from './Histoire.json'
import dot from './icons/circle-solid.svg'
import { useFormik } from 'formik';
import filter from './icons/filter-solid.svg'
// import magnify from './icons/magnifying-glass-solid (2).svg'
// import searr from './icons/bx-search.svg'
function FullHistory() {
  const formik = useFormik({
    initialValues: {
        search:'',
      selectField: '',
      selectFiled2: '',
      SelectField3:" "
    },
    onSubmit: (action,values) => {
      // action.stopPropagation()
    //   navigate('/payment')
      console.log(values.selectField);
      console.log(values.selectFiled2);
      
       // access the select field's value here
    },
  });
  return (
    <div className='FullHistory'>
        <form action="" onSubmit={formik.handleSubmit}>
        <div>
            <input type="text" name='search' placeholder='Search Amount'/>
            {/* <img src={magnify} alt="" /> */}
            {/* <img src={searr} alt="" /> */}
        </div>
        <div>
            <select name="selectField" id="">
                <option value="From">From</option>
            </select>
            <select name="SelectField2" id="">
            <option value="To">To</option>
            </select>
            <select name="SelectField3" id="">
            <option value="Type">Type</option>
            </select>

            <button type='submit'><img src={filter} alt="" /></button>
        </div>
        </form>
        <div className="Payment">
            <div>
                <h1>Payment History </h1>
            </div>
                <table cellSpacing="5px">
                    <thead>
                        <th>Date</th>
                        <th>Description</th>
                        <th>Amount</th>
                        <th>Status</th>
                    </thead>
                    <tbody>
                        {
                            Histoire.map((item)=>(
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
    </div>
  )
}

export default FullHistory
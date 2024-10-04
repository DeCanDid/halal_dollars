import React from 'react';
import '../../Pages/Style.css';
import History from '../../History.json';
import { useFormik } from 'formik';
// import dot from './icons/circle-solid.svg';
// import filter from './icons/filter-solid.svg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaperPlane, faMagnifyingGlass, faFilter } from '@fortawesome/free-solid-svg-icons';


const PaymentHistory = () => {

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
    <>

    <div className="payment_history_wrapper">

    {/* <form className='search_form' action="" onSubmit={formik.handleSubmit}>
        <div className='search_payment rounded-3'>
            <input type="text" name='search' placeholder='Search Amount'/>
            <FontAwesomeIcon icon={faMagnifyingGlass} 
            style={{backgroundColor:'#003EB8',
                color:'white',padding:'5px', 
                borderRadius: '3px'
            }} />
        </div>
        <div className='duration rounded-3'>
            <select name="selectField" id="">
                <option value="From">From</option>
            </select>
            <select name="SelectField2" id="">
            <option value="To">To</option>
            </select>
            <select name="SelectField3" id="">
            <option value="Type">Type</option>
            </select>

            <button type='submit'
            style={{backgroundColor:'#003EB8',
                color:'white',padding:'5px', 
                borderRadius: '3px'
            }}>
            <FontAwesomeIcon icon={faFilter} 
            />

              </button>
        </div>
        </form> */}

        <div className="invest_row3 shadow py-5 rounded-2">
                
                <div className="payment_history">
                    <h4>Payment History</h4>

                    {/* <a href="#">
                        See Details 
                        <FontAwesomeIcon icon={faAngleRight}
                        style={{color:'#fff'}
                    }/>
                    </a> */}
                </div>

                <div className='table py-3 rounded-2'>
                    <table className='table text-center'>
                        <tr>
                            <th>Date</th>
                            <th>Description</th>
                            <th>Amount</th>
                            <th>Status</th>
                        </tr>

                       <tbody>
                            
                            {
                                History.map((item)=>(
                                    <>
                                    <tr>
                                        <td>{item.Date}</td>
                                        <td>{item.Description}</td>
                                        <td>{item.Amount}</td>
                                        <td><li> {item.Status}</li></td>
                                    </tr>
                                    </>
                                ))
                            } 
                       </tbody>     
                        
                    </table>
                </div>
            </div>
    </div>

    </>
  )
}

export default PaymentHistory
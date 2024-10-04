import React from 'react';
import '../../Pages/Style.css';

const AddInvestment = () => {
  return (
    <>

        <div className="addToInvestment shadow rounded-3">

            <div className='text-center py-5'>
                <h5>Amount to Add</h5>
            </div>

            <div className='invest_options px-5'>
                
                <div className='shadow'>
                    <h4>#50,000</h4>
                    <h6>+ Charges (#5000)</h6>
                </div>

                <div className='shadow'>
                    <h4>#50,000</h4>
                    <h6>+ Charges (#5000)</h6>
                </div>

                <div className='shadow'>
                    <h4>#50,000</h4>
                    <h6>+ Charges (#5000)</h6>
                </div>

                <div className='shadow'>
                    <h4>#50,000</h4>
                    <h6>+ Charges (#5000)</h6>
                </div>

                <div className='shadow'>
                    <h4>#50,000</h4>
                    <h6>+ Charges (#5000)</h6>
                </div>

                <div className='shadow'>
                    <h4>#50,000</h4>
                    <h6>+ Charges (#5000)</h6>
                </div>

                <div className='shadow'>
                    <h4>#50,000</h4>
                    <h6>+ Charges (#5000)</h6>
                </div>

                <div className='shadow'>
                    <h4>#50,000</h4>
                    <h6>+ Charges (#5000)</h6>
                </div>

                <div className='shadow'>
                    <h4>#50,000</h4>
                    <h6>+ Charges (#5000)</h6>
                </div>

            </div>

            <div className='amount_row py-4'>
                <div>
                <h4>Enter a specific amount</h4>
                <small>In multiple of # 50,000</small>
                </div>

                <div>
                    <input type="number" placeholder='# 50,000 - # 200,000'/>
                </div>

            </div>
        </div>

        <div className="payment_method shadow px-5 py-4 rounded-3">

            <div className='mx-3'>
                <h4>Choose how to pay</h4>
                <small>Select one or more payment methods</small>
            </div>

            <div>
                 <div className="payment_options">

                 <div className='shadow'>
                    <input type="checkbox" />
                    <label htmlFor="">Mudaarabah Balance (#110,890)</label>
                 </div>

                 <div className='shadow'>
                    <input type="checkbox" />
                    <label htmlFor="">Affiliate Balance (#80,050)</label>
                 </div>

                 <div className='shadow '>
                    <input type="checkbox" />
                    <label htmlFor="">Pay now (Paystack) (#110,890)</label>
                 </div>
                 
                 </div>

                 <div className='continue_button'>
                    <button>Continue</button>
                 </div>
            </div>
        </div>
    </>
  )
}

export default AddInvestment
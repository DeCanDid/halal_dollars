import React from 'react';
import '../../Pages/Style.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons';

const Widthrawal = () => {
    
  return (
    <>

            <div className="invest_row1 shadow px-3 rounded-3"> 
                <div>
                    <p>Availabale Balance</p>
                    <h2>#110,890</h2>
                </div>

                {/* <div>
                    <button>
                    <FontAwesomeIcon icon={faPaperPlane} 
                    style={{color:'#fff'}
                    }/>
                    <a href="#">
                        Withdraw
                    </a>
                    </button>
                </div> */}
            </div>

            <div className='payment_withdraw px-3 shadow rounded-3 py-4'>

                <div>
                    <h4>Choose Beneficiary</h4>
                </div>
                
                 <div className="payment_options">

                 <div className='shadow'>
                    <input type="radio" name='mudaarabah'/>
                    <label htmlFor="mudaarabah_balance">First Bank - 0123456789 - Hassan Ibrahim</label>
                 </div>

                 <div className='shadow'>
                    <input type="radio"  name='mudaarabah'/>
                    <label htmlFor="">Guaranty Trust Bank - 0123456789 - Hassan Ibrahim</label>
                 </div>

                 <div className='shadow '>
                    <input type="radio" name='mudaarabah'/>
                    <label htmlFor="">Opay - 0123456789 - Hassan Ibrahim</label>
                 </div>
                 
                 </div>

                 <div className='continue_button'>
                    <button>Add Beneficiary</button>
                 </div>
            </div>

            <div className="withdraw_amount shadow py-4 px-5 rounded-3 amount_row">
                <div className='my-4'>
                    <h6>Amount to Withdraw</h6>
                    <input type="number" placeholder='#110,890'/>
                </div>

                <div className='withdraw_button'>
                <button>
                    <FontAwesomeIcon icon={faPaperPlane} 
                    style={{color:'#fff'}
                    }/>
                    <a href="#">
                        Withdraw
                    </a>
                    </button>
                </div>
            </div>
    </>
  )
}

export default Widthrawal
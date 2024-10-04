import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaperPlane, faCoins, faAngleRight } from '@fortawesome/free-solid-svg-icons';
import '../../Pages/Style.css'

const Investment = ({ balance, withdraw }) => {
  return (
    <>
        <section className="investment_section">

            <div className="invest_row1 shadow px-3 rounded-3">
                <div>
                    <p>Availabale Balance</p>
                    <h2>#110,890</h2>
                    
                </div>

                <div>
                    <button>
                    <FontAwesomeIcon icon={faPaperPlane} 
                    style={{color:'#fff'}
                    }/>
                    <Link to="/withdrawal">
                        Withdraw
                    </Link>
                    </button>
                </div>
            </div>

            <div className="invest_row2 shadow px-4 py-3">
                
                <div className='investment_wrapper py-3'>

                <div className='shadow'>
                    <h6>Total Amount Invested</h6>
                    <h5>#5,000,000</h5>
                </div>

                <div className='shadow'>
                    <h6>Total Amount Invested</h6>
                    <h5>#5,000,000</h5>
                </div>

                <div className='shadow'>
                    <h6>Total Amount Invested</h6>
                    <h5>#5,000,000</h5>
                </div>

                <div className='shadow'>
                    <h6>Total Amount Invested</h6>
                    <h5>#5,000,000</h5>
                </div>

                </div>

                <div className='add_investment'>
                    <button>
                    <FontAwesomeIcon icon={faCoins}
                    style={{color:'#fff'}
                }/>
                        <Link to="/addInvestment">Add your Investment</Link>
                    </button>
                </div>

            </div>

            <div className="invest_row3 shadow py-5 rounded-2">
                
                <div className="payment_history">
                    <h4>Payment History</h4>

                    <Link to="/all-History">
                        See Details 
                        <FontAwesomeIcon icon={faAngleRight}
                        style={{color:'#fff'}
                    }/>
                    </Link>
                </div>

                <div className='table py-3 rounded-2'>
                    <table className='table text-center'>
                        <tr>
                            <th>Date</th>
                            <th>Description</th>
                            <th>Amount</th>
                            <th>Status</th>
                        </tr>

                        <tr>
                            <td>12/02/2024</td>
                            <td>Jan Profit Share</td>
                            <td>#3,000</td>
                            <td><li>Success</li></td>
                        </tr>

                        <tr>
                            <td>12/02/2024</td>
                            <td>12/02/2024</td>
                            <td>12/02/2024</td>
                            <td><li>Success</li></td>

                        </tr>

                        <tr>
                            <td>12/02/2024</td>
                            <td>12/02/2024</td>
                            <td>12/02/2024</td>
                            <td><li>Success</li></td>
                        </tr>

                        <tr>
                            <td>12/02/2024</td>
                            <td>12/02/2024</td>
                            <td>12/02/2024</td>
                            <td><li>Success</li></td>
                        </tr>
                    </table>
                </div>
            </div>

            {/* </div> */}
        </section>

    </>
  )
}

export default Investment
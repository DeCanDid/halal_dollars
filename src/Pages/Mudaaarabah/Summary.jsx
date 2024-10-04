import React from 'react';
import { Link } from 'react-router-dom';
import '../../Pages/Style.css'

const Summary = () => {
  return (
    <>
        <section className="summary_section">

            <div className="summary_wrapper shadow">

                <div>
                <h2 className='fw-bold'>Halal Dollars Mudaarabah</h2>
                <p>
                    Halal Dollars Mudaarabah is a program where you invest in Halal Dollars’ eCommerce business to earn monthly profit shares. Launched in 2023, it quickly gained popularity among our members, providing a rewarding experience for both investors and Halal Dollars. Initially, we taught eCommerce, but some found it challenging and preferred to invest with us, allowing Halal Dollars to manage the business and share the profits.
                </p>
                <p>
                    Mudaarabah offers clear benefits. Investors receive monthly profit shares without any business involvement, providing capital only. This helps Halal Dollars access more funds to grow the eCommerce business and increase profits. It also reduces the unemployment rate in the Muslim community by enabling us to hire and train more Muslims in eCommerce.
                </p>

                <p>
                    Joining is easy. After agreeing to the terms, payments will be made in multiples of N50,000. Investors start receiving profit shares three months after the initial investment. The profit-sharing formula is 32% for the investor and 68% for Halal Dollars, covering operational costs like rent, salaries, and utilities.
                </p>

                <p>
                    As of July 2024, the average profit on a N1 million investment was N250,000. Mudaarabah follows Islamic finance rules, ensuring shared profits and mitigating potential losses through a robust risk management strategy. The program aims to positively impact the Muslim Ummah by providing a secure Halal investment option, reducing poverty, creating jobs, and supporting economic growth.
                </p>
                </div>
                
                <div className="button_links">

                    <Link to="#" className='learn_more shadow'>
                        Learn More
                    </Link>
                    
                    <Link to="pay-stack" className='learn_more'>
                        Join Now
                    </Link>
               
                </div>

            </div>
        </section>
    </>
  )
}

export default Summary;
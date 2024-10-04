import React from 'react';
import Investment from './Mudaaarabah/Investment';
import Affiliate from './Affiliate/Affiliate';

const InvestmentProps = () => {

    const balance = "#110,890";
    const withdrawAmount = "Withdraw";
  return (
    <div>
        <Investment balance={balance} 
        withdraw={withdrawAmount} />
        
        <Affiliate balance={balance} 
        withdraw={withdrawAmount}  />
    </div>
  )
}

export default InvestmentProps
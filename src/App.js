import { Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './Pages/Header';
import AddInvestment from './Pages/Mudaaarabah/AddInvestment';
import Investment from './Pages/Mudaaarabah/Investment';
import PaymentHistory from './Pages/Mudaaarabah/PaymentHistory';
import Summary from './Pages/Mudaaarabah/Summary';
import Widthrawal from './Pages/Mudaaarabah/Widthrawal';
import PayStack from './Pages/Mudaaarabah/PayStack';
import FullHistory from './Pages/FutureWealth/FullHistory';
import Future from './Pages/FutureWealth/Future';
import FutureLogged from './Pages/FutureWealth/FutureLogged';
import TotalReach from './Halal/TotalReach';
import TotalReachDetails from './Halal/TotalReachDetails';
import Profile from './SETTINGS/Profile';
import PayGateway from './Pages/FutureWealth/PayGateway';
// import ProfileTwo from './SETTINGS/ProfileTwo';


function App() {
  return (
    <div className="App">

    <Routes>
      <Route path='/' element={<Summary/>}/>
      <Route path='/future-wealth' element={<Future/>} />
      <Route path='/total-reach' element={<TotalReach/>}/>
      <Route path='/totalreach_details' element={<TotalReachDetails/>}/>
      <Route path='/setting' element={<Profile/>}/>
      <Route path='/pay-stack' element={<PayStack/>}/>
      <Route path='pay_stack' element={<PayGateway/>}/>
      <Route path='/mudaarabah' element={<Investment/>} />
      <Route path='/withdrawal' element={<Widthrawal/>}/>
      <Route path='/addInvestment' element={<AddInvestment/>}/>
      <Route path='/all-History' element={<FullHistory/>}/>
      <Route path='/futureLogged' element={<FutureLogged/>}/>
    </Routes>

      {/* <Summary/>
      <Investment/>
      <AddInvestment/>
      <Widthrawal/>
      <PaymentHistory/> */}
      
        
    </div>
  );
}

export default App;

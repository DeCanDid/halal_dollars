import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Future from './Future';
import Payment from './Payment';
import FutureLogged from './FutureLogged';
import FullHistory from './FullHistory';
import AffMudarabah from './AffMudarabah';
import MudaHistoire from './MudaHistoire';

function App() {
  return (
<Routes>
  {/* <Route path='/' element={<Future />}/> */}
  <Route path='/' element={<FutureLogged />}/>
  <Route path='/futureLogged' element={<FutureLogged />} />
  <Route path='/history' element={<FullHistory/>} />
  <Route path='/payment' element={<Payment />}/>
  <Route path='/affmudarabah' element={<AffMudarabah />} >
  <Route path='/affmudarabah/mudhistoire' element={<MudaHistoire />} />
  </Route>
</Routes>
  );
}

export default App;

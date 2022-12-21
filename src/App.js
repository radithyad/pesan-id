import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Routes } from 'react-router-dom';
import { 
  Reservasi,
  ReservasiCoba,
  ReservasiCobaLagi, 
  Menu,
  Payment,
  Paymentt,
  Paymenttt,
  Hider,
  AddUser,
  AddUserCard,
  AddUserCarddd,
  Test,
  DataFetching,
  TotalBayar,
  TotalPembayaran
} from './Components';

function App() {
  return <Routes>
    <Route path='/' element={<Reservasi/>} />
    <Route path='menu' element={<Menu/>} />
    <Route path='payment' element={<Payment/>}/>
  </Routes>
}

// function App() {
//   return (
//     <TotalPembayaran/>
//   )
// }

export default App;

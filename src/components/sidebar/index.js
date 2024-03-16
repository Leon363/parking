import React from 'react'
import Parking from '../main/Parking';
import { Link } from 'react-router-dom';

function parkingPage () {
  alert('parkin button');
    // () => <Parking/>
}

function allCars() {
 alert('all cars button');
}

function notPayed() {
  alert('Not payed button');
}

function Sidebar()  {
  return (
    <div>
      <ul>
         <li > <Link to='/' >  Parking  </Link></li>
         
         <li> <Link to='/all'> Car list </Link> </li>
         <li> <Link to='/unPayment'>Not payed</Link> </li>
         <li> <Link to='/exempl'>Exempl</Link> </li>
        
      </ul>
    </div>
  )
}

export default Sidebar

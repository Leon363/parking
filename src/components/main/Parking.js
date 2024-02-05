import React, { useState } from 'react'
import Car from './models/Car'

function Parking () {

  


return <div className='parkingCar' >
        <div className='Car'> <Car/> </div>
        <p> </p>
        <div className='Car'> <Car/> </div>
        <p> </p>
        <div className='Car'> <Car/> </div>
        <p> </p>
        <div className='Car'> <Car/> </div>
        <p> </p>
        <div className='Car'> <Car/> </div>
        
      </div>

}

export default Parking



  // const [car1, setCar1] = useState(false);
  // const [car2, setCar2] = useState(false);
  // const [car3, setCar3] = useState(false);
  // const [car4, setCar4] = useState(false);
  // const [car5, setCar5] = useState(false);


  // function handleChange1() {
  //   setCar1(!car1);
  // }
  // function handleChange2() {
  //   setCar2(!car2);
  // }
  // function handleChange3() {
  //   setCar3(!car3);
  // }
  // function handleChange4() {
  //   setCar4(!car4);
  // }
  // function handleChange5() {
  //   setCar5(!car5);
  // }

  // return (
  //   <div id='main'>

  //   <input type='checkbox' checked={car1} onChange={handleChange1} />
  //   <p>Status of the place: { car1 ? <p> Occupied </p> : <p> Unoccupied </p> }</p>
  //   <input type='checkbox' checked={car2} onChange={handleChange2} />
  //   <p>Status of the place: { car2 ? <p> Occupied </p> : <p> Unoccupied </p> }</p>
  //   <input type='checkbox' checked={car3} onChange={handleChange3} />
  //   <p>Status of the place: { car3 ? <p> Occupied </p> : <p> Unoccupied </p> }</p>
  //   <input type='checkbox' checked={car4} onChange={handleChange4} />
  //   <p>Status of the place: { car4 ? <p> Occupied </p> : <p> Unoccupied </p>}</p>
  //   <input type='checkbox' checked={car5} onChange={handleChange5} />
  //   <p>Status of the place: { car5 ?<p> Occupied </p> : <p> Unoccupied </p> }</p>
    
  //   </div>
  // )
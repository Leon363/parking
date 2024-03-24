import React from 'react'
import style from './/car.module.css'
// import Car from './Car'

function ParkingPlace ({parkingPlace, setparkingPlace})  {
    const ParkingPlace = {
        parkingPlace: Number,
        id: Number, 
        time: Date, 
        isPayment: Boolean
       }
  return (
    <div className={style.emptyParkingPlace}>
      <div className= {style.emptyParkingPlace} >
          <div className= {style.emptyParkingPlace} > {parkingPlace.parkingPlace} </div>
          <div className= {style.emptyParkingPlace} > {parkingPlace.number} </div>
          {/* <button className='open-btn'><div> {car.number} </div></button> */}
          {/* <modal active={modalActive} setActive={setModalActive}/> */}
          
          <div className= {style.emptyParkingPlace} > {parkingPlace.date} </div>
          <div className= {style.emptyParkingPlace} > {isPayment.isPaid.toString()} </div>
          
          
      </div>
    </div>
  )
}

export default ParkingPlace
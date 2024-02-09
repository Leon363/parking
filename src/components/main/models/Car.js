import style from './/car.module.css'
import React from 'react'
    
function Car ({car}) {
    // const {car} = props;

    // const Car = {id: Number, 
    //              time: Date, 
    //              isPayment: Boolean
    //             }
    
    function carNumber(min,max) {
      min = Math.ceil(100000);
      max = Math.floor(9999999);
      return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    function generateRandomDate() {
      return new Date(
        Math.random() * new Date(),
      );
    }
    
    function generateRundomBoolean() {
      return Math.random() < 0.5;
    }

    //  function rundomCar() {
    //     return Car(carNumber(), generateRandomDate(), generateRundomBoolean())
    // }

    

    // const res = cars.map(function(item) {
    //   return (
    //      <div>
    //     <div>{item.number}</div>
    //     <div>{item.date}</div>
    //     <div>{item.isPaid.toString()}</div>
    //     </div> 
    //   )
    // })

  return (
    <div className={style.Car}>
      <div className= {style.cotainerCar} >
          <div> {car.number} </div>
          <div> {car.date} </div>
          <div> {car.isPaid.toString()} </div>
      </div>
    </div>
        

  )
}

export default Car

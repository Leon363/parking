import style from './/car.module.css'
import React from 'react'
    
function Car () {
    const Car = {id: Number, 
                 time: Date, 
                 isPayment: Boolean
                }
    
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

    const Cars = [123, 321, 666];

    const res =Cars.map(function(item) {
      return <p>
        
        <span>{item.Number}</span>
        <span>{item.Date}</span>
        <span>{item.Boolean}</span>
      </p>
    })

  return (
    
    <div className={style.Car} >
        {res}
    </div>
        // <section className="float-end w-50 mx-1 row border">
        //     <h2 className={style.Car}>Dream Team</h2>
        //     {/* {Cars.map((item, index) => <Car key={index} number={index + 1}/>)} */}
        // </section>

  )
}

export default Car

import style from './/car.module.css'
import React from 'react'
    
function Car () {
    const Car = {id: Number, time: Date, isPayment: Boolean}
    
    // Car = [{id: 12345,  isPayment: false}, {id: 54321, isPayment: true}]

  return (
    <div className={style.Car} >
      Car
    </div>
  )
}

export default Car

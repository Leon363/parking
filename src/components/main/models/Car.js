import style from './/car.module.css'
import React from 'react'
    
function Car ({car}) {
    // const {car} = props;

    const Car = {id: Number, 
                 time: Date, 
                 isPayment: Boolean
                }
    
    function carNumber(min,max) {
      min = Math.ceil(100000);
      max = Math.floor(9999999);
      return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    function generateRandomDate(Date) {
      return new Date(
        Math.random() * new Date(),
      );
    }
    
    function generateRundomBoolean() {
      return Math.random() < 0.5;
    }

     function rundomCar(len) {
        for(let i = 0; i < len; i++ ){
          return Car(carNumber(100000, 9999999), generateRandomDate(Date), generateRundomBoolean())
        }
        
    }

    let resultParkingCar = [];
    console.log(resultParkingCar.push(rundomCar()));



    // console.log(rundomCar());

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
      <div className= {style.containerCar} >
          <div className= {style.containerCar} > {car.number} </div>
          {/* <button className='open-btn'><div> {car.number} </div></button> */}
          {/* <modal active={modalActive} setActive={setModalActive}/> */}
          
          <div className= {style.containerCar} > {car.date} </div>
          <div className= {style.containerCar} > {car.isPaid.toString()} </div>
          <div>
            <button onClick={() => car.remove(car.Car)}>Delete</button>
          </div>
          
      </div>
    </div>
        

  )
}

export default Car

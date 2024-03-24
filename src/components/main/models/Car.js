import style from './/car.module.css'
import React from 'react'
    
function Car ({car,setCars, remove}) {

  // const [currentCar, setCurrentCar] = useState(car);

  // function remove(e) {
  //   console.log(car);
  //     // e.preventDefault();
  //     // removeCar(currentCar);
      
  // }

  // function numberHandleChange (e) {

  //   // const carCopy = 
  //   // carCopy.number = e.target.value;
  //   setCurrentCar({
  //       ...removeCar, 
        
  //   });
  // }

    // const {car} = props;

    const Car = {
                 parkingPlace: Number,
                 id: Number, 
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

    // const removeCar = (car) => {
    //   if(car.number === car.number) {
    //       return car.reduce(car.number)
    //   }
    //   setCars(car.filter(c => c.number !== car.number))

    // }

    let resultParkingCar = [];
    // console.log(resultParkingCar.push(rundomCar()));



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
          <div className= {style.containerCar} > {car.parkingPlace} </div>
          <div className= {style.containerCar} > {car.number} </div>
          {/* <button className='open-btn'><div> {car.number} </div></button> */}
          {/* <modal active={modalActive} setActive={setModalActive}/> */}
          
          <div className= {style.containerCar} > {car.date} </div>
          <div className= {style.isPayedConteiner} > {car.isPaid.toString()} </div>
          <div>
            <button onClick={() => remove(car)}>Delete</button>
          </div>
          
      </div>
    </div>
        

  )
}

export default Car

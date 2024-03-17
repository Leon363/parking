
import { useState } from 'react';
import Car from './models/Car'
import Truck from './models/Truck';
import style from './models/car.module.css'
import MyButton from '../UI/MyButton';
import MyModal from './models/modals/MyModal';
import styles from './models/modals/MyModal.module.css'
import Form from './models/modals/Form';


function Parking () {



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

 

  // let resultParkingCar = [];
  //   console.log(resultParkingCar.push(rundomCar()));

  const [modal, setModal] = useState(false);

  const [cars, setCars] = useState([
      {number: 123, date: ' 01.01.2024', isPaid: true}, 
      {number: 223, date: ' 10.01.2024', isPaid: false},
      {number: 326, date: ' 20.01.2024', isPaid: true},
      {number: 111, date: ' 01.01.2024', isPaid: true}, 
      {number: 222, date: ' 10.01.2024', isPaid: false},
      {number: 333, date: ' 20.01.2024', isPaid: true},
      {number: 321, date: ' 01.01.2024', isPaid: true}, 
      {number: 322, date: ' 10.01.2024', isPaid: false},
      {number: 623, date: ' 20.01.2024', isPaid: true},
      {number: 456, date: ' 10.01.2024', isPaid: false},
      // {number: 326, date: ' 20.01.2024', isPaid: true},
      // {number: 123, date: ' 01.01.2024', isPaid: true}, 
      // {number: 223, date: ' 10.01.2024', isPaid: false},
      // {number: 326, date: ' 20.01.2024', isPaid: true},
      // {number: 123, date: ' 01.01.2024', isPaid: true}, 
      // {number: 223, date: ' 10.01.2024', isPaid: false},
      // {number: 326, date: ' 20.01.2024', isPaid: true},
      
    ]);

    const createCar = (newCar) => {
      setCars([...cars, newCar])
    }

    // const removeCar = (car) => {
    //   setCars(cars.filter(c => c.number !== car.number))
    // }

    // const 

    const trucks = [
      {number: 321, date: ' 11.11.2024', isPaid: false}, 
      {number: 232, date: ' 20.01.2024', isPaid: true},
      {number: 623, date: ' 29.02.2024', isPaid: false},
      
    ]

return (
          <>
            
            <div className={style.parkingCar}>
              {/* <MyButton onClick= {() => createCar()} >Create Car</MyButton> */}
              {/* <MyModal >
                <Car create={createCar} />
              </MyModal> */}
              {/* {modal && MyModal} */}
              {modal && <div className={styles.myModal}>
                <Form />  
              </div>}
              {cars.map((car ) => {
                return (
                  <div className={style.Car} key={car.number} onClick={() => setModal(true)}> 
                    <Car car={car} removeCar={((car) => {
                        setCars(cars.filter(c => c.number !== car.number))
                      })}/> 
                  </div>
                  )
              })}
            
            </div>
          
            {/* <div className={style.truck}>
              {trucks.map((truck ) => {
                  return (
                  <div className='truck' key={truck.number}> 
                    <Truck truck={truck}/> 
                  </div>
                    )
                })}
            </div> */}

          </>
        )

}

export default Parking



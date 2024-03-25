
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

  const [activeCar, setActiveCar] = useState();

  

  const [cars, setCars] = useState([
      {parkingPlace: 1, number: 123, date: ' 01.01.2024', isPaid: true}, 
      {parkingPlace: 2, number: 223, date: ' 10.01.2024', isPaid: false},
      {parkingPlace: 3, number: 326, date: ' 20.01.2024', isPaid: true},
      {parkingPlace: 4, number: 111, date: ' 01.01.2024', isPaid: true}, 
      {parkingPlace: 5, number: 222, date: ' 10.01.2024', isPaid: false},
      {parkingPlace: 6, number: 333, date: ' 20.01.2024', isPaid: true},
      {parkingPlace: 7, number: 363, date: ' 01.01.2024', isPaid: true}, 
      {parkingPlace: 8, number: 322, date: ' 10.01.2024', isPaid: false},
      {parkingPlace: 9, number: 623, date: ' 20.01.2024', isPaid: true},
      {parkingPlace: 10, number: 456, date: ' 10.01.2024', isPaid: false},
      {parkingPlace: 11, number: null, date: ' ', isPaid: false},

      
      // {number: 123, date: ' 01.01.2024', isPaid: true}, 
      // {number: 223, date: ' 10.01.2024', isPaid: false},
      // {number: 326, date: ' 20.01.2024', isPaid: true},
      // {number: 123, date: ' 01.01.2024', isPaid: true}, 
      // {number: 223, date: ' 10.01.2024', isPaid: false},
      // {number: 326, date: ' 20.01.2024', isPaid: true},
      
    ]);

    function changeCars(cars, setCars){
      return [...cars, setCars]
    }


    const createCar = (newCar) => {
      setCars([...cars, newCar])
    }

    // function removeCar (newValue1) {
    //   console.log('newWalue1' , newValue1);
    //   let removeCarInd = cars.findIndex(c => c.parkingPlace ===  newValue1.parkingPlace);
    //   console.log('ind1', removeCarInd);
    //   const reNewCars = cars;
    //   reNewCars[removeCarInd] = newValue1;
    //   console.log(reNewCars);
    //   setCars(reNewCars);
    // }

    const removeCar = (car) => {
      // alert('Whant to delete? Push the \'submit\' button')
      alert('Car was deleted.')
     
      setCars(cars.filter(c => c.number !== car.number))


    
    }

    const trucks = [
      {number: 321, date: ' 11.11.2024', isPaid: false}, 
      {number: 232, date: ' 20.01.2024', isPaid: true},
      {number: 623, date: ' 29.02.2024', isPaid: false},
      
    ]


    function onSubmit (newValue) {
      console.log('newWalue' , newValue);
      let changeCarInd = cars.findIndex(c => c.parkingPlace ===  newValue.parkingPlace);
      console.log('index', changeCarInd);
      const newCars = cars;
      // newCars.splice(changeCarInd, 1, newValue)
      newCars[changeCarInd] = newValue;
      console.log(newCars);
      setCars(newCars);
      
      // console.log(cars.findIndex(c => c.number ===  c.number));
      // return car
      // cars = [...cars, setCars]
      setModal(false);
     
    }

return (
          <>
            
            <div className={style.parkingCar}>
              {/* <MyButton onClick= {() => createCar()} >Create Car</MyButton> */}
              {/* <MyModal >
                <Car create={createCar} />
              </MyModal> */}
              {/* {modal && MyModal} */}
              {modal && <div className={styles.myModal}>
                <Form car={activeCar} onSubmit={onSubmit} onCancel={() => setModal(false)}/>  
              </div>}
              {cars.map((car ) => {
                return (
                  <div className={style.Car} key={car.number} onClick={() => {setModal(true); setActiveCar(car)}}> 
                    <Car car={car} remove={removeCar}
                      //       ={((car) => {
                      //   setCars(cars.filter(c => c.number !== car.number))
                      // })}

                      /> 
                      {/* <ParkingPlace/> */}
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



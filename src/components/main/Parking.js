
import Car from './models/Car'
import Truck from './models/Truck';
import style from './models/car.module.css'

function Parking () {

  const cars = [
      {number: 123, date: ' 01.01.2024', isPaid: true}, 
      {number: 223, date: ' 10.01.2024', isPaid: false},
      {number: 326, date: ' 20.01.2024', isPaid: true},
      {number: 123, date: ' 01.01.2024', isPaid: true}, 
      {number: 223, date: ' 10.01.2024', isPaid: false},
      {number: 326, date: ' 20.01.2024', isPaid: true},
      {number: 123, date: ' 01.01.2024', isPaid: true}, 
      {number: 223, date: ' 10.01.2024', isPaid: false},
      {number: 326, date: ' 20.01.2024', isPaid: true},
      {number: 223, date: ' 10.01.2024', isPaid: false},
      {number: 326, date: ' 20.01.2024', isPaid: true},
      {number: 123, date: ' 01.01.2024', isPaid: true}, 
      {number: 223, date: ' 10.01.2024', isPaid: false},
      {number: 326, date: ' 20.01.2024', isPaid: true},
      {number: 123, date: ' 01.01.2024', isPaid: true}, 
      {number: 223, date: ' 10.01.2024', isPaid: false},
      {number: 326, date: ' 20.01.2024', isPaid: true},
      
    ];

    const trucks = [
      {number: 321, date: ' 11.11.2024', isPaid: false}, 
      {number: 232, date: ' 20.01.2024', isPaid: true},
      {number: 623, date: ' 29.02.2024', isPaid: false},
      
    ]

return (
          <>
            <div className={style.parkingCar}>
              {cars.map((car ) => {
                return (
                  <div className={style.Car} key={car.number}> 
                    <Car car={car}/> 
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



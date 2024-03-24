import React, { useState } from 'react'
import styles from '../modals/MyModal.module.css'
import Parking from '../../Parking';
import Car from '../Car';

const Form = ({car, onSubmit, onCancel}) => {

    const [currentCar, setCurrentCar] = useState(car);

    function onSave(e) {
        e.preventDefault();
        onSubmit(currentCar);
        
    }
   

    function numberHandleChange (e) {

            // const carCopy = 
            // carCopy.number = e.target.value;
            setCurrentCar({
                ...currentCar, 
                number: e.target.value
            });
        
        // if(e !== Number){
        //     const carCopy = {...car};
        //     carCopy.number = e.target.value;
        //     return setCurrentCar(carCopy)
        // }
        // else alert('You enter not a number');


        // setCurrentCar({value: e.target.value})
        
        
    }
    function dateHandleChange (e) {
        const carCopy = {...car};
        carCopy.date = e.target.value;
        setCurrentCar(carCopy)
        
    }

    function parkingPlaceHandleChange (e) {
        const carCopy = {...car};
        carCopy.parkingPlace = e.target.value;
        setCurrentCar(carCopy)
        
    }
    
  return (

        <form className={styles.form}> 
            <div>
                <div><input type='text'  value={currentCar.parkingPlace} onInput={parkingPlaceHandleChange}  placeholder={'parking place'} /></div>
                <p></p>
                <div><input type='text' name='number' value={currentCar.number} onInput={numberHandleChange} placeholder={ 'car number'} /></div>
                <p></p>
                <div><input type='text' name='date' value={currentCar.date} onInput={dateHandleChange} placeholder='parking time' /></div>
                <p></p>
                <div>is Payed?<input type='checkbox' value={currentCar.isPayed} placeholder='is Payed' /> </div>
                <p></p>
            </div>
            <div>
                <button className={styles.buttonLeft} onClick={onSave}> Submit </button>
                <button className={styles.buttonRight} onClick={onCancel}> Cancel </button>
            </div>
        </form>
  
  )
}

export default Form
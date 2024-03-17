import React, { useState } from 'react'
import styles from '../modals/MyModal.module.css'

const Form = () => {

    const [modal, setModal] = useState(false);

    function onSubmit() {
        return null;
    }

  return (

        <form className={styles.form}> 
            <div>
                <div><input type='text' placeholder='parking place' /></div>
                <p></p>
                <div><input type='text' placeholder='car number' /></div>
                <p></p>
                <div><input type='text' placeholder='parking time' /></div>
                <p></p>
                <div>Is car?<input type='checkbox' placeholder='is car' /> </div>
                <p></p>
            </div>
            <div>
                <button className={styles.buttonLeft} onClick={() => onSubmit()}>Submit </button>
                <button className={styles.buttonRight} onClick={() => setModal(false)}>Cencel </button>
            </div>
        </form>
  
  )
}

export default Form
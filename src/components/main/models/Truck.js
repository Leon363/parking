import style from './car.module.css'
import React from 'react'

function Truck ({truck}) {
    
    return(
        <div className={style.Truck}>
            <div>{truck.number}</div>
            <div>{truck.date}</div>
            <div>{truck.isPaid.toString()}</div>
        </div>

    )
}

export default Truck
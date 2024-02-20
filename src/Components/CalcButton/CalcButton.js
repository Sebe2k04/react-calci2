import React from 'react';
import './CalcButton.css'
const CalcButton = (props) => {
    
  return (
    <div className="calcButton">
        <button className={props.className} onClick={props.onClick}>{props.value}</button>
    </div>
    )
}

export default CalcButton
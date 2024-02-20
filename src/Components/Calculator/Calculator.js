import React, { useState } from 'react';
import './Calculator.css'
import CalcButton from '../CalcButton/CalcButton'

let total='',displayVal='';
const Calculator = () => {
    let val;
    const [value,setValue] = useState('0');
    const handleClick = (e) => {
        
        val=e.target.innerText
        displayVal=displayVal+val
        setValue(displayVal);
        total=total+val
        console.log(total);
    }
    const handleEquals = (e) => {
        try{
            setValue(eval(total));
        }
        catch{
            setValue('MathError');
            displayVal='';
            total=''; 
        }
    }
    const handleClear = () =>{
        setValue('0');
        total='';
        displayVal='';
    }
    const handleOperator = (e) => {
        val=e.target.innerText
        setValue(val);
        displayVal='';
        total=total+val
        console.log(total);
    }


  return (
    <div className='calculator'>
        <div className="display">
            <div className="display-content">
                {value}
            </div>
        </div>
        <div className="layout">
            <CalcButton className='border-lUp' value='7' onClick={handleClick} />
            <CalcButton value='8' onClick={handleClick}/>
            <CalcButton  value='9'  onClick={handleClick}/>
            <CalcButton className='operator border-rUp' value='/' onClick={handleOperator}/>
            <CalcButton value='4' onClick={handleClick}/>
            <CalcButton value='5' onClick={handleClick}/>
            <CalcButton value='6' onClick={handleClick}/>
            <CalcButton className='operator' value='*' onClick={handleOperator} />
            <CalcButton value='1' onClick={handleClick}/>
            <CalcButton value='2' onClick={handleClick} />
            <CalcButton value='3' onClick={handleClick} />
            <CalcButton className='operator' value='-' onClick={handleOperator} />
            <CalcButton className='border-lBottom' value='C' onClick={handleClear} />
            <CalcButton value='0' onClick={handleClick} />
            <CalcButton value='=' onClick={handleEquals} />
            <CalcButton className='operator border-rBottom' value='+' onClick={handleOperator} />
        </div>

        

    </div>
  )
}

export default Calculator
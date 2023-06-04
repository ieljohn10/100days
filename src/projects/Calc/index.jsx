import { useState } from 'react';
import './calc.scss';
import CalcButton from '../../components/CalcButton';

export default function Calc() {
  const [displayVal, setDisplayVal] = useState('');

    
  const btnLength = (count) => {
    let btnArr = [];
    for (let i = 0; i <= count; i++) {
      btnArr.push(
        <CalcButton
          name = {`btnCalc calc-num-${i}`}
          key = {i}
          value = {i}
          // oncClick = {handleClick(i)}
        />
      )
    }
  }

  // const handleClick = (num) => {
  //   setDisplayVal((prevValue) => prevValue + num);
  // };

  // const handleOperator = (operator) => {
  //   setDisplayVal((prevVal) => prevVal + operator);
  // };

  // const handleDecimals = () => {
  //   if(!displayVal.includes('.')) {
  //     setDisplayVal((prevVal) => prevVal + '.');
  //   }
  // };

  // const handleClear = () => {
  //   setDisplayVal('');
  // }

  // const handleCalculate = () => {
  //   try{
  //     const result = eval(displayVal);
  //     setDisplayVal(result.toString());
  //   } catch (error) {
  //     setDisplayVal('Error');
  //   }
  // };


  return(
    <div className="calculator">
      <h1>fdsfsdf</h1>
      <div className="btn-num-container">
        {
          btnLength(9)
        }
      </div>
    </div>
  )
}
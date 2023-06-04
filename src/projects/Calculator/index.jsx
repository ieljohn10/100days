import { useState } from 'react';
import './calculator.scss';

export default function Calculator() {
  const [displayValue, setDisplayValue] = useState('');

  const handleNumberClick = (number) => {
    setDisplayValue((prevValue) => prevValue + number);
  };

  const handleOperatorClick = (operator) => {
    setDisplayValue((prevValue) => prevValue + operator);
  };

  const handleDecimalClick = () => {
    if (!displayValue.includes('.')) {
      setDisplayValue((prevValue) => prevValue + '.');
    }
  };

  const handleClearClick = () => {
    setDisplayValue('');
  };

  const calculateResult = () => {
    try {
      const result = eval(displayValue);
      setDisplayValue(result.toString());
    } catch (error) {
      setDisplayValue('Error');
    }
  };

  return (
    <div>
      <input type="text" value={displayValue} readOnly />
      <div>
        <button onClick={() => handleNumberClick('1')}>1</button>
        <button onClick={() => handleNumberClick('2')}>2</button>
        <button onClick={() => handleNumberClick('3')}>3</button>
        <button onClick={() => handleOperatorClick('+')}>+</button>
        <br />
        <button onClick={() => handleNumberClick('4')}>4</button>
        <button onClick={() => handleNumberClick('5')}>5</button>
        <button onClick={() => handleNumberClick('6')}>6</button>
        <button onClick={() => handleOperatorClick('-')}>-</button>
        <br />
        <button onClick={() => handleNumberClick('7')}>7</button>
        <button onClick={() => handleNumberClick('8')}>8</button>
        <button onClick={() => handleNumberClick('9')}>9</button>
        <button onClick={() => handleOperatorClick('*')}>*</button>
        <br />
        <button onClick={() => handleDecimalClick()}>.</button>
        <button onClick={() => handleNumberClick('0')}>0</button>
        <button onClick={() => handleClearClick()}>C</button>
        <button onClick={() => handleOperatorClick('/')}>/</button>
        <br />
        <button onClick={() => calculateResult()}>=</button>
      </div>
    </div>
  );
}
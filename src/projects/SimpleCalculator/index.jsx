import './simple-calculator.scss'
import CalcButton from '../../components/CalcButton';
import { useEffect, useRef, useState } from 'react';

export default function SimpleCalculator() {
  const [numVal, setNumVal] = useState('');
  const [secondNumVal, setSecondNumVal] = useState('');
  const [operator, setOperator] = useState('');
  const [newResult, setNewResult] = useState('');
  const inputRef = useRef(null);
  
  
  const operatorArr = [
    {
      id: 1,
      name: 'plus',
      value: '+'
    },
    {
      id: 2,
      name: 'minus',
      value: '-'
    },
    {
      id: 3,
      name: 'divide',
      value: '/'
    },
    {
      id: 4,
      name: 'multiply',
      value: 'x'
    }
  ];

  const handleInput = (number) => {
    setNumVal((prevVal) => prevVal + number)
    console.log(number)
  }

  const BtnNumLength = () => {
    const numArr = Array(10).fill(null)
    const comp = numArr.map((item, index) => (
      <CalcButton 
        name={`btn calc-btn-${index}`}
        key={index}
        value={index}
        onClick={() => handleInput(index)}
      />
    )).reverse()

    return comp;
  }

  

  const handleOperator = (operator) => {
    if((numVal || secondNumVal) !== '' && null){
      console.log('provide number')
    } else if(secondNumVal === '') {
      if(!numVal.includes(`${operatorArr.value}`)) {
        setNumVal((prevVal) => prevVal + operator)
        setSecondNumVal(numVal);
        setOperator(operator);
      }
  
      if(numVal.includes(`${operatorArr.value}`)) {
        setNumVal((prevVal) => prevVal + operator)
        setOperator(operator);
      }
      console.log('input: ', inputRef.current.value)
    }
  }
  
  useEffect(() => {
    setNumVal('')
  }, [secondNumVal])

  const handleDecimal = () => {
    if(inputRef.current.value === '') {
      setNumVal((prevVal) => prevVal + "0" + ".")
    } else if(numVal.includes(`$({operatorArr.value})`)){
      if(!numVal.includes('.')) {
        setNumVal((prevVal) => prevVal + '.')
        // setSecondNumVal(numVal);
       }
    } else {
      if(!numVal.includes('.')) {
        setNumVal((prevVal) => prevVal + '.')
        // setSecondNumVal(numVal);
      }
    }
    
    if((inputRef.current.value).includes(`$({operatorArr.value})`)){
      console.log('already have an operator')
    }
  }

  const handleResult = () => {
    switch(operator){
      case '+':
        setNewResult(Number(numVal) + Number(secondNumVal));
        setSecondNumVal('')
        break;
      case '-':
        setNewResult(Number(numVal) - Number(secondNumVal));
        setSecondNumVal('')
        break;
      case 'x':
        setNewResult((numVal) * Number(secondNumVal));
        setSecondNumVal('')
        break;
      case '/':
        setNewResult(Number(numVal) / Number(secondNumVal));
        setSecondNumVal('')
        break;   
    }
  }


  const handleClear = () => {
    setNumVal('')
    setSecondNumVal('');
  }

  useEffect(() => {
      setNumVal((prevVal) => prevVal + newResult)
  }, [newResult])


  const handleModulo = () => {
    setNewResult(Number(inputRef.current) % Number(secondNumVal));
  }

  console.log('first: ',numVal)
  console.log('second: ', secondNumVal)
  console.log('result', newResult)

  return(
    <div className="Content">
      <input 
        className='calc-input'
        ref={inputRef} 
        placeholder='0' 
        type="text" 
        dir='rtl'
        pattern=''
        value={numVal}
        readOnly
      />
      <div className="btn-container">
        <div className="calc-num-container">
          <>
            {BtnNumLength() }
          </>
          <CalcButton name='btn decimal' onClick={handleDecimal} value='.'/>
          <CalcButton name='btn modulo' value='%' onClick={handleModulo}/>
        </div>
        <div className="calc-operator-container"> 
          { 
            operatorArr.map(item => {
              return(
                <CalcButton 
                  key = {item.id}
                  name = {`btn btn-${item.name}`}
                  value = {item.value}
                  onClick={() => handleOperator(item.value)}
                />
              )
            })
          }
        </div>
        <div className="other-btnContainer">
          <CalcButton name='btn total' value='=' onClick={handleResult}/>
          <CalcButton name='btn clear' value='C' onClick={handleClear}/>
          <button onClick={() => handleInput(2)}>test</button>
        </div>
      </div>
    </div>
  )
}
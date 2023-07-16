import { useEffect, useState } from "react";
import './javascript.scss';

const Person = (props) => {
  return ( 
    <>
      <h1>Name: {props.name}</h1>
      <h2>Last Name: {props.LastName}</h2>
      <h2>Age: {props.age}</h2>
    </>
   );
}

const Training = () => {
  const isNameShowing = true;
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    alert(`You have change the counter to, ${counter}`)
  }, [counter])

  return ( 
    <div className="App">
      {/* Conditional Rendering */}
      { isNameShowing ?
        <>
          <Person 
            name={'John'} 
            LastName={'Doe'} 
            age={25}
          />
        </> : 
        <>
          <h2>No Data</h2>
        </>
      }

      {/* Basic of useState Hook */}
      <div className="Counter">
        <button onClick={() => setCounter((prevCount) => prevCount + 1)}>+</button>
        <h1>{counter}</h1>
        <button onClick={() => setCounter((prevCount) => prevCount - 1)}>+</button>
      </div>

    </div>
  );
}
 
export default Training;
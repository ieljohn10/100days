import { createContext, useState } from 'react';
import SimpleCalculator from './projects/SimpleCalculator';
export const ListContext = createContext();
import './App.css'

function App() {
  const [list, setList] = useState([]);
  const [count, setCount] = useState(1);

  const globalState = {
    list,
    setList,
    count,
    setCount
  };

  return (
    <ListContext.Provider value={globalState}> 
      <SimpleCalculator />
    </ListContext.Provider>
  )
}

export default App;
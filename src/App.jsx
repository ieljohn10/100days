import { createContext, useState } from 'react';
import WeatherApp from './projects/WeatherApp';
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
      <WeatherApp />      
    </ListContext.Provider>
  )
}

export default App;
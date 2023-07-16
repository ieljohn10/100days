import { createContext, useState } from 'react';
// import WeatherApp from './projects/WeatherApp';
export const ListContext = createContext();
import './App.css'
import Movie from './pages/Movie';
// import Training from './pages/Javascript';
// import Login from './pages/Login';
// import Authentication from './projects/Authentication';

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
      {/* <Authentication />      */}
      <Movie />
    </ListContext.Provider>
  )
}

export default App;
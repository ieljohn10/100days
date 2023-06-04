import './App.css'
// import TodoList from './projects/todo-list'
import { createContext, useState } from 'react';
// import Calculator from './projects/calculator';
import Calc from './projects/Calc';
export const ListContext = createContext();

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
      {/* <TodoList /> */}
      {/* <Calculator /> */}
      <Calc />
    </ListContext.Provider>
  )
}

export default App;
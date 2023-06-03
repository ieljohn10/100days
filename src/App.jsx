import './App.css'
import TodoList from './projects/todo-list'
import React, { createContext, useState } from 'react';
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
      <TodoList />
    </ListContext.Provider>
  )
}

export default App;
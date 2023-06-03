import { BsFillBookmarkFill } from 'react-icons/bs';
import { MdOutlineDelete, MdEditNote, MdOutlineChecklist } from 'react-icons/md';
import './todo-list.scss';
import { useContext, useRef, useState } from 'react';
import { ListContext } from '../../App';

const TodoList = () => {
  const globalState = useContext(ListContext);
  const { list, setList, count, setCount } = globalState;
  const [editItemNum, setEditItemNum] = useState();
  const [showModal, setShowModal] = useState(false);
  const [focusId, setFocusId] = useState(-1);
  const taskRef = useRef(null);
  const editRef = useRef(null);

  // Add Task Handler
  const addTaskHandler = () => {
    const now = new Date();
    const newEntry = {
      id: count,
      task: taskRef.current.value,
      timeStamp: now.getTime(),
      isComplete: false
    }
    
    newEntry.task === '' ?
      console.log('please provide task')
    :
      setList([...list, newEntry])
      setCount(prev => prev + 1);
      taskRef.current.value = '';
  }

  // Length of Checked Task
  const checkedLength = (list.filter(item => item.isComplete === true)).length;

  // Handle Delete
  const deleteHandle = (id) => {
    const newArr = list.filter(data => data.id !== id);
    setList(newArr)
  }

  // Handle the checkbox
  const checkHandle = (e) => {
    const {id,checked} = e.target
    const completedTodo = list.map((todo) => {
      if(todo.id === Number(id)){        
        return {...todo, isComplete: checked}
        
      }else{
        return todo
      }
    })
    setList(completedTodo)
  }
  
  // Modal Handler
  const handleModal = (id) => {
    const currModal = list.filter(item => item.id === id)
    setEditItemNum(currModal[0].task)
    setShowModal(true);
    setFocusId(id);
  }

  // Edit Handler
  const editHandle = (id) => {
    setEditItemNum(editRef.current.value);
    setShowModal(false);

    const myList = list;
    const editedItemIndex = myList.findIndex(item => item.id === id);
    myList[editedItemIndex].task = editRef.current.value;
    setList(myList);
  }

  return ( 
    <div className="todoList">
      <header>
        <BsFillBookmarkFill className={'icon'} />
        <h3>Todo List</h3>
      </header>
      <div className='addTaskContainer'>
        <input type="text" ref={taskRef} id="createTodo" maxLength={30}/>
        <button onClick={addTaskHandler}>Add Task</button>
      </div>

      <div className="list-desc">
        <p>{list.length}</p>
        <p>Done: {checkedLength}/{list.length}</p>
      </div>

      <ul>
        {
          list.map(item => {
            return(
              <li key={item.id} className={item.isComplete ? "checked" : "unchecked"}>
                <div className="control">
                  <input type="checkbox" id={item.id} value={item.task} onChange={checkHandle} />
                  <MdOutlineDelete className='delete' onClick={() => deleteHandle(item.id)}/>
                  <MdEditNote className='edit' onClick={() => handleModal(item.id)}/>
                </div>
                <p>{item.task}</p>
              </li>
            )
          })
        }
      </ul>


  {/* Modal */}
    {
      showModal ?
        <div className="overlay">
          <div className="modal">
            <div className="modal-title">
              <MdEditNote className='icon'/>
              <p>Edit Task</p>
            </div>
            <input ref={editRef} className='modal-input' type="text" defaultValue={editItemNum} />
            <div className="modal-control">
              <button className='modal-ok' onClick={() => editHandle(focusId)}>OK</button>
              <button className='modal-cancel' onClick={() => setShowModal(false)}>Cancel</button>
            </div>
          </div>
        </div>
      : null
    }
      
    </div>
   );
}
 
export default TodoList;
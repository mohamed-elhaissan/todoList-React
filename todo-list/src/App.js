import "./App.css";
import { useRef, useState } from "react";
function App() {
  const [todos, setTodos] = useState([]);
  const inputRef = useRef();
  const handlerInputValue = () => {
    const inputValue = inputRef.current.value;
    const newItem = {
      competed: false,
      task: inputValue,
    };
    setTodos([...todos, newItem]);
    inputRef.current.value = "";
  };
  const handleDoneItem = (index) => {
    const newTodosList = [...todos];
    newTodosList[index].competed = !newTodosList[index].competed;
    setTodos(newTodosList);
  };
  const handleDeleteTask = (index)=>{
    const newTodosList = [...todos];
    newTodosList.splice(index,1);
    setTodos(newTodosList);
  }
  console.log(todos);
  return (
    <div className="App">
      <header>
        <input type="text" placeholder="Add a new task..." ref={inputRef} />
        <button onClick={handlerInputValue}>
          Create<ion-icon name="add-circle-outline"></ion-icon>
        </button>
      </header>
      <section>
        {todos.map(({ task, competed }, index) => {
          return (
            <div className="list" key={index}>
              <div className={competed ? "TaskDone" : ''}>
                <ion-icon
                  name="checkmark-outline"
                  onClick={() => handleDoneItem(index)}
                ></ion-icon>
                {task}
              </div>
              <ion-icon name="trash-outline" onClick={()=>{handleDeleteTask(index)}}></ion-icon>
            </div>
          );
        })}
      </section>
    </div>
  );
}

export default App;

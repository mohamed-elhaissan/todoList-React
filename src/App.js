import "./App.css";
import {  useRef, useState } from "react";
import gsap from "gsap";
import { toast, ToastContainer } from "react-toastify";
function App() {
  const [todos, setTodos] = useState([]);
  const inputRef = useRef();
  const lastItem = useRef();
  const sectionRef = useRef(null);
  const handleItemAddTask = () => {
    const inputValue = inputRef.current.value;
    if (inputValue) {
      const newItem = {
        competed: false,
        task: inputValue,
      };
      setTodos([...todos, newItem]);
      toast.success('good')
      gsap.fromTo(lastItem.current,{
        opacity : 0,ease:'back',x : '-100px'
      },{
        opacity : 1,ease:'back',x : '0px'
      })
      inputRef.current.value = "";
    } else {
      console.log("error");
      toast.error('something wrong here')
    }
  };
  const handleDoneItem = (index) => {
    const newTodosList = [...todos];
    newTodosList[index].competed = !newTodosList[index].competed;
    setTodos(newTodosList);
  };
  const handleDeleteTask = (index) => {
    gsap.to(`[data-id="${index}"]`, {
      scale: 0,
      ease: "power4",
      duration: 0.5,
      onComplete: () => {
        const newTodosList = [...todos];
        newTodosList.splice(index, 1);
        setTodos(newTodosList);
      },
    });
  };
 
  return (
    <div className="App">
      <header>
        <input type="text" placeholder="Add a new task..." ref={inputRef} onKeyDown={(event)=>{
          if(event.key === 'enter'){
            handleItemAddTask()
          }
        }}/>
        <button onClick={handleItemAddTask}>
          Create<ion-icon name="add-circle-outline"></ion-icon>
        </button>
      </header>
      <section ref={sectionRef}>
        {todos.map(({ task, competed }, index) => {
          return (
            <div
              className="list"
              key={index}
              data-id={index}
              ref={index === todos.length - 1 ? lastItem : null}
            >
              <div className={competed ? "TaskDone" : ""}>
                <ion-icon
                  name="checkmark-outline"
                  onClick={() => handleDoneItem(index)}
                ></ion-icon>
                {task}
              </div>
              <ion-icon
                name="trash-outline"
                onClick={() => {
                  handleDeleteTask(index);
                }}
              ></ion-icon>
            </div>
          );
        })}
      </section>
      <ToastContainer/>
    </div>
  );
}

export default App;

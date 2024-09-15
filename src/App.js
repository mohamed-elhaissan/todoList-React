import "./App.css";
import { useRef, useState } from "react";
import gsap from "gsap";
function App() {
  const [todos, setTodos] = useState([]);
  const inputRef = useRef();
  const sectionRef = useRef(null);
  const handleItemAddTask = () => {
    const inputValue = inputRef.current.value;
    if (inputValue) {
      const newItem = {
        competed: false,
        task: inputValue,
      };
      setTodos([...todos, newItem]);
      const lastTask = sectionRef.current.lastChild;
      gsap.from(lastTask, { opacity: 0, x: "-100%", ease: "back" });
      inputRef.current.value = "";
    } else {
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
        <input type="text" placeholder="Add a new task..." ref={inputRef} />
        <button onClick={handleItemAddTask}>
          Create<ion-icon name="add-circle-outline"></ion-icon>
        </button>
      </header>
      <section ref={sectionRef}>
        {todos.map(({ task, competed }, index) => {
          return (
            <div className="list" key={index} data-id={index}>
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
    </div>
  );
}

export default App;

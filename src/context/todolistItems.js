import { createContext, useState } from "react";

export const todoContext = createContext();
export default function TodoListProvider({children}) {
  const [todoItem, setTodoItems] = useState([]);
  return (
    <todoContext.Provider value={{todoItem, setTodoItems}}>
      {children}
    </todoContext.Provider>
  );
}

import TodoAdvanced from "./componants/todos";
import Catego from "./componants/Catego";
import { useEffect, useState } from "react";
import Dark
function App() {

  useEffect(()=>{
    if (darkmodeisActive) {
      document.body.classList.add('dark')
    }else {
      document.body.classList.remove('dark')
      document.body.classList.add('light')

    }
    
  },[darkmodeisActive])
  return (
    <div className="flex">
      <Catego/>
      <TodoAdvanced/>      
    </div>
  )
}
export default App;

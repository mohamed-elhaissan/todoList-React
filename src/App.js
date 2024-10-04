import TodoAdvanced from "./componants/todos";
import Catego from "./componants/Catego";
import { useContext, useEffect } from "react";
import { DarkMode } from "./context/DarkmodeContext";
function App() {
  const {isDarkModeActvated} = useContext(DarkMode)
  useEffect(()=>{
    if (isDarkModeActvated) {
      document.body.classList.add('dark')
    }else {
      document.body.classList.remove('dark')

    }
    
  },[isDarkModeActvated])
  return (
    <div className="flex">
      <Catego/>
      <TodoAdvanced/>      
    </div>
  )
}
export default App;

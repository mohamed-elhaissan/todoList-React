import TodoAdvanced from "./componants/todos";
import Catego from "./componants/Catego";
function App() {
 
  return (
    <div className="flex gap-3">
      <Catego/>
      <TodoAdvanced/>      
    </div>
  )
}
export default App;

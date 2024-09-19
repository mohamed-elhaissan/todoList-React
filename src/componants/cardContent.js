import { GoPlus } from "react-icons/go";
import moment from "moment"; // Or use date-fns
import Item from "./items";
import { useContext, useRef, useState } from "react";
import { div } from "framer-motion/client"
import { todoContext } from "../context/todolistItems";
import { toast, ToastContainer } from "react-toastify";
export default function CardContent() {
  const [currentDate, setCurrentDate] = useState(new Date());
  
  const {todoitem,setTodoItems} = useContext(todoContext)
  const input = useRef()
  const optionInput = useRef()
  const dateInput = useRef()

  const addItems = ()=>{
    if(input.current.value.length == 0){
      toast.error('try again')
    }
  }
  
  const formattedDate = moment(currentDate).format("YYYY-MM-DD");
  const handleChange = (event) => {
    setCurrentDate(new Date(event.target.value));
  };
  return (
    <div>
      <div>
        <ToastContainer/>
      </div>
      <div className="flex  relative w-[80%] font-[600]  mx-auto mb-4c gap-5  b ">
      <input ref={input}
        type="text" 
        placeholder="Add a new Task"
        className="border font-[500] rounded-lg w-[50%] px-5   focus:outline-[#6366F1]"
      />
      <select ref={optionInput}  className="border focus:outline-4 focus:outline-[#6366F1] rounded-lg cursor-pointer px-5">
        <option color='blue-600' value="Work">Work</option>
        <option color='green-600' value="Personal">Personal</option>
        <option color='orenge-600' value="Shopping">Shopping</option>
        <option color='red-600' value="Other">Other</option>
      </select>
      <div>
        <input ref={dateInput}  value={formattedDate} onChange={handleChange}
          type="date"
          className="border cursor-pointer rounded-md px-4 py-2 bg-white shadow-sm focus:outline-4 focus:outline-[#6366F1]"
        />
      </div>
      <button onClick={addItems} className="flex bg-black  focus:ring-blue-900 justify-center items-center text-white px-5 rounded-lg cursor-pointer gap-2">
        <GoPlus />
        Add
      </button>
      
    </div>
    <div className="h-2 bg-gray-300 mx-auto w-[80%] my-2 rounded-full">

    </div>
    <div>
      <Item />
    </div>
    </div>
  );
}

import { GoPlus } from "react-icons/go";
import moment from "moment"; // Or use date-fns
import Item from "./items";
import { useRef, useState } from "react";
import { div } from "framer-motion/client";
export default function CardContent() {
  const [currentDate, setCurrentDate] = useState(new Date());
  const dateInput = useRef()
  
  
  const formattedDate = moment(currentDate).format("YYYY-MM-DD");
  const handleChange = (event) => {
    setCurrentDate(new Date(event.target.value));
  };
  return (
    <div>
      <div className="flex  relative w-[80%] font-[600]  mx-auto mb-4c gap-5  b ">
      <input
        type="text"
        placeholder="Add a new Task"
        className="border font-[500] rounded-lg w-[50%] px-5 focus:outline-[#E5E7EB] focus:outline-8"
      />
      <select ref={dateInput} className="border rounded-lg cursor-pointer px-5">
        <option value="Work">Work</option>
        <option value="Personal">Personal</option>
        <option value="Shopping">Shopping</option>
        <option value="Other">Other</option>
      </select>
      <div>
        <input  value={currentDate} onChange={handleChange}
          type="date"
          className="border cursor-pointer rounded-md px-4 py-2 bg-white shadow-sm focus:ring-blue-500 focus:border-blue-500"
        />
      </div>
      <button className="flex bg-black justify-center items-center text-white px-5 rounded-lg cursor-pointer gap-2">
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

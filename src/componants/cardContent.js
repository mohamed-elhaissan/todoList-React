import { GoPlus } from "react-icons/go";
import moment from "moment"; // Or use date-fns
import Item from "./items";
import { useContext, useRef, useState } from "react";
import { todoContext } from "../context/todolistItems";
import { toast, ToastContainer } from "react-toastify";
import imageEmpty from "../assestes/imageEmpty.svg";

import "react-toastify/dist/ReactToastify.css";
export default function CardContent() {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [option, setOption] = useState(0);

  const { todoItem, setTodoItems } = useContext(todoContext);
  const input = useRef();
  const optionInput = useRef();
  const dateInput = useRef();
  const Colors = ["#3B82F6", "#22C55E", "#EAB308", "#A855F7"];
  const addItems = () => {
    if (input.current.value.length == 0) {
      toast.error("Error adding task. Please try again later");
    } else {
      const item = {
        task: input.current.value,
        option: optionInput.current.value,
        datetime: dateInput.current.value,
        color: Colors[option],
      };
      console.log(option);

      setTodoItems([...todoItem, item]);
      console.log(todoItem);

      toast.success("Task added successfully");
    }
  };

  const formattedDate = moment(currentDate).format("YYYY-MM-DD");
  const handleChange = (event) => {
    setCurrentDate(new Date(event.target.value));
  };
  return (
    <div>
      <div>
        <ToastContainer />
      </div>
      <div className="flex  relative w-[80%] font-[600]  mx-auto mb-4c gap-5  b ">
        <input
          ref={input}
          type="text"
          placeholder="Add a new Task"
          className="border font-[500] rounded-lg w-[50%] px-5   focus:outline-[#6366F1]"
        />
        <select
          ref={optionInput}
          className="border focus:outline-4 focus:outline-[#6366F1] rounded-lg cursor-pointer px-5"
        >
          <option value="Work">Work</option>
          <option value="Personal">Personal</option>
          <option value="Shopping">Shopping</option>
          <option value="Other">Other</option>
        </select>
        <div>
          <input
            ref={dateInput}
            value={formattedDate}
            onChange={handleChange}
            type="date"
            className="border cursor-pointer rounded-md px-4 py-2 bg-white shadow-sm focus:outline-4 focus:outline-[#6366F1]"
          />
        </div>
        <button
          onClick={addItems}
          className="flex bg-black  focus:ring-blue-900 justify-center items-center text-white px-5 rounded-lg cursor-pointer gap-2"
        >
          <GoPlus />
          Add
        </button>
      </div>
      <div className="h-2 bg-gray-300 mx-auto w-[80%] my-2 rounded-full"></div>
      <div>
        {todoItem?.length === 0 ? (
          <span>
            Empty List
            <img src={imageEmpty} alt="" />
          </span>
        ) : (
          todoItem?.map((item, index) => {
            index == todoItem.length - 1 ? (
              <div>
                <Item
                  key={index}
                  inputitem={item.task}
                  optionval={item.option}
                  dateval={item.datetime}
                  color={item.color}
                />
              </div>
            ) : (
              <div>
                <Item
                  key={index}
                  inputitem={item.task}
                  optionval={item.option}
                  dateval={item.datetime}
                  color={item.color}
                />
              </div>
            );
          })
        )}
      </div>
    </div>
  );
}

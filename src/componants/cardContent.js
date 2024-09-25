import { GoPlus } from "react-icons/go";
import moment from "moment";
import { RiDeleteBinLine } from "react-icons/ri";
import { useContext, useEffect, useRef, useState } from "react";
import { todoContext } from "../context/todolistItems";
import { toast, ToastContainer } from "react-toastify";
import imageEmpty from "../assestes/imageEmpty.svg";
import { motion } from "framer-motion";
import "react-toastify/dist/ReactToastify.css";
export default function CardContent() {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [option, setOption] = useState(0);
  const { todoItem, setTodoItems } = useContext(todoContext);
  const input = useRef();
  const optionInput = useRef();
  const dateInput = useRef();
  const Colors = ["#3B82F6", "#22C55E", "#EAB308", "#A855F7"];
  useEffect(()=>{
    const addItems = () => {
      if (input.current.value.length == 0) {
        toast.error("Error adding task. Please try again later");
      } else {
        const item = {
          id: todoItem.length,
          task: input.current.value,
          choose: optionInput.current.value,
          datetime: dateInput.current.value,
          color: Colors[option],
        };
        console.log(option);
  
        setTodoItems([...todoItem, item]);
        console.log(todoItem);
  
        toast.success("Task added successfully");
      }
    };
  },[input.current.value])
  const deleteItem = (id) => {
    setTodoItems((prev) => prev.filter((item) => item.id != id));
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
        {todoItem?.length == 0 ? (
          <div className=" h-[80vh] flex flex-col-reverse justify-center items-center">
            <span className="text-3xl tracking-tight word-spacing-2">
              Nothing to do here yet
            </span>
            <img src={imageEmpty} alt="" />
          </div>
        ) : (
          todoItem?.map((item, index) => {
            index == todoItem.length - 1 ? (
              <div key={index}
                className="shadow-lg mb-0 flex items-center justify-between px-4 py-5 rounded-lg mt-5 mx-auto w-1/2"
              >
                <div className="flex items-center justify-center gap-2 ">
                  <input type="checkbox" className="w-[100%] h-[100%]" />
                  <p>{item.task}</p>
                </div>
                <div className="flex  items-center justify-center gap-2">
                  <p
                    className="bg-green-500 font-[400] text-xs rounded-full px-3 py-1 text-white "
                    style={{ background: item.color }}
                  >
                    {item.choose}
                  </p>
                  <p className=" text-xs rounded-full px-2 border-2 border-[1px solid black] w-full font-[500]">
                    {item.datetime}
                  </p>
                  <RiDeleteBinLine className=" hover:bg-gray-100  cursor-pointer  w-[30%] h-[30%] p-2 rounded-full text-red-500 text-xl" />
                </div>
              </div>
            ) : (
              <div className="shadow-lg mb-0 flex items-center justify-between px-4 py-5 rounded-lg mt-5 mx-auto w-1/2">
                <div className="flex items-center justify-center gap-2 ">
                  <input type="checkbox" className="w-[100%] h-[100%]" />
                  <p>{item.task}</p>
                </div>
                <div className="flex  items-center justify-center gap-2">
                  <p
                    className="bg-green-500 font-[400] text-xs rounded-full px-3 py-1 text-white "
                    style={{ background: item.color }}
                  >
                    {item.choose}
                  </p>
                  <p className=" text-xs rounded-full px-2 border-2 border-[1px solid black] w-full font-[500]">
                    {item.datetime}
                  </p>
                  <RiDeleteBinLine className=" hover:bg-gray-100  cursor-pointer  w-[30%] h-[30%] p-2 rounded-full text-red-500 text-xl" />
                </div>
              </div>
            );
          })
        )}
      </div>
    </div>
  );
}

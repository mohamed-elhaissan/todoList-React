import { GoPlus } from "react-icons/go";
import moment from "moment";
import { RiDeleteBinLine } from "react-icons/ri";
import { useContext, useRef, useState } from "react";
import { todoContext } from "../context/todolistItems";
import { toast, ToastContainer } from "react-toastify";
import imageEmpty from "../assestes/imageEmpty.svg";
import "react-toastify/dist/ReactToastify.css";
import { AnimatePresence, motion } from "framer-motion";
export default function CardContent() {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [isCompleted,setCompleted] = useState()
  const [option, setOption] = useState(0);
  const { todoItem, setTodoItems } = useContext(todoContext);
  const input = useRef();
  const optionInput = useRef();
  const dateInput = useRef();
  const Colors = ["#3B82F6", "#22C55E", "#EAB308", "#A855F7"];
  const addItems = () => {
    if (input.current.value.length === 0) {
      toast.error("Error adding task. Please try again later");
    } else {
      const item = {
        id: todoItem.length,
        task: input.current.value,
        choose: optionInput.current.value,
        datetime: dateInput.current.value,
        color: Colors[option],
        completed: false,
      };
      console.log(option);

      setTodoItems([...todoItem, item]);
      console.log(todoItem);

      toast.success("Task added successfully");
      input.current.value = "";
    }
  };
  const deleteItem = (id) => {
    setTodoItems((prev) => prev.filter((item) => item.id !== id));
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
          <motion.div
            exit={{ opacity: 0 }}
            className="h-[80vh] flex flex-col-reverse justify-center items-center"
          >
            <span className="text-3xl tracking-tight word-spacing-2">
              Nothing to do here yet
            </span>
            <img src={imageEmpty} alt="" />
          </motion.div>
        ) : (
          <AnimatePresence>
            {todoItem?.map(
              ({ id, task, choose, datetime, color, completed }, index) => (
                <motion.div
                  key={index}
                  initial={{
                    opacity: index == todoItem.length - 1 ? 0 : 1,
                    y: index == todoItem.length - 1 ? "-10px" : "0px",
                  }}
                  animate={{
                    opacity: 1,
                    y: 0,
                  }}
                  exit={{
                    opacity: 0,
                    y: "-10px",
                  }}
                  layout
                  transition={{ duration: 0.2 }}
                  className="shadow-lg mb-0 flex items-center justify-between px-4 py-5 rounded-lg mt-5 mx-auto w-[60%]"
                >
                  <div className="flex relative items-center justify-center gap-2">
                    <div
                      className="w-6 h-6 bg-gray-300 cursor-pointer"
                      onClick={() => {
                        const updatedList = [...todoItem]
                        updatedList[index].completed = !updatedList[index].completed
                        setTodoItems(updatedList)
                      }}
                    >
                      <motion.svg 
                        initial={{ scale: 0 }}
                        animate={{ scale: completed ? 1 : 0 }}
                        transition={{
                          duration : 0.5,
                          ease : 'backInOut'
                        }}

                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M10.2568 19.3364C10.6138 19.3364 10.896 19.1787 11.0952 18.8716L18.9395 6.52002C19.0889 6.2793 19.147 6.09668 19.147 5.90576C19.147 5.44922 18.8481 5.15039 18.3916 5.15039C18.0596 5.15039 17.877 5.2583 17.6777 5.57373L10.2236 17.4521L6.35547 12.3887C6.14795 12.0981 5.94043 11.9819 5.6416 11.9819C5.16846 11.9819 4.84473 12.3057 4.84473 12.7622C4.84473 12.9531 4.92773 13.1689 5.08545 13.3682L9.39355 18.855C9.64258 19.1787 9.8999 19.3364 10.2568 19.3364Z"
                          fill="#23AA79"
                        />
                      </motion.svg>
                    </div>
                    <p>{task}</p>
                  </div>
                  <div className="flex items-center justify-center gap-2">
                    <p
                      className="bg-green-500 font-[400] text-xs rounded-full px-3 py-1 text-white"
                      style={{ background: color }}
                    >
                      {choose}
                    </p>
                    <p className="text-xs rounded-full px-2 border-2 border-[1px solid black] w-full font-[500]">
                      {datetime}
                    </p>
                    <RiDeleteBinLine
                      onClick={() => deleteItem(id)}
                      className="hover:bg-gray-100 cursor-pointer w-[30%] h-[30%] p-2 rounded-full text-red-500 text-xl"
                      aria-label="Delete task"
                    />
                  </div>
                </motion.div>
              )
            )}
          </AnimatePresence>
        )}
      </div>
    </div>
  );
}

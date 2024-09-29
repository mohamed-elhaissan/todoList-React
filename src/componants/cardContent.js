import { GoPlus } from "react-icons/go";
import moment from "moment";
import { RiDeleteBinLine } from "react-icons/ri";
import { RiDeleteBin6Line } from "react-icons/ri";

import { FiX } from "react-icons/fi";
import { useContext, useEffect, useRef, useState } from "react";
import { todoContext } from "../context/todolistItems";
import { FiCheckSquare } from "react-icons/fi";
import imageEmpty from "../assestes/imageEmpty.svg";
import { AnimatePresence, motion } from "framer-motion";
export default function CardContent() {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [message, setmessagge] = useState("");
  const [showmessage, setShowmessage] = useState(false);
  const { todoItem, setTodoItems } = useContext(todoContext);
  const input = useRef();
  const optionInput = useRef();
  const dateInput = useRef();
  const Colors = ["#3B82F6", "#22C55E", "#EAB308", "#A855F7"];
  const addItems = () => {
    if (input.current.value.length === 0) {
      setmessagge("Error adding task");
      setShowmessage(true);
    } else {
      const item = {
        id: todoItem.length,
        task: input.current.value,
        choose: optionInput.current.value,
        datetime: dateInput.current.value,
        color: Colors[optionInput.current.options.selectedIndex],
        completed: false,
        isDeleted : false
      };

      setTodoItems([...todoItem, item]);

      console.log(todoItem);
      setShowmessage(true);
      setmessagge("Task added successfully");

      input.current.value = "";
    }
  };
  useEffect(() => {
    let timeout;
    if (showmessage) {
      timeout = setTimeout(() => {
        setShowmessage(false);
      }, 4000);
    }
    return () => {
      clearTimeout(timeout);
    };
  }, [showmessage]);
  const showisDeleted = (id)=>{
    const newTodoItems = [...todoItem];
     newTodoItems[id].isDeleted = !newTodoItems[id].isDeleted
    setTodoItems([...newTodoItems])
  }
  const deleteItem = (id) => {
    setTodoItems((prev) => prev.filter((item) => item.id !== id));
  };
  const formattedDate = moment(currentDate).format("YYYY-MM-DD");
  const handleChange = (event) => {
    setCurrentDate(new Date(event.target.value));
  };
  const porcentage =
    (todoItem.filter((item) => item.completed).length / todoItem.length) *
      100 || 0;
  return (
    <div>
      <div>
        <AnimatePresence>
          {showmessage && (
            <motion.div
              layout
              initial={{ y: -15, scale: 0.95 }}
              animate={{ y: 0, scale: 1 }}
              exit={{ x: "100%", opacity: 0 }}
              transition={{ duration: 0.35, ease: "easeOut" }}
              className="p-2 absolute  z-10 top-2 text-md flex items-center rounded gap-2 right-2  font-medium shadow-lg text-white bg-indigo-500 pointer-events-auto"
            >
              <FiCheckSquare className=" mt-0.5" />
              <span>{message}</span>
              <button>
                <FiX
                  onClick={() => {
                    setShowmessage(!message);
                  }}
                />
              </button>
            </motion.div>
          )}
        </AnimatePresence>
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
        <motion.button
          whileHover={{
            scale: 1.025,
          }}
          whileTap={{
            scale: 0.975,
          }}
          onClick={addItems}
          className="flex bg-black  focus:ring-blue-900 justify-center items-center text-white px-5 rounded-lg cursor-pointer gap-2"
        >
          <GoPlus />
          Add
        </motion.button>
      </div>
      <div className="h-2 bg-gray-300 mx-auto w-[80%] my-2 rounded-full overflow-hidden">
        <div
          className="h-full bg-[#22C55E] transition-all duration-500 ease-out rounded-full"
          style={{
            width: `${porcentage}%`,
          }}
        ></div>
      </div>
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
              ({ id, task, choose, datetime, color, completed,isDeleted }, index) => (
                <motion.div
                  key={index}
                  initial={{ y: -15, scale: 0.95 }}
                  animate={{ y: 0, scale: 1 }}
                  exit={{
                    opacity: 0,
                    y: "-10px",
                  }}
                  transition={{ duration: 0.35, ease: "easeOut" }}
                  className="relative shadow-lg mb-0 flex items-center justify-between px-4 py-5 rounded-lg mt-5 mx-auto w-[60%]"
                >
                  <div className="flex relative items-center justify-center gap-2">
                    <div
                      className="w-6 h-6 bg-gray-300 cursor-pointer"
                      onClick={() => {
                        const updatedList = [...todoItem];
                        updatedList[index].completed =
                          !updatedList[index].completed;
                        setTodoItems(updatedList);
                      }}
                    >
                      <motion.svg
                        initial={{ scale: 0 }}
                        animate={{ scale: completed ? 1 : 0 }}
                        transition={{
                          duration: 0.5,
                          ease: "backInOut",
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
                    <p
                      className={`before before:content['']  relative before:transition-all before:duration-150 before:ease-in-out ${
                        completed ? "before:w-full" : "before:w-0"
                      } before:absolute before:left-0 before:top-1/2 before:-translate-y-1/2 before:h-[2px] before:bg-black`}
                    >
                      {task}
                    </p>
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
                    {
                      <AnimatePresence>
                        {isDeleted && (
                          <motion.div
                            initial={{
                              opacity: 0,
                              y: -10,
                            }}
                            animate={{
                              opacity: 1,
                              y: 0,
                            }}
                            transition={{
                              duration: 0.3,
                              ease: "easeInOut",
                            }}
                            className="absolute p-4 rounded-lg top-[50%] right-0 bg-white shadow-lg  "
                          >
                            <h2 className="text-xl flex gap-2 items-center   font-bold">
                              <RiDeleteBin6Line className="text-red-500" />
                              Delete Item
                            </h2>
                            <p className="opacity-50 my-2">
                              Are you sure you want to delete this item?
                            </p>
                            <div className="mt-3 flex items-center justify-center gap-3">
                              <motion.button
                                whileHover={{
                                  scale: 1.025,
                                }}
                                whileTap={{
                                  scale: 0.975,
                                }}
                                className="border px-2 text-xs  border-black rounded-sm  p-2 "
                                onClick={()=>{
                                  showisDeleted(id)
                                }}
                              >
                                Cancel
                              </motion.button>
                              <motion.button
                                whileHover="hovered"
                                whileTap={{
                                  scale: 0.975,
                                }}
                                className="flex items-center  gap-2 px-3 text-xs   rounded-sm bg-black text-white  py-2"
                                onClick={()=>{
                                  deleteItem(id)
                                }}
                              >
                                <div>
                                  <motion.svg
                                    variants={{
                                      hovered: { y: -5, rotate: -45, x: -5 },
                                    }}
                                    width="15"
                                    height="6"
                                    viewBox="0 0 15 6"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                  >
                                    <path
                                      d="M13.5549 2.12512L10.3836 2.11979L10.3845 1.5942C10.386 0.723368 9.61272 0.0161356 8.65736 0.0145306L6.35096 0.0106557C5.39561 0.00905072 4.61998 0.713681 4.61851 1.58452L4.61763 2.1101L1.44633 2.10478C0.650226 2.10344 0.00384145 2.69065 0.0026223 3.41633L0.00085629 4.4675C0.000368595 4.75779 0.25811 4.99353 0.576573 4.99406L14.415 5.01731C14.7334 5.01784 14.992 4.78298 14.9925 4.49269L14.9942 3.44151C14.9954 2.71584 14.351 2.12646 13.5549 2.12512ZM5.77171 1.58645C5.7722 1.29672 6.03135 1.0613 6.3492 1.06183L8.6556 1.06571C8.97345 1.06624 9.2318 1.30253 9.23132 1.59227L9.23043 2.11785L5.77083 2.11204L5.77171 1.58645Z"
                                      fill="white"
                                    />
                                  </motion.svg>
                                  <svg
                                    width="13"
                                    height="11"
                                    viewBox="0 0 13 11"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                  >
                                    <path
                                      d="M0.175584 -0.00630852C0.074032 -0.00647899 -0.00702404 0.0732931 -0.00234711 0.168815L0.451577 9.44781C0.493528 10.3066 1.2415 10.9803 2.15423 10.9818L10.797 10.9964C11.7098 10.9979 12.46 10.3267 12.5048 9.46804L12.99 0.190625C12.995 0.0951189 12.9142 0.0150751 12.8126 0.0149046L0.175584 -0.00630852ZM8.76833 1.34773C8.76883 1.05168 9.02392 0.812313 9.33836 0.812841C9.6528 0.813369 9.90707 1.05359 9.90658 1.34964L9.89486 8.31561C9.89437 8.61167 9.63928 8.85103 9.32484 8.8505C9.0104 8.84997 8.75612 8.60975 8.75662 8.3137L8.76833 1.34773ZM5.92273 1.34295C5.92323 1.0469 6.17831 0.807536 6.49275 0.808064C6.80719 0.808592 7.06147 1.04881 7.06097 1.34486L7.04926 8.31083C7.04876 8.60689 6.79368 8.84625 6.47924 8.84572C6.1648 8.8452 5.91052 8.60498 5.91102 8.30892L5.92273 1.34295ZM3.07713 1.33818C3.07763 1.04212 3.33271 0.802759 3.64715 0.803287C3.96159 0.803815 4.21587 1.04403 4.21537 1.34009L4.20366 8.30606C4.20316 8.60211 3.94807 8.84147 3.63363 8.84095C3.3192 8.84042 3.06492 8.6002 3.06542 8.30415L3.07713 1.33818Z"
                                      fill="white"
                                    />
                                  </svg>
                                </div>
                                Delete
                              </motion.button>
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    }
                    <RiDeleteBinLine
                      onClick={() => {
                        showisDeleted(id);
                      }}
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

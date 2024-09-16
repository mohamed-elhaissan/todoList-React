import { MdOutlineLightMode } from "react-icons/md";
import { MdOutlineDarkMode } from "react-icons/md";
import { DarkMode } from "../context/DarkmodeContext";
import { useContext } from "react";
export default function Catego() {
    const {isDarkModeActvated,setDarkModeActvated} = useContext(DarkMode)
  return (
    <div className="w-[20%] bg-white p-4 flex flex-col justify-between h-[100vh] ">
      <div className="flex flex-col justify-start items-start gap-2 ">
        <h1 className="font-bold text-3xl tracking-tight mb-10">Todo List</h1>
        <button className="border border-[rgba(0,0,0,.4)] flex pl-2 p-2 rounded-md hover:bg-black hover:text-white  w-full ">All</button>
        <button className="border border-[rgba(0,0,0,.4)] flex pl-2 p-2 rounded-md hover:bg-black hover:text-white  w-full ">Active</button>
        <button className="border border-[rgba(0,0,0,.4)] flex pl-2 p-2 rounded-md hover:bg-black hover:text-white  w-full ">Completed</button>
      </div>
      <div className="flex justify-center items-center gap-1 cursor-pointer text-xl" onClick={()=>{
        setDarkModeActvated(!isDarkModeActvated)
      }}>
        <MdOutlineLightMode/>
        <div className="w-14 h-7 relative bg-[#E4E4E7] rounded-full">
            <div className="absolute w-[40%] rounded-full h-[80%] bg-white transition-mainTransition  top-1/2 -translate-y-1/2"
            style={{
                left : !isDarkModeActvated ? '10%' : '50%',
            }}
            ></div>
        </div>
        <MdOutlineDarkMode/>
    
      </div>
    </div>
  );
}

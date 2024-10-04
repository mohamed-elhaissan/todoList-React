
import { MdOutlineLightMode } from "react-icons/md";
import { MdOutlineDarkMode } from "react-icons/md";

import { DarkMode } from "../context/DarkmodeContext";
import { useContext } from "react";
export default function Darkmode() {
  const { isDarkModeActvated, setDarkModeActvated } = useContext(DarkMode);
  return (
    <div
      className="flex justify-center ls-center items-center gap-1 cursor-pointer text-xl"
      onClick={() => {
        setDarkModeActvated(!isDarkModeActvated);
        
      }}
    >
      <span className="text-xs">Light</span>
      <MdOutlineLightMode />
      <div className="w-14 h-7 relative bg-[#E4E4E7]  rounded-full">
        <div
          className="absolute w-[40%] rounded-full h-[80%] bg-white  dark:bg-gray-400 transition-mainTransition  top-1/2 -translate-y-1/2"
          style={{
            left: !isDarkModeActvated ? "10%" : "50%",
          }}
        ></div>
      </div>
      <MdOutlineDarkMode />
      <span className="text-xs">Dark</span>
    </div>
  );
}

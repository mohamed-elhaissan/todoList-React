import { RiDeleteBinLine } from "react-icons/ri";
export default function Item({inputitem,optionval,dateval,color}) {
  return (
    <div className="shadow-lg mb-0 flex items-center justify-between px-4 py-5 rounded-lg mt-5 mx-auto w-1/2">
      <div className="flex items-center justify-center gap-2">
        <input type="checkbox" className="w-[100%] h-[100%]" />
        <p>{inputitem}</p>
      </div>
      <div className="flex items-center justify-center gap-2">
        <p className="bg-green-500 font-[400] text-xs rounded-full px-3 py-1 text-white ">
          {optionval}
        </p>
        <p className=" text-xs rounded-full px-2 border-2 border-[1px solid black] font-[500]">
          {dateval}
        </p>
        <RiDeleteBinLine className=" hover:bg-gray-100  cursor-pointer  w-[20%] h-[20%] p-2 rounded-full text-red-500 text-xl" />
      </div>
    </div>
  );
}

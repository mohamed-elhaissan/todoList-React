import { RiDeleteBinLine } from "react-icons/ri";
export default function Item() {
  return (
    <div className="shadow-lg mb-0 flex items-center justify-between px-4 py-5 rounded-lg mt-5 mx-auto w-1/2">
      <div className="flex items-center justify-center gap-2">
        <input type="checkbox" className="w-[100%] h-[100%]" />
        <p>Coding</p>
      </div>
      <div className="flex items-center justify-center gap-2">
        <p className="bg-green-500 text-sm rounded-full px-2 text-white font-bold">
          Personal
        </p>
        <p className=" text-xs rounded-full px-2 border-2 border-black font-bold">
          20102
        </p>
        <RiDeleteBinLine className=" hover:bg-gray-100  cursor-pointer  w-[20%] h-[20%] p-2 rounded-full text-red-500 text-xl" />
      </div>
    </div>
  );
}

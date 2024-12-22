import React from 'react'
import { IoCloseSharp } from "react-icons/io5";
import { useNavigate } from 'react-router';
const Tools = () => {
    const redirectTo = useNavigate();
    const viewTools = () => {
      redirectTo("/view-tools");
    };

    const close = () => {
        alert('close banner');
    }
  return (
    <div className="p-2">
      <div className="flex  rounded-[.5rem] overflow-hidden h-16 ">
        <div className="w-2 bg-[#1B4942]"></div>

        <div className="bg-[#15D79F] flex flex-row w-full  items-center    justify-between pl-4 pr-4">
          <h1>
            Explore trending tools that will help you move your business to the
            next level.
          </h1>

          <div className="flex flex-row items-center gap-8">
            <button
              onClick={viewTools}
              className="hover:border-b-2 hover:border-black"
            >
              View tools
            </button>
            <IoCloseSharp className="text-2xl cursor-pointer" onClick={close} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Tools
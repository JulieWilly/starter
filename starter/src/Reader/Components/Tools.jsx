import React from 'react'
import { IoCloseSharp } from "react-icons/io5";
const Tools = () => {
  return (
    <div className="p-2">
      <div className="bg-blue-200 flex flex-row h-10 items-center  rounded-[.5rem] p-4 justify-between">
        <h1>
          Explore trending tools that will help you move your business to the
          next level.
        </h1>

        <div className='flex flex-row items-center gap-8'>
          <button>View tools</button>
         < IoCloseSharp className='text-2xl'/>
        </div>
      </div>
    </div>
  );
}

export default Tools
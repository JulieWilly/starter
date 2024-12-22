import React from 'react'

const TopNavigation = ({sectName, isSet}) => {
  return (
    <>
      <div className="flex justify-between items-center flex-row">
        <h1 className="text-3xl font-san font-bold ">{sectName}</h1>
     {
      isSet ==='true' ?     <button className="bg-[#15D79F] text-black p-2 w-24 rounded-sm hover:scale-95 hover:transition-all ">
          View More
        </button>: ''
     }
      </div>
      <hr className="h-1 bg-[#1B4942] mt-2" />
    </>
  );
}

export default TopNavigation
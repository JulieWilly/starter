import React from 'react'
import { Link } from 'react-router';

const TopNavigation = ({sectName, isSet}) => {
  return (
    <>
      <div className="flex justify-between items-center flex-row">
        <h1 className="text-3xl font-san font-bold ">{sectName}</h1>
     {
      isSet ==='true' ?     <Link  to={'/'} className="   border-b-2 border-[#15D79F] text-red-500 text-center w-24  ">
          View More
        </Link>: ''
     }
      </div>
      <hr className="h-1 bg-[#1B4942] mt-2" />
    </>
  );
}

export default TopNavigation
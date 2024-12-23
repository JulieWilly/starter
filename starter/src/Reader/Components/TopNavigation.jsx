import React from 'react'
import { Link } from 'react-router';

const TopNavigation = ({sectName, isSet}) => {
  return (
    <div className=" flex w-full items-center ">
      <hr className="h-1 bg-[#1B4942]  w-full" />
      <h1 className="text-3xl font-san font-bold w-[30rem] text-center  ">{sectName}</h1>
      <hr className="h-1 bg-[#1B4942]  w-full" />
    </div>
  );
}

export default TopNavigation
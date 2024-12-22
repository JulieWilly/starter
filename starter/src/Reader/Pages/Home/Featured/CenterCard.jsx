import React from 'react'
import { CiBadgeDollar } from "react-icons/ci";
const CenterCard = ({redirect}) => {
  return (
    <div
      className=" grow  relative  w-1/4 h-auto overflow-hidden  "
      onClick={redirect}
    >
      <div className=" h-96 relative  rounded-lg overflow-hidden     hover:bg-gradient-to-r hover:from-orange-500 hover:to-[#baaa62] ">
        <img
          className=" w-full h-full object-cover block  cursor-pointer absolute   mix-blend-darken "
          src="https://images.pexels.com/photos/29237846/pexels-photo-29237846/free-photo-of-golden-ginkgo-leaves-in-toronto-s-fall.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          alt=""
        />

        <div className="p-2 mt-52        bg-[#151b28]  relative  text-white top-10">
          <div className="flex items-center justify-start gap-4 ">
            <h1 className="text-red-400 font-medium">Topic Area</h1>{" "}
            <span>50 hours ago</span>
          </div>
          <h1 className=" line-clamp-1 text-xl font-bold text-[#8D1A5F] mt-2 mb-2">
            Blog title
          </h1>
          <p className=" line-clamp-2">Topic subtitle</p>
          <div className="flex flex-row gap-2 mt-2">
            <span className="italic">10 min read</span>
          </div>
        </div>
      </div>
      <span className="absolute top-1 right-1  p-1 bg-red-500 rounded-tr-md">
        <CiBadgeDollar className="text-2xl" />
      </span>
    </div>
  );
}

export default CenterCard
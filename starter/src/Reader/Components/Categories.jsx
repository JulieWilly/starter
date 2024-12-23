import  { useState } from 'react'
import { IoIosArrowDown } from "react-icons/io";
import Topics from './Topics';
import { GrNext } from "react-icons/gr";
const items = [
  { id: 1, category: "Technology" },
  { id: 2, category: "Lifestyle" },
  { id: 3, category: "Health & Wellness" },
  { id: 4, category: "Business & Entrepreneurship" },
  { id: 5, category: "Travel" },
  { id: 6, category: "Education & Learning" },
];

const Categories = () => {
    const [open, setOpen] =useState();

items.map((i) => {console.log(i.category)})
  return (
    <div className="flex  w-full items-center flex-row justify-start gap-2 mt-4  ">
      <div
        className="flex items-center  flex-col  gap-2 relative  "
        onClick={() => {
          setOpen(!open);
        }}
      >
        <div className="  border-black border flex items-center justify-between rounded  delay-150 ease-in-out  p-2 gap-4 hover:bg-[#84888E] cursor-pointer hover:text-white">
          <span className="text-xl tracking-wide">Categories </span>
          <GrNext className="text-2xl" />
        </div>

        <div
          className={`absolute top-12 z-20 bg-white p-2 left-0    w-72 rounded-md  capitalize ${
            open ? "hidden" : "hidden"
          }`}
        >
          <hr className="mt-4 grid grid-cols-2 grid-rows-2 items-center  gap-2 mb-2" />

          {items.map((category) => (
            <h1
              key={category.id}
              className="p-2 hover:bg-[#F5F5F5] hover:text-[#1B4942]  text-xl  bg-white text-black rounded-sm cursor-pointer"
            >
              {category.category}
            </h1>
          ))}
        </div>
      </div>
      {/* <hr className="w-full  bg-black border-1 border-black" /> */}
      <Topics />
    </div>
  );
}

export default Categories;
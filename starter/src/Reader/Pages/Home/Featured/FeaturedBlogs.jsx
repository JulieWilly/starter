import { IoIosArrowDown } from "react-icons/io";
import TopNavigation from "../../../Components/TopNavigation";
import FeaturesCard from "./FeaturesCard";
import { useState } from "react";

const MostRead = () => {
  const [open, setOpen] = useState(false);
  return (
    <div className="p-8    mt-8 w-full bg-[#FBF8F2]  ">
      <TopNavigation sectName={"Featured Blogs"} isSet={"false"} />
      <div className="flex  w-full items-center justify-between gap-2 mt-4  ">
        <div className="flex items-center  flex-col gap-2 relative  "  onClick={() => {setOpen(!open)}}>
          <div className="  border-black border flex items-center justify-between rounded  delay-150 ease-in-out  p-2 gap-4 hover:bg-[#84888E] cursor-pointer hover:text-white">
            <span className="text-xl tracking-wide">Catergory </span>
            <IoIosArrowDown className="text-2xl" />
          </div>
          <div className={`absolute top-12 z-20 bg-white p-2 left-0    w-60 rounded-md  capitalize ${open ? 'block':'hidden'}`}>
            <hr className="mt-4 grid grid-cols-2 grid-rows-2 items-center  gap-2" />
            <div>
              <h2 className="p-2 hover:bg-[#F5F5F5] hover:text-[#1B4942]  text-xl  bg-white text-black rounded-sm cursor-pointer">
                Category 1
              </h2>
              <h2 className="p-2 hover:bg-[#F5F5F5] hover:text-[#1B4942]  text-xl  bg-white text-black rounded-sm cursor-pointer">
                Category 2
              </h2>
              <h2 className="p-2 hover:bg-[#F5F5F5] hover:text-[#1B4942]  text-xl  bg-white text-black rounded-sm cursor-pointer">
                Category 3
              </h2>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-8">
        <FeaturesCard />
      </div>
    </div>
  );
};

export default MostRead;

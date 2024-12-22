import TopNavigation from "../../Components/TopNavigation";
import { IoIosArrowDown } from "react-icons/io";
import BlogCard from "./BlogCard";

const MostRead = () => {
  return (
    <div className="p-8 mt-4 w-full bg-[#FBF8F2]  ">
      <TopNavigation sectName={"Featured"} isSet={"false"} />
      <div className="flex flex-row w-full items-center justify-between gap-2 mt-4">
        <div className="flex items-center  gap-2">
          <div className=" border-black border flex items-center justify-between rounded p-1 w-28 hover:bg-[#84888E] cursor-pointer hover:text-white">
            <span>Catergory </span>
            <IoIosArrowDown />
          </div>
        </div>
      </div>
      <div className="mt-8">
        <BlogCard />
      </div>
    </div>
  );
}

export default MostRead
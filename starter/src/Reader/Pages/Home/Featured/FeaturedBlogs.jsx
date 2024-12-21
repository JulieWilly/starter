import { IoIosArrowDown } from "react-icons/io";
import FeaturedCard from "./FeaturedCard";
import TopNavigation from "../../../Components/TopNavigation";
const FeaturedBlogs = () => {
  return (
    <div className="p-4">
      <TopNavigation sectName={'Featured'} />
      <div className="flex flex-row w-full items-center justify-between gap-2 mt-4">
        <div className="flex items-center  gap-2">
          <div className=" border-black border flex items-center justify-between rounded p-1 w-28 hover:bg-[#84888E] cursor-pointer hover:text-white">
            <span>Catergory </span>
            <IoIosArrowDown />
          </div>
        </div>
      </div>
      <FeaturedCard/>
    </div>
  );
};

export default FeaturedBlogs;

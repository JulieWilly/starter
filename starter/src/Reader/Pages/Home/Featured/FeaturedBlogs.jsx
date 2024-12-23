import { IoIosArrowDown } from "react-icons/io";
import TopNavigation from "../../../Components/TopNavigation";
import FeaturesCard from "./FeaturesCard";

const MostRead = () => {
  return (
    <div className="p-8    mt-8 w-full bg-[#FBF8F2]  ">
      <TopNavigation sectName={"Featured Blogs"} isSet={"false"} />
      {/* <div className="flex flex-row w-full items-center justify-between gap-2 mt-4">
        <div className="flex items-center  gap-2">
          <div className=" border-black border flex items-center justify-between rounded p-1 w-28 hover:bg-[#84888E] cursor-pointer hover:text-white">
            <span>Catergory </span>
            <IoIosArrowDown />
          </div>
        </div>
      </div> */}
      <div className="mt-8">
        <FeaturesCard />
      </div>
    </div>
  );
};

export default MostRead;

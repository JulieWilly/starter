import { IoFilterOutline } from "react-icons/io5";
import { IoIosArrowDown } from "react-icons/io";
const RecentBlogs = () => {
  return (
    <div className="p-4">
      <h2 className="text-2xl ">Trending Blogs</h2>
      <div className="flex flex-row w-full items-center justify-between gap-2 mt-4">
        <div className="flex items-center  gap-2">
          <div className=" border-black border flex items-center rounded p-1 hover:bg-[#84888E] cursor-pointer hover:text-white">
            <span>Catergory </span>
            <IoIosArrowDown />
          </div>

          <div className=" border-black border flex items-center rounded p-1 hover:bg-[#84888E] cursor-pointer hover:text-white">
            <span>Sub Catergories</span>
            <IoIosArrowDown />
          </div>
        </div>
        <div className="flex items-center gap-2 ">
          <IoFilterOutline className="border-black border text-4xl p-1 rounded-full bg-black text-white hover:hover:bg-[#84888E] " />
          <h4 className="text-2xl">Filter</h4>
        </div>{" "}
      </div>
    </div>
  );
};

export default RecentBlogs;

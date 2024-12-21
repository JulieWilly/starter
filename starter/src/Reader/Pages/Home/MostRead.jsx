import BlogCard from "./BlogCard"

const MostRead = () => {
  return (
    <div className="p-4 mt-4 w-full bg-[#FBF8F2]  ">
      <div className="flex justify-between items-center flex-row">
        <h1 className="text-3xl font-san font-bold ">Most Read</h1>
        <button className="bg-[#15D79F] text-black p-2 w-24 rounded-sm hover:scale-95 hover:transition-all ">
          View More
        </button>
      </div>
      <hr className="h-1 bg-[#1B4942] mt-2" />
      <div>
        <BlogCard />
      </div>
    </div>
  );
}

export default MostRead
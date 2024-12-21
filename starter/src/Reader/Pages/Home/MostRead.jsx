import BlogCard from "./BlogCard"

const MostRead = () => {
  return (
    <div className="p-4 mt-4 border-2 border-black w-full ">
      <div>
        {" "}
        <h1>Most Read</h1>
        <button>View More</button>
      </div>
      <div>
        <BlogCard />
      </div>
    </div>
  );
}

export default MostRead
import TopNavigation from "../../Components/TopNavigation";
import BlogCard from "./BlogCard"

const MostRead = () => {
  return (
    <div className="p-4 mt-4 w-full bg-[#FBF8F2]  ">
     <TopNavigation sectName={'Most Read'} />
      <div>
        <BlogCard />
      </div>
    </div>
  );
}

export default MostRead
import Categories from "../../../Components/Categories";
import TopNavigation from "../../../Components/TopNavigation";
import FeaturesCard from "./FeaturesCard";


const MostRead = () => {

  return (
    <div className="p-8    mt-8 w-full bg-[#FBF8F2]  ">

  <div className="p-2 mb-8 ">
    <Categories />
  </div>
      <TopNavigation sectName={"Featured Blogs"} isSet={"false"} />
 
      <div className="mt-8">
        <FeaturesCard />
      </div>
    </div>
  );
};

export default MostRead;

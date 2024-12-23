import TopNavigation from "../../../Components/TopNavigation";
import FeaturesCard from "./FeaturesCard";

const MostRead = () => {
  return (
    <div className="p-8      mt-8 w-full bg-[#FBF8F2]  ">
      <TopNavigation sectName={"Featured Blogs"} isSet={"false"} />
      <div className="mt-6 ">
        <FeaturesCard />
      </div>
    </div>
  );
};

export default MostRead;

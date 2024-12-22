import { useNavigate } from "react-router";

import MostRead from "../MostRead/MostRead";
import BlogCard from "../FeaturedCard";
import TopNavigation from "../../../Components/TopNavigation";
const FeaturedCard = () => {
  const redirectTo = useNavigate();

  // navigate to reading blog page
  const toReadBlog = () => {
    redirectTo("/read-blog/:blog_id");
  };
  return (
    <div
      className="  mt-6
    "
    >
      <div className="flex gap-2  flex-col p-4  ">
        {/* <MostRead /> */}
        <TopNavigation sectName={"Featured Blogs"} isSet={"true"} />

        <BlogCard />
      </div>
    </div>
  );
};

export default FeaturedCard;

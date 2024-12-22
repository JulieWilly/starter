import { useNavigate } from "react-router";
import BlogCard from '../BlogCard'
import MostRead from "../MostRead/MostRead";
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
      <div className="flex gap-2  ">
        {/* <MostRead />
         */}
         <BlogCard />
      </div>
    </div>
  );
};

export default FeaturedCard;

import { CiBadgeDollar } from "react-icons/ci";
import { useNavigate } from "react-router";
import LeftCard from "./LeftCard";
import RightCard from "./RightCard";
import CenterCard from "./CenterCard";
const FeaturedCard = () => {
  const redirectTo = useNavigate();

  // navigate to reading blog page
  const toReadBlog = () => {
    redirectTo('/read-blog/:blog_id')
  }
  return (
    <div
      className="  mt-6
    "
    >
      <div className="flex gap-2  ">
      <LeftCard redirect={toReadBlog} />
    <CenterCard redirect={toReadBlog} />

     <RightCard  redirect={toReadBlog}/>
      </div>
    </div>
  );
};

export default FeaturedCard;

import { useNavigate } from "react-router";


const FeaturesCard = () => {
  const redirectTo = useNavigate();

  // redirect to read blog page
  const toReadBlog = () => {
    redirectTo("/read-blog/:blog_id");
  }

  
  return (
    <div className="w-full    ">

    </div>
  );
};

export default FeaturesCard;
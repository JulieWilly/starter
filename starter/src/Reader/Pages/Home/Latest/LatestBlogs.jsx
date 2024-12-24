
import { useNavigate } from 'react-router';
import TopNavigation from '../../../Components/TopNavigation';
import LatestCard from './LatestCard';


const LatestBlogs = () => {
  const navigate = useNavigate();

  // navigate
  const toReadBlog = () => {
    navigate('/read-blog/:blog_id')
  }
  return (
    <div className=" p-8 pb-16 w-full">
      {/* <TopNavigation sectName={"Latest Blogs"} /> */}
      <h1 className="p-2 text-2xl font-bold text-[#1B4942]">Latest Posts</h1>
      <LatestCard />
    </div>
  );
}

export default LatestBlogs
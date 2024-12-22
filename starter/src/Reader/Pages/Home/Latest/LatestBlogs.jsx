
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
      <TopNavigation sectName={"Latest Blogs"} />
      <LatestCard />
    </div>
  );
}

export default LatestBlogs
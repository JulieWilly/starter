
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
    <div className="p-2 mt-2 ">
      <TopNavigation sectName={"Latest Blogs"} />
      <LatestCard />

    </div>
  );
}

export default LatestBlogs
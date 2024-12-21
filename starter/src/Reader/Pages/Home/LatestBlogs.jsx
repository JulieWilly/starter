
import TopNavigation from '../../Components/TopNavigation';
import BlogCard from './BlogCard';

const LatestBlogs = () => {
  return (
    <div className='p-2 mt-2'>
    <TopNavigation sectName={'Lates Blogs'}/>
      <BlogCard />
    </div>
  );
}

export default LatestBlogs
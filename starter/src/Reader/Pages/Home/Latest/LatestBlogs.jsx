
import TopNavigation from '../../../Components/TopNavigation';
import LatestCard from './LatestCard';


const LatestBlogs = () => {
  return (
    <div className='p-2 mt-2'>
    <TopNavigation sectName={'Lates Blogs'}/>
    <LatestCard />
    </div>
  );
}

export default LatestBlogs
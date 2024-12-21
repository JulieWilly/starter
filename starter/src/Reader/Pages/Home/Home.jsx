// import CreateBlog from "../Blogs/CreateBlog";
import Heros from "./Heros";
import LatestBlogs from "./LatestBlogs";
import MostRead from "./MostRead";
import RecentBlogs from "./RecentBlogs";

const Home = () => {
  return (
    <div>
      <Heros />
      <RecentBlogs />
      <LatestBlogs />
      <MostRead />

      {/* <CreateBlog /> */}
    </div>
  );
};

export default Home;

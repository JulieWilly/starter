// import CreateBlog from "../Blogs/CreateBlog";
import Footer from "../../Components/Footer";
import SubscribePage from "../../Components/SubscribePage";
import FeaturedBlogs from "./Featured/FeaturedBlogs";
import Heros from "./Heros";
import LatestBlogs from "./Latest/LatestBlogs";
import MostRead from "./MostRead";

const Home = () => {
  return (
    <div>
      <Heros />
      <FeaturedBlogs />

      <LatestBlogs />
      <MostRead />
      <SubscribePage />
      <Footer />

      {/* <CreateBlog /> */}
    </div>
  );
};

export default Home;

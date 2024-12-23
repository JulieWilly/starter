// import CreateBlog from "../Blogs/CreateBlog";
import Categories from "../../Components/Categories";
import Footer from "../../Components/Footer";
import SubscribePage from "../../Components/SubscribePage";
import ExploreTool from "./ExploreTool";
import FeaturedBlogs from "./Featured/FeaturedBlogs";
import Heros from "./Heros";
import LatestBlogs from "./Latest/LatestBlogs";
import MostRead from "./MostRead/MostRead";

const Home = () => {
  return (
    <div>
      <Heros />
    
      <FeaturedBlogs />
      <MostRead />
      <ExploreTool />
      <LatestBlogs />
      <SubscribePage />
      <Footer />

      {/* <CreateBlog /> */}
    </div>
  );
};

export default Home;

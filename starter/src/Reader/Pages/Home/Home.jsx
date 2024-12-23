// import CreateBlog from "../Blogs/CreateBlog";
import Footer from "../../Components/Footer";
import SubscribePage from "../../Components/SubscribePage";
import Topics from "../Topics/Topics";
import ExploreTool from "./ExploreTool";
import FeaturedBlogs from "./Featured/FeaturedBlogs";
import Heros from "./Heros";
import Ideas from "./Ideas/Ideas";
import LatestBlogs from "./Latest/LatestBlogs";
import MostRead from "./MostRead/MostRead";

const Home = () => {
  return (
    <div>
      <Heros />

      <FeaturedBlogs />
      <MostRead />
      <Ideas />
      <ExploreTool />
      <LatestBlogs />
      <Topics />
      <SubscribePage />
      <Footer />

      {/* <CreateBlog /> */}
    </div>
  );
};

export default Home;

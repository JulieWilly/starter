// import CreateBlog from "../Blogs/CreateBlog";
import Footer from "../../../Components/Footer";
import IntorSection from "../../../Components/IntorSection";
import SubscribePage from "../../../Components/SubscribePage";
import FeaturedBlogs from "./FeaturedBlogs";
import Heros from "../Heros";
import LatestBlogs from "../Latest/LatestBlogs";
import MostRead from "../MostRead/MostRead";

const Home = () => {
  return (
    <div>
      <Heros />
      <IntorSection />
      <FeaturedBlogs />
      {/* <MostRead /> */}
      {/* <LatestBlogs /> */}

      <SubscribePage />
      <Footer />

      {/* <CreateBlog /> */}
    </div>
  );
};

export default Home;

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Reader/Pages/Home/Home";
import Navigation from "./Reader/Components/Navigation";
import CreateBlog from "./Reader/Pages/Blogs/CreateBlog";
import SignIn from "./Reader/Pages/Auth/SignIn";
import SignUp from "./Reader/Pages/Auth/SignUp";
import Start from "./Reader/Pages/Start/Start";
import Grow from "./Reader/Pages/Grow/Grow";
import Monetize from "./Reader/Pages/Monetize/Monetize";
import Topics from "./Reader/Pages/Topics/Topics";
// import CreateBlog from "./Reader/Pages/Blogs/CreateBlog";

function App() {
  return (
    <BrowserRouter>
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/create-blog" element={<CreateBlog />} />
        <Route path="/sign-in" element={<SignIn />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/start" element={<Start />} />
        <Route path="/grow" element={<Grow />} />
        <Route path="/monetize" element={<Monetize />} />
        <Route path="/topics" element={<Topics />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
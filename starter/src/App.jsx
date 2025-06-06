import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navigation from "./Reader/Components/Navigation";
import CreateBlog from "./Reader/Pages/Blogs/CreateBlog";
import SignIn from "./Reader/Pages/Auth/SignIn";
import SignUp from "./Reader/Pages/Auth/SignUp";
import Start from "./Reader/Pages/Start/Start";
import Grow from "./Reader/Pages/Grow/Grow";
import Monetize from "./Reader/Pages/Monetize/Monetize";
import ReadBlog from "./Reader/Pages/Blogs/ReadBlog";
import Tools from "./Reader/Components/Tools";
import ViewTools from "./Reader/Pages/Tools/ViewTools";
import Home from "./Reader/Pages/Home/Home";
import ErrorPage from "./Reader/Components/ErrorPage";

function App() {
  return (
    <BrowserRouter>
      <Tools />
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/create-blog" element={<CreateBlog />} />
        <Route path="/sign-in" element={<SignIn />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/start" element={<Start />} />
        <Route path="/grow" element={<Grow />} />
        <Route path="/monetize" element={<Monetize />} />
        <Route path="/read-blog/:blog_id" element={<ReadBlog />} />
        <Route path="/view-tools" element={<ViewTools />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

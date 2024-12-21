import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Reader/Pages/Home/Home";
import Navigation from "./Reader/Components/Navigation";
import CreateBlog from "./Reader/Pages/Blogs/CreateBlog";
import SignIn from "./Reader/Pages/Auth/SignIn";
import SignUp from "./Reader/Pages/Auth/SignUp";
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
      </Routes>
    </BrowserRouter>
  );
}

export default App;

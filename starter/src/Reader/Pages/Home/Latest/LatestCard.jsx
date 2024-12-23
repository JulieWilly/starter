// import { Link } from "react-router";
import { useNavigate } from "react-router";
import blog from "../../../data/blogdata";
import colors from "../../../data/Color";
import LeftCard from "./LeftCard";
// import { MdNavigateNext } from "react-icons/md";
// import Image from "../../../Components/Image";


const LatestCard = () => {
  const redirectTo = useNavigate();

  // navigate to read blogs
  const toReadBlog = (_id) => {
    redirectTo(`/read-blog/${_id}`)
  }
  return (
    <div className="flex flex-col">
      <div className="flex flex-row  gap-4 justify-start   p-2 flex-wrap  ">
        {blog.map((blog, index) => (
          <div
            onClick={() => toReadBlog(blog.id)}
            key={blog.id}
            className={`card border grow  justify-between w-1/4  rounded-md hover:border-[#8D1A5F]   cursor-pointer overflow-hidden`}
          >
            <div className={`h-4 ${colors[index % colors.length]}`}></div>
            <div className="p-4  ">
              <h1 className="text-xl font-bold tracking-wide line-clamp-2 ">
                {blog.title}
              </h1>
              <p className="line-clamp-3 mt-2">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Quisquam optio similique, dolorum ab nam tempora rem numquam
                libero placeat cupiditate qui, quibusdam laborum temporibus quae
                labore, laboriosam quas animi consequuntur?
                {/* {blog.subtitle} */}
              </p>

              <div className=" gap-4 mt-8 flex items-center">
                <span className="font-bold text-red-500">{blog.topic}</span>
                <span>{blog.date}</span>
              </div>
            </div>
          </div>
        ))}

        {/* <LeftCard /> */}
        {/* <div>
        <div className="flex flex-col gap-2 p-2">
          <div className="flex flex-row-reverse justify-between">
            <div className="w-1/2  p-2">
              <h1 className="font-bold text-lg"> Must read blogs</h1>
              <h1 className="mt-4 mb-8 text-2xl font-bold line-clamp-3">
                7 Movies to watch for this summer, &apos;The boss baby; Back in
                the crib &apos;
              </h1>

              <span className="italic  ">March 5</span>
            </div>
            <div className="w-1/2  h-52">
              <Image
                path={
                  "https://images.pexels.com/photos/1477166/pexels-photo-1477166.jpeg?auto=compress&cs=tinysrgb&w=600"
                }
              />
            </div>
          </div>

          <hr className="h-[.1rem] bg-black " />
        </div>

        <div className="flex flex-col gap-2">
          <div className="flex flex-row justify-between">
            <div className="w-1/2  p-2">
              <h1 className="font-bold text-lg"> Must read blogs</h1>
              <h1 className="mt-4 mb-8 text-2xl font-bold line-clamp-3">
                7 Movies to watch for this summer, &apos;The boss baby; Back in
                the crib &apos;
              </h1>

              <span className="italic  ">March 5</span>
            </div>
            <div className="w-1/2  h-52">
              <Image
                path={
                  "https://images.pexels.com/photos/29237846/pexels-photo-29237846/free-photo-of-golden-ginkgo-leaves-in-toronto-s-fall.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                }
              />
            </div>
          </div>

          <hr className="h-[.1rem] bg-black " />
        </div>
        <div className="flex flex-col gap-2">
          <div className="flex flex-row-reverse justify-between">
            <div className="w-1/2  p-2">
              <h1 className="font-bold text-lg"> Must read blogs</h1>
              <h1 className="mt-4 mb-8 text-2xl font-bold line-clamp-3">
                7 Movies to watch for this summer, &apos;The boss baby; Back in
                the crib &apos;
              </h1>

              <span className="italic  ">March 5</span>
            </div>
            <div className="w-1/2  h-52">
              <Image
                path={
                  "https://images.pexels.com/photos/325044/pexels-photo-325044.jpeg?auto=compress&cs=tinysrgb&w=600"
                }
              />
            </div>
          </div>

          <hr className="h-[.1rem] bg-black " />
        </div>
        <div className="col-span-2 bg-red-500 h-max"></div>
        <div className="w-full flex col-span-2  justify-end items-center">
          <Link to={""} className="border-b-2 border-black">
            More Blogs{" "}
          </Link>{" "}
          <MdNavigateNext className="text-3xl" />
        </div>
      </div> */}
      </div>

      <div className="flex justify-end p-2  text-red-500 underline text-lg">
        {" "}
        <span className="right cursor-pointer">More Updates</span>
      </div>
    </div>
  );
};

export default LatestCard;

import { Link } from "react-router";
import Image from "../../Components/Image"
import { MdNavigateNext } from "react-icons/md";
const ReadBlog = () => {
  return (
    <div className="p-4 flex items-center justify-center flex-col">
      <div className="flex items-center  gap-2  w-full font-light">
        <Link to={'/'}>Home</Link> <MdNavigateNext /> Blog Names
      </div>
      <div className="p-4 flex items-center justify-center flex-col  ">
        <div>
          <div className=" flex gap-8 items-center p-4">
            <span className="bg-[#F4FCD3] p-2 rounded-lg">Popular Article</span>

            <span className="font-bold tracking-wide">December 21, 2024</span>
          </div>
        </div>
        <div className="w-3/4  h-[30rem]">
          <Image
            path={
              "https://images.pexels.com/photos/1108572/pexels-photo-1108572.jpeg?auto=compress&cs=tinysrgb&w=600"
            }
          />
        </div>
      </div>
    </div>
  );
}

export default ReadBlog
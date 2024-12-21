import blog from '../../../assets/blog.jpg'

const BlogCard = () => {
  return (
    <div className="mt-4 h-auto flex items-center justify-between  flex-wrap flex-row gap-1  sm:flex  ">
      <div className="w-72 flex flex-col  small:w-full medium:w-72  ">
        <div className="w-full rounded-lg overflow-hidden">
          <img
            src={blog}
            alt="blog image"
            className="block object-fill w-full h-1/2"
          />
        </div>

        <div className="mt-2 p-1 flex flex-col">
          <div className="flex flex-row justify-between items-center">
            <h3>Authors Name</h3>

            <span>12/15/2024</span>
          </div>
          <h2 className="font-medium text-xl  pb-1 truncate">
            Blog title Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Beatae provident fuga quasi fugit, consequatur doloremque maiores
            officia necessitatibus qui? Nihil laboriosam quis id voluptas aut
            sit qui, modi repellat quibusdam!
          </h2>
          <span className=" line-clamp-3">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            Consequatur explicabo, id doloribus aperiam ipsam laboriosam!
            Consequatur explicabo, id doloribus aperiam ipsam laboriosam!
          </span>
          <div className=" mt-2 flex flex-row justify-between items-center p-1">
            <h4 className="text-sm mb-1 text-red-500">
              Topic area of the blog
            </h4>
            <button className="bg-black text-white p-1 w-24 ">View more</button>
          </div>
        </div>
      </div>
      <div className="w-72 flex flex-col  small:w-full medium:w-72  ">
        <div className="w-full rounded-lg overflow-hidden">
          <img
            src={blog}
            alt="blog image"
            className="block object-fill w-full h-1/2"
          />
        </div>

        <div className="mt-2 p-1 flex flex-col">
          <div className="flex flex-row justify-between items-center">
            <h3>Authors Name</h3>

            <span>12/15/2024</span>
          </div>
          <h2 className="font-medium text-xl  pb-1 truncate">
            Blog title Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Beatae provident fuga quasi fugit, consequatur doloremque maiores
            officia necessitatibus qui? Nihil laboriosam quis id voluptas aut
            sit qui, modi repellat quibusdam!
          </h2>
          <span className=" line-clamp-3">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            Consequatur explicabo, id doloribus aperiam ipsam laboriosam!
            Consequatur explicabo, id doloribus aperiam ipsam laboriosam!
          </span>
          <div className=" mt-2 flex flex-row justify-between items-center p-1">
            <h4 className="text-sm mb-1 text-red-500">
              Topic area of the blog
            </h4>
            <button className="bg-black text-white p-1 w-24 ">View more</button>
          </div>
        </div>
      </div>
      <div className="w-72 flex flex-col  small:w-full medium:w-72  ">
        <div className="w-full rounded-lg overflow-hidden">
          <img
            src={blog}
            alt="blog image"
            className="block object-fill w-full h-1/2"
          />
        </div>

        <div className="mt-2 p-1 flex flex-col">
          <div className="flex flex-row justify-between items-center">
            <h3>Authors Name</h3>

            <span>12/15/2024</span>
          </div>
          <h2 className="font-medium text-xl  pb-1 truncate">
            Blog title Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Beatae provident fuga quasi fugit, consequatur doloremque maiores
            officia necessitatibus qui? Nihil laboriosam quis id voluptas aut
            sit qui, modi repellat quibusdam!
          </h2>
          <span className=" line-clamp-3">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            Consequatur explicabo, id doloribus aperiam ipsam laboriosam!
            Consequatur explicabo, id doloribus aperiam ipsam laboriosam!
          </span>
          <div className=" mt-2 flex flex-row justify-between items-center p-1">
            <h4 className="text-sm mb-1 text-red-500">
              Topic area of the blog
            </h4>
            <button className="bg-black text-white p-1 w-24 ">View more</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BlogCard
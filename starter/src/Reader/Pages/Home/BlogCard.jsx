import blog from '../../../assets/blog.jpg'

const BlogCard = () => {
  return (
    <div className="border border-black mt-4 h-auto flex items-center justify-between flex-row flex-wrap">
      <div className="w-1/4 h-auto border-black border flex flex-col rounded ">
        <div className="w-full">
          <img
            src={blog}
            alt="blog image"
            className="block object-fill w-full h-1/2"
          />
        </div>

        <div className="mt-2 p-1 flex flex-col">
          <h4 className="text-sm mb-1">Topic area of the blog</h4>
          <h2 className="font-medium text-xl  pb-1">Blog title</h2>
          <span>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            Consequatur explicabo, id doloribus aperiam ipsam laboriosam!
          </span>

          <div className=" mt-2 flex flex-row justify-between items-center">
            <div className="flex flex-row   flex items-center gap-2">
              <div className="w-12 h-12 ">
                <img
                  src={blog}
                  alt=""
                  className="h-full w-full block object-fill rounded-full"
                />
              </div>
              <h3>Authors Name</h3>
            </div>
            <button className="bg-black text-white p-1 w-24 ">View more</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BlogCard
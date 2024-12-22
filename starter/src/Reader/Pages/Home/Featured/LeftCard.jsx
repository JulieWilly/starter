import { CiBadgeDollar } from "react-icons/ci";
const LeftCard = ({redirect}) => {
  return (
    <div className=" grow cursor-pointer elevation-3 h-max " onClick={redirect}>
      <div className="relative   ">
        <div className="rounded-md overflow-hidden  hover:bg-gradient-to-r hover:from-orange-500 hover:to-orange-300">
          <img
            className=" relative w-full h-64   block object-cover mix-blend-darken "
            src="https://images.pexels.com/photos/29237846/pexels-photo-29237846/free-photo-of-golden-ginkgo-leaves-in-toronto-s-fall.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt="blog image"
          />
        </div>
        <span className="absolute top-1 right-1  p-1 bg-red-500 rounded-tr-md">
          {" "}
          {/* Premium */}
          <CiBadgeDollar className="text-2xl" />
        </span>
        <div className="p-1">
          <div className="flex items-center justify-between ">
            <h1 className="text-red-400 font-medium">Topic Area</h1>{" "}
            <span className="italic font-bold">12/14/2024</span>
          </div>
          <h1 className=" line-clamp-2 text-xl font-bold text-[#8D1A5F]">
            New technology discoveredl
          </h1>
          <p className="line-clamp-1">Subtitle here</p>
          <div className="w-full flex justify-start items-center mt-4 gap-2">
            <span className="italic">10 min read</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LeftCard

import { CiBadgeDollar } from "react-icons/ci";
import { useNavigate } from "react-router";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import data from "../../../data/FeaturedBlogs";


const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
    slidesToSlide: 3, // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
    slidesToSlide: 2, // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    slidesToSlide: 1, // optional, default to 1.
  },
};



const FeaturesCard = () => {
  const redirectTo = useNavigate();

  // redirect to read blog page
  const toReadBlog = () => {
    redirectTo("/read-blog/:blog_id");
  }

  
  return (
    <div className="w-full    ">
      <Carousel
        swipeable={false}
        draggable={false}
        showDots={true}
        responsive={responsive}
        ssr={true} // means to render carousel on server-side.
        infinite={true}
        autoPlay={true}
        autoPlaySpeed={1000}
        keyBoardControl={true}
        customTransition="all .5"
        transitionDuration={500}
        containerClass="carousel-container"
        removeArrowOnDeviceType={["tablet", "mobile"]}
        dotListClass="custom-dot-list-style"
        itemClass="carousel-item-padding-40-px"
      >
        {data.map((featured) => (
          <div key={featured.id} className="p-2">
            <div
              className="relative flex flex-row bg-[#F0EAE5] rounded-lg  border-2 w-full overflow-hidden "
              onClick={toReadBlog}
            >
              <div className=" relative w-1/2 h-52 ">
                <img
                  className="object-cover w-full h-full "
                  src={featured.imageUrl}
                  alt=""
                />
              </div>
              <span className="absolute top-1 left-1  p-1 bg-red-500 rounded">
                <CiBadgeDollar className="text-3xl" />
              </span>
              <div className="w-1/2 p-2 flex  justify-between flex-col ">
                <div>
                  <h1 className="line-clamp-2 text-2xl tracking-wide font-bold">
                    {featured.title}
                  </h1>{" "}
                  <h1 className="line-clamp-2 mt-2 font-light">
                    {featured.desc}
                  </h1>
                </div>

                <div className="flex flex-row justify-between items-center ">
                  <h1 className="text-red-500 font-bold text-xl">
                    {featured.topic}
                  </h1>
                  <h1 className="italic">{featured.date}</h1>
                </div>
              </div>
            </div>
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default FeaturesCard;
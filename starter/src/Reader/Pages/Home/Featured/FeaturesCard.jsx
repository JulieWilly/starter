
import { CiBadgeDollar } from "react-icons/ci";
import { useNavigate } from "react-router";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

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


const data = [
  {
    id: 1,
    title:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officiis possimus tenetur, ea natus iste praesentium voluptate distinctio veritatis sed odit.",
    desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officiis possimus tenetur, ea natus iste praesentium voluptate distinctio veritatis sed odit. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officiis possimus tenetur, ea natus iste praesentium voluptate distinctio veritatis sed odit.",
    topic: "Technology",
    imageUrl:
      "https://images.pexels.com/photos/45853/grey-crowned-crane-bird-crane-animal-45853.jpeg?auto=compress&cs=tinysrgb&w=600",
    date: "15/10/2024",
  },
  {
    id: 2,
    title:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officiis possimus tenetur, ea natus iste praesentium voluptate distinctio veritatis sed odit.",
    desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officiis possimus tenetur, ea natus iste praesentium voluptate distinctio veritatis sed odit. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officiis possimus tenetur, ea natus iste praesentium voluptate distinctio veritatis sed odit.",
    topic: "Lifestyle",
    imageUrl:
      "https://images.pexels.com/photos/47547/squirrel-animal-cute-rodents-47547.jpeg?auto=compress&cs=tinysrgb&w=600",
    date: "18/06/2024",
  },
  {
    id: 3,
    title:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officiis possimus tenetur, ea natus iste praesentium voluptate distinctio veritatis sed odit.",
    desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officiis possimus tenetur, ea natus iste praesentium voluptate distinctio veritatis sed odit. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officiis possimus tenetur, ea natus iste praesentium voluptate distinctio veritatis sed odit.",
    topic: "Technology",
    imageUrl:
      "https://images.pexels.com/photos/247376/pexels-photo-247376.jpeg?auto=compress&cs=tinysrgb&w=600",
    date: "12/14/2024",
  },
  {
    id: 4,
    title:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officiis possimus tenetur, ea natus iste praesentium voluptate distinctio veritatis sed odit.",
    desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officiis possimus tenetur, ea natus iste praesentium voluptate distinctio veritatis sed odit. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officiis possimus tenetur, ea natus iste praesentium voluptate distinctio veritatis sed odit.",
    topic: "Technology",
    imageUrl:
      "https://images.pexels.com/photos/733090/pexels-photo-733090.jpeg?auto=compress&cs=tinysrgb&w=600",
    date: "12/14/2024",
  },
  {
    id: 5,
    title:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officiis possimus tenetur, ea natus iste praesentium voluptate distinctio veritatis sed odit.",
    desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officiis possimus tenetur, ea natus iste praesentium voluptate distinctio veritatis sed odit. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officiis possimus tenetur, ea natus iste praesentium voluptate distinctio veritatis sed odit.",
    topic: "Technology",
    imageUrl:
      "https://images.pexels.com/photos/53957/striped-core-butterflies-butterfly-brown-53957.jpeg?auto=compress&cs=tinysrgb&w=600",
    date: "12/14/2024",
  },
  {
    id: 6,
    title:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officiis possimus tenetur, ea natus iste praesentium voluptate distinctio veritatis sed odit.",
    desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officiis possimus tenetur, ea natus iste praesentium voluptate distinctio veritatis sed odit. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officiis possimus tenetur, ea natus iste praesentium voluptate distinctio veritatis sed odit.",
    topic: "Technology",
    imageUrl:
      "https://images.pexels.com/photos/2295744/pexels-photo-2295744.jpeg?auto=compress&cs=tinysrgb&w=600",
    date: "12/14/2024",
  },
];
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
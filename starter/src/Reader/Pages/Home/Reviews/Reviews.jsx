import Image from '../../../Components/Image';
import TopNavigation from '../../../Components/TopNavigation'
import ReviewsCard from './ReviewsCard';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const Reviews = () => {
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
  return (
    <div className=" p-8">
      <TopNavigation sectName={"Reviews"} isSet={"false"} />
      <Carousel
        swipeable={false}
        draggable={false}
        showDots={true}
        responsive={responsive}
        ssr={true} // means to render carousel on server-side.
        infinite={true}
        // autoPlay={this.props.deviceType !== "mobile" ? true : false}
        autoPlaySpeed={1000}
        keyBoardControl={true}
        customTransition="all .5"
        transitionDuration={500}
        containerClass="carousel-container"
        removeArrowOnDeviceType={["tablet", "mobile"]}
        // deviceType={this.props.deviceType}
        dotListClass="custom-dot-list-style"
        itemClass="carousel-item-padding-40-px"
        className="w-full  "
        autoPlay={true}
      >
        <div className="w-full p-2">
          <ReviewsCard />
        </div>
        <div className="w-full p-2">
          <ReviewsCard />
        </div>
        <div className="w-full p-2">
          <ReviewsCard />
        </div>
        <div className="w-full p-2">
          <ReviewsCard />
        </div>
        <div className="w-full p-2">
          <ReviewsCard />
        </div>

        {/* <div className="w-full  w-full h-40 p-2">
          <Image path="https://images.pexels.com/photos/257092/pexels-photo-257092.jpeg?auto=compress&cs=tinysrgb&w=600" />
        </div>
        <div className="w-full border-2 border-black w-full h-40">
          <Image path="https://images.pexels.com/photos/325044/pexels-photo-325044.jpeg?auto=compress&cs=tinysrgb&w=600" />
        </div>
        <div className="w-full border-2 border-black w-full h-40">
          <Image path="https://images.pexels.com/photos/593655/pexels-photo-593655.jpeg?auto=compress&cs=tinysrgb&w=600" />
        </div>

        <div className="w-full border-2 border-black w-full h-40">
          <Image path=" https://images.pexels.com/photos/196664/pexels-photo-196664.jpeg?auto=compress&cs=tinysrgb&w=600" />
        </div>
        <div className="w-full border-2 border-black w-full h-40">
          <Image path="  https://images.pexels.com/photos/931162/pexels-photo-931162.jpeg?auto=compress&cs=tinysrgb&w=600" />
        </div>
        <div className="w-full border-2 border-black w-full h-40">
          <Image path=" https://images.pexels.com/photos/70330/pexels-photo-70330.jpeg?auto=compress&cs=tinysrgb&w=600" />
        </div> */}
      </Carousel>
    </div>
  );
}

export default Reviews